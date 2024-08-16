import React from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Image,
  Text,
  Flex,
  Box,
  Center,
  Stack,
  Anchor,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import headerLogo from "../../assets/headerLogo.png";
import logo from "../../assets/logo.jpg";
import { useStore } from "../../store/useStore";
import { ModuleSelect } from "../../shared/components";
import { IconUser } from "@tabler/icons-react";

function Login() {
  const navigate = useNavigate();
  const { module } = useStore();

  const handleLogin = () => {
    navigate(`/user/${module}`);
  };

  const gradient =
    "linear-gradient(0deg, rgba(12,12,69,1) 0%, rgba(15,15,93,1) 23%, rgba(90,90,215,1) 100%)";

  return (
    <Flex>
      <Flex w={"60%"} h={"100vh"} direction={"column"}>
        <Image src={headerLogo} alt="Header Logo" w={"7rem"} />
        <Center flex={1}>
          <Image src={logo} alt="Company Logo" w={"50%"} />
        </Center>
        <Text ta={"center"} p={16}>
          Copyright © 2024 Proven Tech. All rights reserved. Privacy Policy
        </Text>
      </Flex>
      <Image
        src={logo}
        alt="Company Logo"
        w={"30%"}
        style={{
          position: "fixed",
          top: "12%",
          right: "5%",
          opacity: "30%",
          mixBlendMode: "multiply",
        }}
      />
      <Stack
        w={"40%"}
        h={"100vh"}
        bg={gradient}
        justify={"center"}
        align={"stretch"}
        gap={24}
        p={48}
      >
        <TextInput
          placeholder="Enter Username"
          size="lg"
          rightSection={<IconUser />}
        />
        <PasswordInput placeholder="Enter Password" size="lg" />
        <Flex justify={"space-between"} gap={24}>
          <Box w={"70%"}>
            <ModuleSelect size={"lg"} />
          </Box>
          <Button
            variant="filled"
            color="green"
            onClick={handleLogin}
            size="lg"
            w={"30%"}
          >
            Login
          </Button>
        </Flex>
        <Flex justify={"space-around"} style={{ zIndex: 1 }}>
          <Anchor c={"white"}>Forgot Username?</Anchor>
          <Anchor c={"white"}>Forgot Password?</Anchor>
        </Flex>
      </Stack>
    </Flex>
  );
}

export default Login;
