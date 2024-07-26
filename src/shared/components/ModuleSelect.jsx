import { Select } from "@mantine/core";
import React from "react";
import { useStore } from "../../store/useStore";
import { useNavigate } from "react-router-dom";

const ModuleSelect = ({ fromHeader = false }) => {
  const { module, setModule, setRoute } = useStore();
  const navigate = useNavigate();

  const handleModuleChange = (event) => {
    if (fromHeader) {
      navigate(`/user/${event}`);
    }
    setModule(event);
    setRoute(`/user/${event}/home`);
  };

  return (
    <Select
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
