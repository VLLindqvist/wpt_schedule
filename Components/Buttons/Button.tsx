import React, { FC, Fragment } from "react";
import { CircularProgress, Theme } from "@material-ui/core";
import withStyles, { Styles } from "@material-ui/core/styles/withStyles";
import MuiButton from "@material-ui/core/Button";

import ButtonWrapper from "./ButtonWrapper";
import Link from "Components/Link";
import { LinkProps } from "next/link";

type ButtonProps = {
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  error?: boolean;
  color?: "inherit" | "primary" | "secondary" | "default";
  variant?: "text" | "outlined" | "contained";
  onClick?: (e: React.MouseEvent) => any;
  styles?: Styles<Theme, {}, never>;
  href?: string;
  target?: string;
  rel?: string;
};
const Button: FC<ButtonProps> = ({
  loading,
  children,
  disabled,
  color,
  variant,
  onClick,
  styles,
  href,
  target,
  rel,
}) => {
  const WhichButton = styles ? withStyles(styles)(MuiButton) : MuiButton;

  const content = href ? (
    <Link underline="none" {...{ href, target, rel }}>
      {children}
    </Link>
  ) : (
    children
  );

  return (
    <ButtonWrapper>
      <WhichButton
        variant={variant || "contained"}
        disabled={disabled || loading}
        color={color || "primary"}
        onClick={onClick}
      >
        {content}
      </WhichButton>
      {loading && (
        <CircularProgress
          size="1.2rem"
          style={{
            color: "#4B5563",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: -12,
            marginLeft: -12,
          }}
        />
      )}
    </ButtonWrapper>
  );
};

export default Button;
