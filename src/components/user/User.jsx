import { AppShell, Group, Select } from "@mantine/core";
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
          <img src={headerLogo} className="logo" />
          <div className="header-caliber">
            <div className="header-select-div">
          <Select  
      placeholder="caliber"
      data={[
        { value: 'settings', label: 'Settings' },
      
       
      ]}>
            
          </Select>
          </div>
          <div>
      <span style={{color:"white"}}>90001 | Super Admin</span>
      </div>
      </div>
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
