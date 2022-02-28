import React, { FC } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@material-ui/core/Link";

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
type LinkProps = NextLinkProps & MuiLinkProps;
const Link: FC<LinkProps> = (
  { children, href, as, passHref, prefetch, replace, scroll, shallow, locale, ...muiLinkProps },
  ref,
) => {
  const nextLinkProps = {
    href,
    as,
    prefetch,
    replace,
    scroll,
    shallow,
    locale,
  };
  return (
    <NextLink {...nextLinkProps} passHref>
      <MuiLink component="a" {...muiLinkProps} color="inherit">
        {children}
      </MuiLink>
    </NextLink>
  );
};

export default Link;
