import React from "react";
import { Accordion, Button } from "@mantine/core";
import "./routes.css";

const Routes = () => {
  const routes = [
    {
      icon: "☰",
      value: "Master Data",
      options: ["Spec details"],
    },
  ];
  const items = routes.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.icon}>{item.value}</Accordion.Control>
      <Accordion.Panel>
        <ul>
          <Button key={"Create"} variant="filled">
            {"Create"}
          </Button>
          {item.options.map((route) => (
            <Button key={route} variant="subtle">
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

{
  /* <nav>
            <ul>
              <li>
                <Link to="create">Create</Link>
              </li>
            </ul>
          </nav> */
}
