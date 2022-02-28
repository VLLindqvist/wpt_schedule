import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Link from "Components/Link";

const Copyright: FC = () => {
  return (
    <div className="w-full grid place-items-center text-center">
      <div className="rounded-sm px-3 py-1 mb-1">
        <Typography variant="body2">
          {/* &copy;{" "} */}
          Unofficial site. This site is not affilliated with the{" "}
          <Link target="blank" underline="always" color="inherit" href="https://www.worldpadeltour.com/">
            World Padel Tour.
          </Link>{" "}
        </Typography>
      </div>
    </div>
  );
};

const Footer: FC = () => {
  return (
    <footer className="w-full grid place-items-center">
      <Copyright />
    </footer>
  );
};

export default Footer;
