import { useEffect } from "react";
import { Accordion, Button, Group, Stack, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { ROUTES, MODULES } from "../../shared/constants/constants";
import { useStore } from "../../store/useStore";
import { IconHomeFilled } from "@tabler/icons-react";
import { useLocation } from "react-router-dom";
import "./routes.css";
import { useToast } from "../../shared/components/toast/useToast";

const Routes = () => {
  const navigate = useNavigate();
  const {
    module,
    selectedRoute,
    setRoute,
    setTaskId,
    setClient,
    setModule,
    client,
    user: { userId },
    setUser,
  } = useStore();
  const location = useLocation();
  const { info } = useToast();

  useEffect(() => {
    // TODO: Remove localstorage implementation after sessionId
    const userId = localStorage.getItem("userId");
    const password = localStorage.getItem("password");
    const module = localStorage.getItem("module");
    const client = localStorage.getItem("client");

    if (location?.pathname && setModule && setClient) {
      setModule(location?.pathname.split("/")?.[2] || MODULES.CALIBER.value);
      setUser({ userId, password });
      setModule(module);
      setClient(client);
    }
  }, []);

  useEffect(() => {
    if (module) {
      navigate(`/user/${module}/dashboard`);
    }
  }, [module]);

  const handleMenuItemClick = (route) => {
    if (!module || !client) {
      info("Please select a Module and Client");
      return;
    }
    if (!userId) {
      info("Please log into your account.");
      return;
    }
    setRoute(`/user/${module}/${route}`);
    navigate(`/user/${module}/${route}`);
    setTaskId("");
  };

  const items = ROUTES.map((parent) => (
    <Accordion.Item key={parent.label} value={parent.label}>
      <Accordion.Control>
        <Group>
          <parent.logo />
          <Text>{parent.label}</Text>
        </Group>
      </Accordion.Control>
      <Accordion.Panel>
        <Stack p={8} gap={4}>
          {parent.children.map((child) => (
            <Button
              className={
                `/user/${module}/${child.name}` == selectedRoute
                  ? "highlight"
                  : ""
              }
              fullWidth
              justify="start"
              key={child.name}
              variant="subtle"
              onClick={() => handleMenuItemClick(child.name)}
            >
              {child.label}
            </Button>
          ))}
        </Stack>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <Button
        mb={16}
        size="md"
        variant={"light"}
        bg={
          `/user/${module}/dashboard` == selectedRoute
            ? ""
            : "rgba(0, 0, 0, 0.3)"
        }
        color={
          `/user/${module}/dashboard` == selectedRoute
            ? "var(--secondary)"
            : "white"
        }
        leftSection={<IconHomeFilled size={20} />}
        onClick={() => handleMenuItemClick("dashboard")}
      >
        Dashboard
      </Button>
      <Accordion
        variant="separated"
        defaultValue="Master Data"
        className="routes"
      >
        {items}
      </Accordion>
    </>
  );
};

export default Routes;
