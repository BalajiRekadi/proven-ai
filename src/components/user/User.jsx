import { AppShell, Flex, Group, Select } from "@mantine/core";
import React from "react";
import headerLogo from "./../../assets/headerLogo.jpeg";
import { Outlet } from "react-router-dom";
import Routes from "./routes/Routes";
import "./user.css";

const User = () => {
  return (
    <AppShell
      className="user"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <AppShell.Header className="header">
        <Group h="100%" px="md">
        <div><i class="fi fi-br-menu-burger"></i></div>
          <img src={headerLogo} className="logo" />
          <Flex justify={"space-between"} w={"80%"}>
            <div className="header-caliber">
              <div className="header-select-div">
                <Select
                  placeholder="select"
                  value="caliber"
                  data={[
                        { value: "caliber", label: "Caliber" },
                        { value: "labware", label: "Labware" },
                        { value: "labVantage", label: "LabVantage" },
                      ]}
                ></Select>
              </div>
            </div>
            <div>
              <Flex align={"center"} h={"100%"}>
                <span style={{ color: "white" }}>90001 | Super Admin</span>
              </Flex>
            </div>
          </Flex>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" className="navbar">
        <Routes />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet></Outlet>
      </AppShell.Main>
    </AppShell>
  );
};

export default User;
