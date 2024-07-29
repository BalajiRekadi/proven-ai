
import { AppShell, Flex, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import headerLogo from "./../../assets/headerLogo.jpeg";
import { Outlet } from "react-router-dom";
import Routes from "../routes/Routes";
import "./user.css";
import { ModuleSelect } from "../../shared/components";

const User = () => {
  const [opened, { toggle }] = useDisclosure(true);

  return (
    <AppShell
      className="user"
      header={{ height: 60 }}
      navbar={{
        width: opened ? 300 : 0, 
        hidden: !opened, 
      }}
      padding="md"
      h={"100%"}
    >
      <AppShell.Header className="header">
        <Group h="100%" px="md">
          <div>
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" color="white" />
          </div>
          <img src={headerLogo} className="logo" alt="Header Logo" />
          <Flex justify={"space-between"} w={"80%"}>
            <div className="header-caliber">
              <div className="header-select-div">
                <ModuleSelect />
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
      <AppShell.Navbar p="md" className="navbar" style={{ width: opened ? 300 : 0, overflow: 'hidden', transition: 'width 0.3s ease' }}>
        {opened && <Routes />}
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default User;
