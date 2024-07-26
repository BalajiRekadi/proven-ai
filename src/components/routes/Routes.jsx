import React, { useEffect, useState } from "react";
import { Accordion, Button, Group, Text } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import "./routes.css";
import { ROUTES } from "../../shared/constants";
import { useStore } from "../../store/useStore";

const Routes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { module, selectedRoute, setRoute } = useStore();

  useEffect(() => {
    if (location?.pathname) {
      setRoute(location.pathname);
    }
  }, [location?.pathname]);

  useEffect(() => {
    navigate(`/user/${module}/home`);
  }, [module]);

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
        <ul>
          {parent.children.map((child) => (
            <Button
              className={
                `/user/${module}/${child.name}` == selectedRoute
                  ? "highlight"
                  : ""
              }
              key={child.name}
              variant="subtle"
              onClick={() => handleMenuItemClick(child.name)}
            >
              {child.label}
            </Button>
          ))}
        </ul>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion variant="filled" defaultValue="Master Data" className="routes">
      {items}
    </Accordion>
  );
};

export default Routes;
