import React, { createContext, useReducer } from "react";
import axios from "axios";

const INIT_STATE = {
  houses: null,
  filteredHouses: null,
  isFiltered: false,
  house: null,
};

const ACTIONS = {
  GET_ALL_HOUSES: "get-all-houses",
  GET_HOUSE: "get-house",
};

const REDUCER = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_ALL_HOUSES:
      return { ...state, houses: action.payload };
  }
};

export const houseContext = createContext();

const API = "http://localhost:8000/houses";

const HouseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(REDUCER, INIT_STATE);

  const getAllHouses = async () => {
    const response = await axios.get(API);
    dispatch({ type: ACTIONS.GET_ALL_HOUSES, payload: response.data });
  };

  return (
    <houseContext.Provider value={{ houses: state.houses, getAllHouses }}>
      {children}
    </houseContext.Provider>
  );
};

export default HouseContextProvider;
