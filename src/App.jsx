import React from "react";
import "@mantine/core/styles/global.css";
import "./App.css";
import "@mantine/core/styles.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components";
import Home from "./components/home/home";
import Create from "./components/master-data/create/Create";
import { MantineProvider, createTheme } from "@mantine/core";
import User from "./components/user/User";
import "@mantine/dates/styles.css";

function App() {
  const theme = createTheme({});

  return (
    <MantineProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<User />}>
          <Route element={<Home />} index={true} />
          <Route path="home" element={<Home />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
}

export default App;
