import React from "react";
import "./App.css";
import "@mantine/core/styles.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components";
import Home from "./components/home/home";
import Create from "./components/master-data/create/Create";
import { MantineProvider, createTheme } from "@mantine/core";

function App() {
  const theme = createTheme({});

  return (
    <MantineProvider theme={theme} forceColorScheme={"dark"}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </MantineProvider>
  );
}

export default App;
