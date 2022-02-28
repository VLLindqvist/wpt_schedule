import { darken, lighten } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";

const getMuiTheme = () =>
  createTheme({
    shape: {
      borderRadius: 3,
    },
    palette: {
      type: "light",
      primary: {
        main: "#22346d",
      },
      secondary: {
        main: "#68DFE2",
      },
      text: {
        primary: "#1F2937",
        secondary: "#F9FAFB",
      },
      action: {
        disabledOpacity: 0.7,
      },
    },
    overrides: {
      MuiSelect: {
        outlined: {
          padding: "15px",
        },
      },
      MuiCardHeader: {
        title: {
          fontSize: "1.3rem",
          fontWeight: 500,
        },
        subheader: {
          color: "#4B5563",
          fontSize: "0.8rem",
        },
      },
      MuiCssBaseline: {
        "@global": {
          html: {
            WebkitFontSmoothing: "auto",
          },
        },
      },
      MuiAccordion: {
        root: {
          backgroundColor: "#F9FAFB",
          filter: "drop-shadow(1px 1px 3px #B9E6D7)",
        },
      },
      MuiCard: {
        root: {
          backgroundColor: "#F9FAFB",
          filter: "drop-shadow(0.5px 0.5px 1.5px #B9E6D7)",
        },
      },
      MuiInputLabel: {
        root: {
          color: "#4B5563",
          "&.Mui-focused": {
            color: "#4B5563",
          },
        },
      },
      MuiCheckbox: {
        root: {
          color: "#D1D5DB",
          borderWidth: "1px",
        },
      },
      MuiButton: {
        containedPrimary: {
          backgroundColor: "#68DFE2",
          border: 0,
          color: "white",
          padding: "10px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: `${darken("#68DFE2", 0.08)} !important`,
          },
        },
        containedSecondary: {
          backgroundColor: "#1F2937",
          border: 0,
          color: "white",
          padding: "10px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: `${lighten("#1F2937", 0.08)} !important`,
          },
        },
        outlinedPrimary: {
          padding: "0.5rem 1rem",
          fontFamily: "Inter, sans-serif",
          fontWeight: 500,
          fontSize: "1rem",
          color: "#fafafa",
          border: "0.2rem solid #fff",
          "&:hover": {
            backgroundColor: "#68DFE2 !important",
            border: "0.2rem solid #fff !important",
          },
        },
      },
      MuiTypography: {
        root: {
          color: "#1F2937",
        },
        h1: {
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          fontSize: "2rem",
        },
        h2: {
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          fontSize: "4rem",
        },
        h3: {
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          fontSize: "1.8rem",
        },
        h4: {
          fontFamily: "'Georama', sans-serif",
          fontWeight: 500,
          fontSize: "2rem",
        },
        h5: {
          fontFamily: "'Georama', sans-serif",
          fontWeight: 400,
          fontSize: "1.5rem",
        },
        h6: {
          fontFamily: "'Georama', sans-serif",
          fontWeight: 400,
          fontSize: "1.2rem",
        },
        subtitle1: {
          fontFamily: "'Georama', sans-serif",
          fontWeight: 300,
          fontSize: "2.5rem",
          // "@media (max-width:1100px)": {
          //   fontSize: "2rem",
          //   lineHeight: "3rem",
          // },
        },
        subtitle2: {
          fontFamily: "'Georama', sans-serif",
          fontWeight: 300,
          fontSize: "1.8rem",
        },
        body1: {
          fontFamily: "'Georama', sans-serif",
          fontWeight: 400,
          fontSize: "1rem",
        },
        body2: {
          fontFamily: "'Georama', sans-serif",
          fontSize: "1rem",
          fontWeight: 300,
          color: "#6B7280",
        },
      },
    },
  });

export default getMuiTheme;
