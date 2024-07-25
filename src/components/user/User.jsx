import { AppShell, Flex, Group } from "@mantine/core";
import React from "react";
import headerLogo from "./../../assets/headerLogo.jpeg";
import { Outlet } from "react-router-dom";
import Routes from "../routes/Routes";
import "./user.css";
import { ModuleSelect } from "../../shared/components";

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
      h={"100%"}
    >
      <AppShell.Header className="header">
        <Group h="100%" px="md">
          <div>
            <i class="fi fi-br-menu-burger"></i>
          </div>
          <img src={headerLogo} className="logo" />
          <Flex justify={"space-between"} w={"80%"}>
            <div className="header-caliber">
              <div className="header-select-div">
                <ModuleSelect fromHeader={true} />
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
