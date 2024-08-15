import React from "react";
import { DatePickerInput } from "@mantine/dates";
import { Box, Flex, Select, TextInput, SegmentedControl } from "@mantine/core";
import { IconCalendar, IconSearch } from "@tabler/icons-react";
import { ExportTable } from "../../../shared/components";

const Export = ({ data }) => {
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
      <SegmentedControl
        color="proven"
        value="Worksheets"
        data={["Worksheets", "Tests", "Test Plans"]}
        mb={10}
      />
      <ExportTable data={data} />
    </Box>
  );
};

export default Export;
