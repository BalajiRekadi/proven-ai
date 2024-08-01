
import { AppShell, Flex, Burger } from "@mantine/core"; 
import { AppShell, Flex, Burger, Image, Text } from "@mantine/core"; // Make sure to import Flex
import { useDisclosure } from "@mantine/hooks";
import React, { useMemo } from "react";
import headerLogo from "./../../assets/headerLogo.jpeg";
import React from "react";
import headerLogo from "./../../assets/headerLogo.png";
import { Outlet } from "react-router-dom";
import Routes from "../routes/Routes";
import "./user.css";
import { ModuleSelect } from "../../shared/components";

const User = () => {
  const [opened, { toggle }] = useDisclosure(true);
  const memoizedRoutes = useMemo(() => <Routes />, []);

  return (
    <AppShell
      className="user"
      header={{ height: 60 }}
      navbar={{
        width: opened ? 300 : 0,
        hidden: !opened,
        style: { 
          display: opened ? 'block' : 'none', 
          transition: 'width 0.3s ease' 
        }
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: !opened },
      }}
      padding="md"
      h={"100%"}
    >
      <AppShell.Header className="header">
        <Flex alignSelf="center" px="md" style={{ margin: "1%" }}>
          <div>
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" color="white" />
          </div>
          <img src={headerLogo} className="logo" alt="Header Logo" />
          <Flex justify="space-between" style={{ flexGrow: 1, marginLeft: '16px' }}>
            <ModuleSelect />
            <span style={{ color: "white" }}>90001 | Super Admin</span>
        <Flex>
          <Flex px="md" w={300} h={60} gap={16} align={"center"}>
            <Burger
              opened={opened}
              onClick={toggle}
              aria-label="Toggle navigation"
              color="white"
            />
            <Image src={headerLogo} w={"10rem"} h={"2rem"} alt="Header Logo" />
          </Flex>
          <Flex justify="space-between" flex={1} align={"center"} h={60}>
            <ModuleSelect />
            <Text pr={32} c={"white"}>
              90001 | Super Admin
            </Text>
          </Flex>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar 
        p="md" 
        className="navbar" 
        style={{ 
          display: opened ? 'block' : 'none', 
          width: opened ? 300 : 0, 
          overflow: 'hidden', 
          transition: 'width 0.3s ease, display 0s 0.3s' 
        }}
      >
        {memoizedRoutes}
      </AppShell.Navbar>
      {opened && (
        <AppShell.Navbar p="md" className="navbar" w={300}>
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
