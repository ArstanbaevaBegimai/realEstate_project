import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/pages/MainPage";
import AddHouse from "./components/pages/AddHouse";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import HouseContextProvider from "./components/contexts/HouseContext";
import HouseDetails from "./components/pages/HouseDetails";
import { AuthContextProvider } from "./components/contexts/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import RegistrationLoginForm from "./components/pages/RegistrationLoginForm";
import Cart from "./components/pages/Cart";
import CartDetails from "./components/pages/CartDetails";
import Payment from "./components/pages/Payment";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user, "USER");
    });
  }, []);

  return (
    <HouseContextProvider>
      <BrowserRouter>
        <AuthContextProvider value={{ currentUser }}>
          <Header />
          <Routes>
            <Route element={<MainPage />} path="/houses" />
            <Route element={<About />} path="/about" />
            <Route element={<Contacts />} path="/contacts" />
            <Route element={<HouseDetails />} path="/houses/:houseId" />
            <Route element={<AddHouse />} path="/add-house" />
            <Route
              element={<RegistrationLoginForm title="Register" />}
              path="/register"
            />
            <Route
              element={<RegistrationLoginForm title="Sign in" />}
              path="/sign-in"
            />
            <Route element={<Cart />} path="/cart" />
            <Route element={<Payment />} path="/payment" />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </HouseContextProvider>
  );
};

export default App;
