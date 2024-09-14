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

  // TODO: Optimise this function
  const getExportData = () => {
    const clone = deepClone(data);
    const indices = Object.keys(rowSelection);
    const exportData = [];
    indices.forEach((index) => {
      const content = clone[index]["content"] || "";
      const part1 = content.split("W.S. Fields:");
      const part2 = part1[1].split("W.S. Content:")[0];
      const fields = part2.split("\n").filter((i) => i.trim());
      const result = fields.reduce((acc, i) => {
        acc = acc.trim() ? acc + " | " + i : i;
        return acc;
      }, "");
      const item = {
        Type: clone[index].type,
        ProductMaterialCode: clone[index].code,
        Name: clone[index].name,
        WorkSheetFieldList: result,
        WorksheetContent: `${clone[index].name}.txt`,
        Status: "",
        DocumentType: "",
      };
      exportData.push(item);
    });
    return exportData;
  };

  const handleExportToCSV = () => {
    const data = getExportData();
    if (data && data.length) {
      const { ProductMaterialCode } = data[0];
      const curr = new Date();
      const date = `${curr.getDate()}${
        curr.getMonth() + 1
      }${curr.getFullYear()}`;
      exportToCsv(data, `${ProductMaterialCode}_${date}`);
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
