
import React from 'react';
import { Container, TextInput, PasswordInput, Select, Button, Image, Text, Flex, Grid } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import headerLogo from '../../assets/headerLogo.jpeg';
import logo from '../../assets/logo.jpeg';


function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/user'); 
  };

  return (
    <div className='main'>
    <Container
    fluid
  
    className="login-container"
  >
    
      <Grid span={1} >
        <div className='headerLogo'>
      <Image src={headerLogo} alt="Proven.AI" className="logo" />
      </div>
      </Grid>
      <Flex  align="center">
        <div className="bg-image" style={{ flex: 10 }} >
          <div className="logo-image">
        <Grid span={1}>
      <Image src={logo} alt="Proven.AI" className="logo"/>
      </Grid>
      </div>
        </div>
        <div className="bg-light" style={{ flex: 7 }} >
          <form className="login-form">
            <div className="login">
              <TextInput classNames="textInput"
                placeholder="Enter username"
                className="input"
              />
              <br />
              <PasswordInput
                placeholder="Password"
                className="input"
              />
              <br />
              <Flex className="loginBtn-select">
                <div style={{ flex: 2 }}>
                  <Select
                    placeholder="Modules"
                    data={[]} // Add your data options here
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
                </div>
              </Flex>
              <div className="forgot-links">
                <Text component="a" href="/forgot-username">Forgot username?</Text>
                <Text component="a" href="/forgot-password">Forgot password?</Text>
              </div>
            </div>
          </form>
        </div>
      </Flex>
      <footer>
        <Text align="center">Copyright © 2024 Proven Tech. All rights reserved. Privacy Policy</Text>
      </footer>
 
    </Container>
    </div>
  );
}

export default Login;

