import React from "react";
import {
  Container,
  TextInput,
  PasswordInput,
  Select,
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
import logo2 from '../../assets/loginform.png'
function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/user");
  };

  return (
    <div className="main">
     
        <Grid span={1}>
          <div className="headerLogo">
            <Image src={headerLogo} alt="Proven.AI" className="logo" />
          </div>
        </Grid>
        <Flex align="center" style={{ height: "100vh"}} >
          <div className="bg-image">
            <div className="logo-image">
              <Grid span={1}>
              <Image src={logo}  alt="Proven.AI" className="logo" width={500} height={500} />
              </Grid>
            </div>
          </div>
          <div className="bg-light" >
            <form className="login-form">
              <div className="login-form-logo">
                <Image src={logo2} ></Image>
              </div>
              <div className="login">
                <TextInput
                  classNames="textInput"
                  placeholder="Enter username"
                  className="input"
                />
                <br />
                <PasswordInput placeholder="Password" className="input" />
                <br />
                <Flex className="loginBtn-select" gap={16}>
                  <div style={{ flex: 2 }}>
                    <Select
                      placeholder="Modules"
                      data={[
                        { value: "caliber", label: "Caliber" },
                        { value: "labware", label: "Labware" },
                        { value: "labVantage", label: "LabVantage" },
                      ]}
                    />
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
                      <Text component="a"  >
                        Forgot username?
                      </Text>
                      <Text component="a">
                        Forgot password?
                      </Text>
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
