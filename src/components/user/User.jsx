import { AppShell, Flex, Group, Select, Button } from "@mantine/core";
import React, { useState } from "react";
import headerLogo from "./../../assets/headerLogo.jpeg";
import { Outlet } from "react-router-dom";
import Routes from "./routes/Routes";
import "./user.css";

const User = () => {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      className="user"
      header={{ height: 60 }}
      navbar={{
        width: opened ? 300 : 0,
        breakpoint: "sm",
      }}
      padding="md"
      h={"100%"}
    >
      <AppShell.Header className="header">
        <Group h="100%" px="md">
          <Button className="menuBtn" onClick={() => setOpened(!opened)}>
            <i className={`fi ${opened ? 'fi-br-menu-burger' : 'fi-br-menu-burger'}`}></i>
          </Button>
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
                />
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
      <AppShell.Navbar p="md" className="navbar" hidden={!opened}>
        <Routes />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default User;
