import React from "react";
import { Accordion, Button, Group, Image, Text } from "@mantine/core";
import "./routes.css";
import { useNavigate } from "react-router-dom";
import databaseLogo from "../../../assets/database.png";

const Routes = () => {
  const navigate = useNavigate();

  const routes = [
    {
      value: "Master Data",
      options: ["Create", "Spec details"],
    },
  ];

  const handleMenuItemClick = (menuItem) => {
    navigate(`/user/${menuItem}`);
  };

  const items = routes.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>
        <Group>
          <Image src={databaseLogo} w={16} />
          <Text>{item.value}</Text>
        </Group>
      </Accordion.Control>
      <Accordion.Panel>
        <ul>
          {item.options.map((route) => (
            <Button
              className={route == "Create" ? "highlight" : ""}
              key={route}
              variant="subtle"
              onClick={() => handleMenuItemClick(route)}
            >
              {route}
            </Button>
          ))}
        </ul>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion variant="filled" defaultValue="Apples" className="routes">
      {items}
    </Accordion>
  );
};

export default Routes;
