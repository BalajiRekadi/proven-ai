import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components";
import Home from "./components/home/home";
import Create from "./components/master-data/create/Create";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
