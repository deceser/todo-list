import { createTheme } from "@mui/material/styles";

export const themeLight = createTheme({
  palette: {
    primary: {
      main: "#babaca",
    },
    secondary: {
      main: "#424242",
    },
    error: {
      main: "#0f61a0",
      light: "#0f61a0",
      dark: "#0f61a0",
      contrastText: "#0f61a0",
    },
    background: {
      paper: "rgb(186,186,202);",
    },
  },

  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fontSize: 15,
  },

  components: {
    MuiIconButton: {
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            color: "rgba(0, 0, 0, 0.54)",
            boxShadow: "3px 3px 6px rgb(0 0 0 / 25%)",
            backgroundColor: "#d1d1e2",
            marginTop: 3,
            ":active": {
              boxShadow: " inset 3px 3px 6px rgb(0 0 0 / 25%)",
            },
          },
        },
      ],
    },
  },
});

export const themeDark = createTheme({
  palette: {
    primary: {
      main: "rgb(52, 57, 63)",
    },
    secondary: {
      main: "#fff",
    },
    error: {
      main: "#fff",
      light: "#fff",
      dark: "#fff",
      contrastText: "#fff",
    },
    background: {
      paper: "rgb(52, 57, 63)",
    },
    text: {
      primary: "#CFCFCF",
      secondary: "#CFCFCF",
    },
    action: {
      active: "#CFCFCF",
      hover: "#CFCFCF",
    },
  },

  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fontSize: 15,
  },

  components: {
    MuiIconButton: {
      variants: [
        {
          props: { variant: "dashed" },
          style: {
            backgroundColor: "#3e4349",
            color: "#fff",
            boxShadow: "3px 3px 6px rgb(0 0 0 / 25%)",
            marginTop: 3,
            ":active": {
              boxShadow: " inset 3px 3px 6px rgb(0 0 0 / 25%)",
            },
          },
        },
      ],
    },
  },
});
