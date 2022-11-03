import React from "react";

import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import { themeLight, themeDark } from "./styles/theme";
import Container from "@mui/material/Container";

import Header from "./components/header";
import Home from "./components/home";
import "./index.css";

function App() {
  const [light, setLight] = React.useState(true);

  const clickTheme = () => {
    setLight((prev) => !prev);
  };

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: light ? "rgb(186, 186, 202)" : "rgb(52, 57, 63)",
          },
        }}
      />
      <Container maxWidth="xl">
        <Header light={light} clickTheme={clickTheme} />
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
