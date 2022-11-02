import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
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
      paper: "#cfcfe0",
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
            backgroundColor: "#d9d9e6",
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

// export const theme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#e3e3e3",
//     },
//     secondary: {
//       main: "#e3e3e3",
//     },
//     error: {
//       main: "#e3e3e3",
//       light: "#e3e3e3",
//       dark: "#e3e3e3",
//       contrastText: "#e3e3e3",
//     },
//     background: {
//       paper: "#34393f",
//     },
//   },

//   typography: {
//     fontFamily: "Quicksand",
//     fontWeightLight: 400,
//     fontWeightRegular: 500,
//     fontWeightMedium: 600,
//     fontWeightBold: 700,
//     fontSize: 15,
//   },

//   components: {
//     MuiIconButton: {
//       variants: [
//         {
//           props: { variant: "dashed" },
//           style: {
//             backgroundColor: "#3e4349",
//             marginTop: 3,
//             ":active": {
//               boxShadow: " inset -3px -3px 6px rgb(255 255 255 / 6%)",
//             },
//           },
//         },
//       ],
//     },
//   },
// });
