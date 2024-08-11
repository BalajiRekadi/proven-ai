import { AppShell, Burger, Flex, Image, Text } from "@mantine/core";
import React, { useState } from "react";
import headerLogo from "./../../assets/headerLogo.png";
import { Outlet } from "react-router-dom";
import Routes from "../routes/Routes";
import "./user.css";
import { ModuleSelect } from "../../shared/components";

const User = () => {
  const [closed, setOpened] = useState(false);
  return (
    <AppShell
      className="user"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: closed },
      }}
      padding="md"
      h={"100%"}
    >
      <AppShell.Header className="header">
        <Flex>
          <Flex px="md" w={300} h={60} gap={16} align={"center"}>
            <Burger
              opened={closed}
              onClick={() => setOpened(!closed)}
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
      <AppShell.Navbar p="md" w={300}>
        <Routes />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet></Outlet>
      </AppShell.Main>
    </AppShell>
  );
};

export default User;
