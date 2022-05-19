import React, { useContext } from "react";
import { houseContext } from "../contexts/HouseContext";

const CartDetails = () => {
  const { cart } = useContext(houseContext);
  console.log(cart);
  return <h1></h1>;
};

export default CartDetails;
