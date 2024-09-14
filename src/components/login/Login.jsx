import {
  TextInput,
  PasswordInput,
  Button,
  Image,
  Text,
  Flex,
  Center,
  Stack,
  Anchor,
  Select,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import headerLogo from "../../assets/headerLogo.png";
import logo from "../../assets/logo.jpg";
// import head from "../../assets/aiHead.png";
import { useStore } from "../../store/useStore";
import { IconUser } from "@tabler/icons-react";
import "./login.css";
import { CLIENTS } from "../../shared/constants";
import { useLogin } from "../../api/hooks";
import Register from "./Register";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const { userLogin } = useLogin();
  const [openRgisterModal, setOpenRegisterModal] = useState(false);

  const { module, client, setClient, setModule } = useStore();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      userId: "",
      password: "",
      module,
      client,
    },

    validate: {
      userId: (value) => (value ? null : "Please enter user ID"),
      password: (value) => (value ? null : "Please enter password"),
      module: (value) => (value ? null : "Please select a module"),
      client: (value) => (value ? null : "Please select a client"),
    },
  });

  const handleLogin = (values) => {
    // userLogin(values).then(() => {
    setClient(values.client);
    setModule(values.module);
    navigate(`/user/${values.module}/dashboard`);
    // });
  };

  const gradient =
    "linear-gradient(0deg, rgba(12,12,69,1) 0%, rgba(15,15,93,1) 23%, rgba(90,90,215,1) 100%)";

  return (
    <>
      <form
        onSubmit={form.onSubmit((values) => {
          handleLogin(values);
        })}
      >
        <Flex className="login-page">
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
            p={"10vh 5%"}
          >
            {/* <Flex justify={"center"} w={"100%"}>
            <Image src={head} alt="AI" w={"13rem"} />
          </Flex> */}
            <TextInput
              placeholder="User ID"
              label="User ID"
              withAsterisk={true}
              size="lg"
              rightSection={<IconUser />}
              key={form.key("userId")}
              {...form.getInputProps("userId")}
            />
            <PasswordInput
              placeholder="Password"
              label="Password"
              size="lg"
              withAsterisk={true}
              key={form.key("password")}
              {...form.getInputProps("password")}
            />
            <Group gap={32} grow>
              <Select
                size={"lg"}
                placeholder="Select Module"
                withAsterisk={true}
                label="Module"
                data={[
                  { value: "caliber", label: "Caliber" },
                  { value: "labware", label: "Labware" },
                  { value: "labvantage", label: "LabVantage" },
                ]}
                key={form.key("module")}
                {...form.getInputProps("module")}
                grow
              />
              <Select
                size={"lg"}
                placeholder="Select Client"
                withAsterisk={true}
                label="Client"
                data={[
                  { value: CLIENTS.DRL.value, label: CLIENTS.DRL.label },
                  {
                    value: CLIENTS.SUN_PHARMA.value,
                    label: CLIENTS.SUN_PHARMA.label,
                  },
                  {
                    value: CLIENTS.NEULAND.value,
                    label: CLIENTS.NEULAND.label,
                  },
                ]}
                key={form.key("client")}
                {...form.getInputProps("client")}
              />
            </Group>
            <Flex justify={"flex-end"} style={{ zIndex: 1 }}>
              <Anchor c={"white"}>Forgot Password?</Anchor>
            </Flex>
            <Flex justify={"space-between"} gap={32}>
              <Button
                variant="outline"
                color="white"
                size="lg"
                onClick={() => setOpenRegisterModal(true)}
                fullWidth
              >
                Register
              </Button>
              <Button
                variant="filled"
                color="green"
                size="lg"
                type="submit"
                fullWidth
              >
                Login
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </form>
      <Register
        open={openRgisterModal}
        setOpen={setOpenRegisterModal}
      ></Register>
    </>
  );
}

export default Login;
