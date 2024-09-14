import {
  Modal,
  Flex,
  Title,
  MultiSelect,
  Stack,
  TextInput,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconUser, IconAt } from "@tabler/icons-react";
import { CLIENTS } from "../../shared/constants";
import { useRegister } from "../../api/hooks";
import { PasswordInputWithMeter } from "../../shared/components";
import { useState, useRef } from "react";

const Register = ({ open, setOpen }) => {
  const { userRegister } = useRegister();
  const [password, setPassword] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const pswdStrengthRef = useRef(0);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      userName: "",
      userId: "",
      email: "",
      password: "",
      module: [],
      client: [],
    },

    validate: {
      userId: (value) => (value ? null : "Invalid user ID"),
      module: (value) => (value.length > 0 ? null : "Please select modules"),
      client: (value) => (value.length > 0 ? null : "Please select clients"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const handleRegistration = () => {
    const obj = form.validate();
    if (pswdStrengthRef.current < 100) {
      setPasswordErrorMsg("Invalid password");
    } else if (pswdStrengthRef.current === 100) {
      setPasswordErrorMsg("");
      if (!obj.hasErrors) {
        const values = { ...form.getValues(), password };
        userRegister(values).then(() => {
          setOpen(false);
        });
      }
    }
  };

  const handleCancel = () => {
    setOpen(false);
    form.reset();
  };

  const handleSetPassword = (value, strength) => {
    setPassword(value);
    pswdStrengthRef.current = strength;
    if (strength < 100) {
      setPasswordErrorMsg("Invalid password");
    } else if (strength === 100) {
      setPasswordErrorMsg("");
    }
  };

  return (
    <Modal
      opened={open}
      onClose={handleCancel}
      closeOnClickOutside={false}
      size={"xl"}
      title={
        <Flex justify={"space-between"}>
          <Title order={4}>Register</Title>
        </Flex>
      }
    >
      <form
        onSubmit={form.onSubmit((values) => {
          handleRegistration(values);
        })}
      >
        <Stack justify={"center"} align={"stretch"} gap={24} p={16}>
          <TextInput
            placeholder="User ID"
            label="User ID"
            withAsterisk={true}
            size="lg"
            rightSection={<IconUser />}
            key={form.key("userId")}
            {...form.getInputProps("userId")}
          />
          <TextInput
            withAsterisk
            label="Email"
            size="lg"
            placeholder="your@email.com"
            rightSection={<IconAt />}
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <PasswordInputWithMeter
            value={password}
            setValue={handleSetPassword}
            error={passwordErrorMsg}
          ></PasswordInputWithMeter>
          <MultiSelect
            label="Modules"
            withAsterisk
            placeholder="Select Modules"
            data={[
              { value: "caliber", label: "Caliber" },
              { value: "labware", label: "Labware" },
              { value: "labvantage", label: "LabVantage" },
            ]}
            size="lg"
            key={form.key("module")}
            {...form.getInputProps("module")}
            searchable
            clearable
          />
          <MultiSelect
            withAsterisk
            label="Clients"
            placeholder="Select Clients"
            data={Object.values(CLIENTS)}
            size="lg"
            key={form.key("client")}
            {...form.getInputProps("client")}
            searchable
            clearable
          />
          <Flex justify={"flex-end"} gap={16}>
            <Button variant="outline" size="lg" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              variant="filled"
              size="lg"
              w={"30%"}
              onClick={handleRegistration}
            >
              Register
            </Button>
          </Flex>
        </Stack>
      </form>
    </Modal>
  );
};

export default Register;
