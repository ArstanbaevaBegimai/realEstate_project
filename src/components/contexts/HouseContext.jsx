import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";

const INIT_STATE = {
  houses: null,
  filteredHouses: null,
  isFiltered: false,
  house: null,
  pagesCount: 0,
  _limit: 6,
  cart: null
};

const ACTIONS = {
  GET_ALL_HOUSES: "get-all-houses",
  GET_HOUSE: "get-house",
  ADD_TO_CART: "add-to-cart"
};

const REDUCER = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_ALL_HOUSES:
      return {
        ...state,
        houses: action.payload.data,
        pagesCount: Math.ceil(
          action.payload.headers["x-total-count"] / state._limit
        ),
      };
    case ACTIONS.GET_HOUSE:
      return { ...state, house: action.payload };
    case ACTIONS.ADD_TO_CART:
      return {...state, cart: action.payload}
    default:
      return state;
  }
};
export const houseContext = createContext();

const API = "http://localhost:8000/houses";

const HouseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(REDUCER, INIT_STATE);

  const getHouseById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    dispatch({
      type: ACTIONS.GET_HOUSE,
      payload: response.data,
    });
  };

  const postHouse = (house) => {
    const post = axios.post(API, house).then(() => {
      window.location.href = `/houses`;
    });
  };

  const addToCart = (id) => {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    if(cartItems.includes(id)) {
      cartItems = cartItems.filter(item => item != id)
    } else {
      cartItems.push(id)
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      payload: cartItems
    })
  }

  const getAllHouses = async () => {
    const response = await axios.get(`${API}${window.location.search}`);
    dispatch({ type: ACTIONS.GET_ALL_HOUSES, payload: response });
  };

  const deletePost = async (id) => {
    const response = await axios.delete(`${API}/${id}`);
    getAllHouses();
  };

  const editPost = async (id, editData) => {
    const response = await axios.put(`${API}/${id}`, editData);
    getAllHouses();
  };

  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch({
        type: "ADD_TO_CART",
        payload: cartItems
    })
}, [])

  return (
    <houseContext.Provider
      value={{
        houses: state.houses,
        house: state.house,
        pagesCount: state.pagesCount,
        _limit: state._limit,
        getAllHouses,
        postHouse,
        getHouseById,
        deletePost,
        editPost,
        addToCart,
        cart: state.cart
      }}
    >
      {children}
    </houseContext.Provider>
  );
};

export default HouseContextProvider;
