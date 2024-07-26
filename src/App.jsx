import React from "react";
import "@mantine/core/styles/global.css";
import "./App.css";
import "@mantine/core/styles.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components";
import { MantineProvider, createTheme } from "@mantine/core";
import "@mantine/dates/styles.css";
import "mantine-react-table/styles.css";
import { THEME } from "./shared/constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContextProvider } from "./shared/components";
import AppContextProvider from "./store/AppContextProvider";
import User from "./components/user/User";
import CaliberCreate from "./components/caliber/master-data/create/Create";
import LabwareCreate from "./components/labware/master-data/create/Create";
import Home from "./components/screens/Home";

function App() {
  const theme = createTheme(THEME);
  const queryClient = new QueryClient();

  // TODO: add fallback routing
  return (
    <AppContextProvider>
      <MantineProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ToastContextProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/user" element={<User />}>
                <Route path="caliber">
                  <Route element={<Home />} index={true} />
                  <Route path="home" element={<Home />} />
                  <Route path="create" element={<CaliberCreate />} />
                </Route>
                <Route path="labware">
                  <Route element={<Home />} index={true} />
                  <Route path="home" element={<Home />} />
                  <Route path="create" element={<LabwareCreate />} />
                </Route>
                <Route path="labVantage" />
              </Route>
            </Routes>
          </ToastContextProvider>
        </QueryClientProvider>
      </MantineProvider>
    </AppContextProvider>
  );
}

export default App;
