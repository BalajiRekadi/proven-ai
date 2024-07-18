import React from "react";
import "./home.css";
import { Select, TextInput } from "@mantine/core";
import { DateInput, DatePickerInput } from "@mantine/dates";

const Home = () => {
  return (
    <div className="home">
      <div className="search-container">
        <TextInput placeholder="search" style={{ width: "20%" }} />
        <div className="date-range">
          <Select
            placeholder="Category"
            variant="filled"
            data={["One", "Two", "Three"]}
          />
          <Select
            placeholder="Filter By"
            variant="filled"
            data={["One", "Two", "Three"]}
          />
          <DatePickerInput value={null} placeholder="Date Range" />
        </div>
      </div>
    </div>
  );
};

export default Home;
