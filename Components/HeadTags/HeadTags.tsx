import Head from "next/head";
import React, { FC } from "react";

const HeadTags: FC = () => {
  return (
    <Head>
      <title>World Padel Tour 2022 Calendar</title>
      <meta
        name="viewport"
        content="width=device-width, height=device-height, viewport-fit=cover, initial-scale=1, maximum-scale=10"
      />
      <meta name="msapplication-TileColor" content="#22346d" />
      <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
      <meta name="theme-color" content="#22346d" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="description" content="World Padel Tour 2022 Tournament Dates" />
      <link rel="icon" href="/favicon.ico" />
      {/* <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="icons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="icons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="icons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="icons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="icons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="icons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="icons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="icons/apple-icon-152x152.png"
      /> */}
      <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-icon-180x180.png" />
      {/* <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="icons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="icons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="icons/favicon-16x16.png"
      /> */}
      {/* <meta property="og:url" content="https://wpt.lindquist.info/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="World Padel Tour 2022 Calendar" />
      <meta
        property="og:description"
        content="The unofficial website to get a subscribable calendar of the 2022 World Padel Tour tournament dates."
      />
      <meta property="og:image" content="/preview-image.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="World Padel Tour logo" /> */}
    </Head>
  );
};

export default HeadTags;
