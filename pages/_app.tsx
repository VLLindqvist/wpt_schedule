import { useEffect, useMemo, useState } from "react";
import type { AppProps } from "next/app";
import { MuiThemeProvider } from "@material-ui/core";
import { ThemeProvider as SCThemeProvider } from "styled-components";

import getMuiTheme from "styles/muiTheme";
import getSCTheme from "styles/SCTheme";
import GlobalStyle from "styles/GlobalStyles";
import { georamaFallbackStyle, poppinsFallbackStyle } from "styles/fallbackFontStyles";
import handleFontLoad from "utils/handleFontLoad";
import HeadTags from "Components/HeadTags";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  const muiTheme = useMemo(() => getMuiTheme(), []);
  const scTheme = useMemo(() => getSCTheme(), []);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentNode?.removeChild(jssStyles);

    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = scTheme.colors.bg;
  }, [scTheme]);

  useEffect(() => {
    handleFontLoad("Poppins", poppinsFallbackStyle);
    handleFontLoad("Georama", georamaFallbackStyle);
  }, []);

  return (
    <>
      <HeadTags />
      <GlobalStyle />
      <SCThemeProvider theme={scTheme}>
        <MuiThemeProvider theme={muiTheme}>
          <div style={{ visibility: mounted ? "visible" : "hidden", position: "relative" }}>
            <Component {...pageProps} />
          </div>
        </MuiThemeProvider>
      </SCThemeProvider>
    </>
  );
}

export default MyApp;
