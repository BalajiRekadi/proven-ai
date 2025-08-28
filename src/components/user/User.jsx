import {
  AppShell,
  Flex,
  Image,
  Text,
  Popover,
  ActionIcon,
  Button,
} from "@mantine/core";
import { useState } from "react";
import headerLogo from "./../../assets/headerLogo.png";
import { Outlet } from "react-router-dom";
import Routes from "../routes/Routes";
import { ModuleSelect } from "../../shared/components";
import { useStore } from "../../store/useStore";
import {
  IconArrowBarRight,
  IconMenu2,
  IconUserCircle,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import "./user.css";

const User = () => {
  const [closed, setOpened] = useState(false);
  const { user } = useStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <AppShell
      className="user"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: closed },
      }}
      padding="md"
      h={"100%"}
    >
      <AppShell.Header className="header">
        <Flex>
          <Flex px="md" w={300} h={60} gap={16} align={"center"}>
            {closed && (
              <ActionIcon
                onClick={() => setOpened(!closed)}
                variant="transparent"
                color="white"
              >
                <IconArrowBarRight
                  style={{ width: "32px", height: "32px" }}
                  stroke={2}
                />
              </ActionIcon>
            )}
            {!closed && (
              <ActionIcon
                onClick={() => setOpened(!closed)}
                variant="transparent"
                color="white"
              >
                <IconMenu2
                  stroke={2}
                  style={{ width: "32px", height: "32px" }}
                />
              </ActionIcon>
            )}
            <Image src={headerLogo} w={"10rem"} h={"2rem"} alt="Header Logo" />
          </Flex>
          <Flex
            justify="space-between"
            flex={1}
            align={"center"}
            h={60}
            pr={32}
          >
            <ModuleSelect />
            <Flex justify={"space-around"} align={"center"}>
              <Text pr={32} c={"white"}>
                {user.userId || "-"} | Super Admin
              </Text>
              <Popover width={200} position="bottom" withArrow shadow="lg">
                <Popover.Target>
                  <ActionIcon variant="transparent">
                    <IconUserCircle
                      color="white"
                      size={32}
                      pr={32}
                      stroke={1}
                    />
                  </ActionIcon>
                </Popover.Target>
                <Popover.Dropdown>
                  <Button variant="filled" onClick={handleLogout} fullWidth>
                    Logout
                  </Button>
                </Popover.Dropdown>
              </Popover>
            </Flex>
          </Flex>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="md" w={300}>
        <Routes />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet></Outlet>
      </AppShell.Main>
    </AppShell>
  );
};

export default User;
