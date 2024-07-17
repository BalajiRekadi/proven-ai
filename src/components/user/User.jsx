import { AppShell, Group } from "@mantine/core";
import React from "react";
import headerLogo from "./../../assets/headerLogo.jpeg";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <>
      <AppShell
        className="home"
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
        }}
        padding="md"
      >
        <AppShell.Header className="header">
          <Group h="100%" px="md">
            <img src={headerLogo} className="logo" />
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md" className="navbar">
          <nav>
            <ul>
              <li>
                <Link to="create">Create</Link>
              </li>
            </ul>
          </nav>
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet></Outlet>
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default User;
