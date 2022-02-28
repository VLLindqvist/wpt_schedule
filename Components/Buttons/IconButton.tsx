import React, { FC, forwardRef } from "react";
import MuiIconButton from "@material-ui/core/IconButton";
import withStyles, { Styles } from "@material-ui/core/styles/withStyles";
import { CircularProgress, Theme } from "@material-ui/core";
import ButtonWrapper from "./ButtonWrapper";

type IconButtonProps = {
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  error?: boolean;
  color?: "inherit" | "primary" | "secondary" | "default";
  onClick?: (e: React.MouseEvent) => any;
  styles?: Styles<Theme, {}, never>;
  "aria-label": string;
  // [key: string]: any;
};
export const IconButton: FC<IconButtonProps> = ({
  loading,
  fullWidth,
  children,
  disabled,
  error,
  color,
  onClick,
  styles,
  ["aria-label"]: ariaLabel,
}) => {
  const WhichButton =
    styles && Object.keys(styles) && Object.keys(styles).length > 0
      ? withStyles(styles)(MuiIconButton)
      : MuiIconButton;

  return (
    <ButtonWrapper>
      <WhichButton
        aria-label={ariaLabel}
        disabled={disabled || loading}
        color={color || "primary"}
        onClick={onClick}
      >
        {children}
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

export default IconButton;
