import { Container } from "@mui/material";
import React from "react";

import Header from "./components/header";
import Home from "./components/home";
import "./index.css";
function App() {
  return (
    <Container maxWidth="xl">
      <Header />
      <Home />
    </Container>
  );
}

export default App;
