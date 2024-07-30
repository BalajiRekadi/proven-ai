
import { AppShell, Flex, Burger } from "@mantine/core"; // Make sure to import Flex
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
        <Flex alignSelf="center" px="md" style={{margin:"1%"}}>
          <div>
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" color="white" />
          </div>
          <img src={headerLogo} className="logo" alt="Header Logo" />
          <Flex justify="space-between"  style={{ flexGrow: 1, marginLeft: '16px' }}>
            <ModuleSelect  />
            <span style={{ color: "white" }}>90001 | Super Admin</span>
          </Flex>
        </Flex>
      </AppShell.Header>
      {opened && (
        <AppShell.Navbar p="md" className="navbar" style={{ width: 300, overflow: 'hidden', transition: 'width 0.3s ease' }}>
          <Routes />
        </AppShell.Navbar>
      )}
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default User;
