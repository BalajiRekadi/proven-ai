import { Select } from "@mantine/core";
import React, { useEffect } from "react";
import { useStore } from "../../store/useStore";
import { useLocation } from "react-router-dom";

const ModuleSelect = ({ size = "sm" }) => {
  const { module, setModule, setRoute } = useStore();
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

  return (
    <Select
      size={size}
      placeholder="Modules"
      data={[
        { value: "caliber", label: "Caliber" },
        { value: "labware", label: "Labware" },
        { value: "labvantage", label: "LabVantage" },
      ]}
      value={module}
      onChange={(event) => handleModuleChange(event)}
    />
  );
};

export default ModuleSelect;
