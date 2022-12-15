import React from "react";

import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import { themeLight, themeDark } from "./styles/theme";
import Container from "@mui/material/Container";

import Header from "./components/header";
import Home from "./components/home";

function App() {
  const [light, setLight] = React.useState(true);

  const clickTheme = () => {
    localStorage.setItem("themeDark", light ? "themeLight" : "themeDark");
    setLight(!light);
  };

  //-----------------------------------------------------------------------------------

  React.useEffect(() => {
    const themeType = localStorage.getItem("themeDark");
    if (themeType != "themeDark") {
      setLight(false);
    }
  }, []);

  //-----------------------------------------------------------------------------------

  
  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: light ? "rgb(186, 186, 202)" : "rgb(52, 57, 63)",
          },
        }}
      />
      <Header light={light} clickTheme={clickTheme} />
      <Container>
          <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
