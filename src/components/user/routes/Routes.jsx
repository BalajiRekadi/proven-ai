import React, { useState } from "react";
import { Accordion, Button, Group, Image, Text } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import "./routes.css";
import { ROUTES } from "../../../shared/constants";

const Routes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedRoute, setSelectedRoute] = useState(location.pathname);

  const handleMenuItemClick = (route) => {
    setSelectedRoute(`/user/${route}`);
    navigate(`/user/${route}`);
  };

  const items = ROUTES.map((parent) => (
    <Accordion.Item key={parent.label} value={parent.label}>
      <Accordion.Control>
        <Group>
          <Image src={parent.logo} w={16} />
          <Text>{parent.label}</Text>
        </Group>
      </Accordion.Control>
      <Accordion.Panel>
        <ul>
          {parent.children.map((child) => (
            <Button
              className={
                `/user/${child.name}` == selectedRoute ? "highlight" : ""
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
