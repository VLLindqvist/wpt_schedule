import { DefaultTheme } from "styled-components";

const getSCTheme = (): DefaultTheme => ({
  borderRadius: "4px",
  dark: true,
  colors: {
    primary: "#22346d",
    primaryNull: "rgba(124, 60, 60, 0)",
    secondary: "#68DFE2",
    secondaryNull: "rgba(240, 227, 113, 0)",
    bg: "rgba(249, 250, 251, 1)",
    bg950: "rgba(249, 250, 251, 0.95)",
    bg900: "rgba(249, 250, 251, 0.9)",
    bg800: "rgba(249, 250, 251, 0.8)",
    bg700: "rgba(249, 250, 251, 0.7)",
    bgNull: "rgba(249, 250, 251, 0)",
    antibg: "rgba(31, 41, 55, 1)",
    antibgNull: "rgba(31, 41, 55, 0)",
    text: "#1F2937",
    antiText: "#F9FAFB",
  },
});

export default getSCTheme;
