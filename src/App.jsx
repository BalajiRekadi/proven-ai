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
import "mantine-react-table/styles.css";

function App() {
  const theme = createTheme({
    primaryColor: "indigo",
    // colors: {
    //   dark: [
    //     // "#C9C9C9",
    //     // "#B8B8B8",
    //     "#424242", // text color
    //     // "#696969",
    //     // "#424242",
    //     // "#696969",
    //     "#2E2E2E", // input border
    //     "#242424",
    //     "#1F1F1F",
    //     "#141414",
    //     "#070707",
    //     "#000000",
    //   ],
    // },
    // headings: {
    //   sizes: {
    //     h3: {
    //       fontWeight: 600,
    //     },
    //   },
    // },
  });

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
