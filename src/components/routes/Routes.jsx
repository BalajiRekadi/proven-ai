import React, { useEffect } from "react";
import { Accordion, Button, Group, Stack, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../shared/constants";
import { useStore } from "../../store/useStore";
import { IconHomeFilled } from "@tabler/icons-react";
import "./routes.css";

const Routes = () => {
  const navigate = useNavigate();
  const { module, selectedRoute, setRoute, setTaskId } = useStore();

  useEffect(() => {
    if (module) {
      navigate(`/user/${module}/dashboard`);
    }
  }, [module]);

  const handleMenuItemClick = (route) => {
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
        variant="outline"
        c={"white"}
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
