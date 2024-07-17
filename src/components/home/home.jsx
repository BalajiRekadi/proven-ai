import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "./../../assets/headerLogo.jpeg";
import "./home.css";

const Home = () => {
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
                <Link to="/create">Create</Link>
              </li>
            </ul>
          </nav>
        </AppShell.Navbar>
        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    </>
  );
};

export default Home;
