import { Flex, Select } from "@mantine/core";
import React, { useEffect } from "react";
import { useStore } from "../../store/useStore";
import { useLocation } from "react-router-dom";
import { CLIENTS } from "../constants";

const ModuleSelect = ({ size = "sm" }) => {
  const { module, client, setClient, setModule, setRoute } = useStore();
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname) {
      setRoute(location.pathname);
    }
  }, [location?.pathname]);

  const handleModuleChange = (event) => {
    if (event) {
      setModule(event);
      setRoute(`/user/${event}/home`);
    }
  };

  const handleClientChange = (event) => {
    if (event) {
      setClient(event);
      setRoute(`/user/${module}/home`);
    }
  };

  return (
    <Flex gap={16} miw={"20rem"}>
      <Select
        size={size}
        placeholder="Select Module"
        data={[
          { value: "caliber", label: "Caliber" },
          { value: "labware", label: "Labware" },
          { value: "labvantage", label: "LabVantage" },
        ]}
        value={module}
        onChange={(event) => handleModuleChange(event)}
      />
      <Select
        size={size}
        placeholder="Select Client"
        data={[
          { value: CLIENTS.DRL.value, label: CLIENTS.DRL.label },
          { value: CLIENTS.SUN_PHARMA.value, label: CLIENTS.SUN_PHARMA.label },
          { value: CLIENTS.NEULAND.value, label: CLIENTS.NEULAND.label },
        ]}
        value={client}
        onChange={(event) => handleClientChange(event)}
      />
    </Flex>
  );
};

export default ModuleSelect;
