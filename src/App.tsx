import "@mantine/core/styles/global.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "mantine-react-table/styles.css";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import { createTheme, MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Login } from "./components";
import CaliberCreate from "./components/caliber/master-data/create/Create";
import LabwareCreate from "./components/labware/master-data/create/Create";
import Dashboard from "./components/screens/dashboard/Dashboard";
import User from "./components/user/User";
import { ToastContextProvider } from "./shared/components";
import { THEME } from "./shared/constants/constants";
import AppContextProvider from "./store/AppContextProvider";

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
                  <Route element={<Dashboard />} index={true} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="create" element={<CaliberCreate />} />
                </Route>
                <Route path="labware">
                  <Route element={<Dashboard />} index={true} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="create" element={<LabwareCreate />} />
                </Route>
                <Route path="labVantage">
                  <Route element={<Dashboard />} index={true} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="create" element={<div>TODO</div>} />
                </Route>
              </Route>
            </Routes>
          </ToastContextProvider>
        </QueryClientProvider>
      </MantineProvider>
    </AppContextProvider>
  );
}

export default App;
