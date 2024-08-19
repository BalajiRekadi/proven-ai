import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import {
  Box,
  Flex,
  Select,
  Button,
  TextInput,
  SegmentedControl,
} from "@mantine/core";
import { IconCalendar, IconSearch } from "@tabler/icons-react";
import { ExportTable } from "../../../shared/components";
import exportToCsv from "../../../shared/utilities/downloadCSV";
import { deepClone } from "../../../shared/utilities";

const Export = ({ data }) => {
  const [rowSelection, setRowSelection] = useState({});

  const getExportData = () => {
    const clone = deepClone(data);
    const indices = Object.keys(rowSelection);
    const exportData = [];
    indices.forEach((item) => {
      delete clone[item]["content"];
      exportData.push(clone[item]);
    });
    return exportData;
  };

  const handleExportToCSV = () => {
    const data = getExportData();
    if (data && data.length) {
      const { code } = data[0];
      const curr = new Date();
      const date = `${curr.getDate()}${
        curr.getMonth() + 1
      }${curr.getFullYear()}`;
      exportToCsv(data, `${code}_${date}`);
    }
  };
  return (
    <Box p={16}>
      <Flex gap={32} justify={"space-between"} p={32} pb={64}>
        <TextInput
          placeholder="search"
          color="black"
          style={{ width: "25%" }}
          rightSection={<IconSearch />}
        />
        <Flex gap={16}>
          <Select
            placeholder="Category"
            variant="default"
            data={["One", "Two", "Three"]}
          />
          <Select
            placeholder="Filter By"
            variant="default"
            data={["One", "Two", "Three"]}
          />
          <DatePickerInput
            placeholder="Date Range"
            style={{ width: "33%" }}
            rightSection={<IconCalendar />}
          />
        </Flex>
      </Flex>
      <Flex justify={"space-between"}>
        <SegmentedControl
          color="proven"
          value="Worksheets"
          data={["Worksheets", "Tests", "Test Plans"]}
          mb={10}
        />
        <Button variant="light" onClick={handleExportToCSV}>
          Export to Application
        </Button>
      </Flex>
      <ExportTable
        data={data}
        enableRowSelection={true}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </Box>
  );
};

export default Export;
