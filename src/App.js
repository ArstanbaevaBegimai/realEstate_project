import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/pages/MainPage";
import AddHouse from "./components/pages/AddHouse";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import HouseContextProvider from "./components/contexts/HouseContext";
import HouseDetails from "./components/pages/HouseDetails";

const App = () => {
  return (
    <HouseContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<MainPage />} path="/houses" />
          <Route element={<About />} path="/about" />
          <Route element={<Contacts />} path="/contacts" />
          <Route element={<HouseDetails />} path="/houses/:houseId" />
          <Route element={<AddHouse />} path="/add-house" />
        </Routes>
      </BrowserRouter>
    </HouseContextProvider>
  );
};

export default App;
