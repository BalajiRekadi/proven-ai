import React from "react";
import { Accordion, Button } from "@mantine/core";
import "./routes.css";
import { useNavigate } from "react-router-dom";

const Routes = () => {
  const navigate = useNavigate();

  const routes = [
    {
      icon: "☰",
      value: "Master Data",
      options: ["Spec details"],
    },
  ];

  const handleMenuItemClick = (menuItem) => {
    navigate(`/user/${menuItem}`);
  };

  const items = routes.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.icon}>{item.value}</Accordion.Control>
      <Accordion.Panel>
        <ul>
          <Button
            key={"Create"}
            variant="filled"
            onClick={() => handleMenuItemClick("create")}
          >
            {"Create"}
          </Button>
          {item.options.map((route) => (
            <Button
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
