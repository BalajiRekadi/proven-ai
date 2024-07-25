import React from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Image,
  Text,
  Flex,
  Grid,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import headerLogo from "../../assets/headerLogo.jpeg";
import logo from "../../assets/logo.jpg";
import logo2 from "../../assets/loginform.png";
import { useStore } from "../../store/useStore";
import { ModuleSelect } from "../../shared/components";

function Login() {
  const navigate = useNavigate();
  const { module } = useStore();

  const handleLogin = () => {
    navigate(`/user/${module}`);
  };

  return (
    <div className="main">
      <Grid span={1}>
        <div className="headerLogo">
          <Image src={headerLogo} alt="Proven.AI" className="logo" />
        </div>
      </Grid>
      <Flex align="center" style={{ height: "100vh" }}>
        <div className="bg-image">
          <div className="logo-image">
            <Grid span={1}>
              <Image
                src={logo}
                alt="Proven.AI"
                className="logo"
                width={500}
                height={500}
              />
            </Grid>
          </div>
        </div>
        <div className="bg-light">
          <form className="login-form">
            <div className="login-form-logo">
              <Image src={logo2}></Image>
            </div>
            <div className="login">
              <TextInput placeholder="Enter username" className="input" />
              <br />
              <PasswordInput placeholder="Password" className="input" />
              <br />
              <Flex className="loginBtn-select" gap={16}>
                <div style={{ flex: 2 }}>
                  <ModuleSelect />
                </div>

                <div style={{ flex: 2 }}>
                  <Button
                    variant="filled"
                    color="green"
                    className="login-button"
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                  <div className="forgot-links">
                    <Text component="a">Forgot username?</Text>
                    <Text component="a">Forgot password?</Text>
                  </div>
                </div>
              </Flex>
            </div>
          </form>
        </div>
      </Flex>
      <footer>
        <Text align="center">
          Copyright © 2024 Proven Tech. All rights reserved. Privacy Policy
        </Text>
      </footer>
    </div>
  );
}

export default Login;
