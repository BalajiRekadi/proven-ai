import React, { useEffect, useState } from "react";
import { Accordion, Button, Group, Stack, Text } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import "./routes.css";
import { ROUTES } from "../../shared/constants";
import { useStore } from "../../store/useStore";

const Routes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { module, client, selectedRoute, setRoute } = useStore();

  useEffect(() => {
    if (location?.pathname) {
      setRoute(location.pathname);
    }
  }, [location?.pathname]);

  useEffect(() => {
    navigate(`/user/${module}/home`);
  }, [module, client]);

  const handleMenuItemClick = (route) => {
    setRoute(`/user/${module}/${route}`);
    navigate(`/user/${module}/${route}`);
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
        <Stack p={8}>
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
    <Accordion
      variant="separated"
      defaultValue="Master Data"
      className="routes"
    >
      {items}
    </Accordion>
  );
};

export default Routes;
