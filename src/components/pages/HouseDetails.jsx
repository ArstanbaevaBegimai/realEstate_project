import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import CalendarToday from "@mui/icons-material/CalendarToday";
import LocalOffer from "@mui/icons-material/LocalOffer";
import {
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { houseContext } from "../contexts/HouseContext";
import Loader from "../Loader";

const HouseDetails = () => {
  const navigate = useNavigate();

  const params = useParams();
  const { house, getHouseById, houses, getAllHouses, addToCart } =
    useContext(houseContext);

  useEffect(() => {
    getAllHouses();
  }, []);

  useEffect(() => {
    getHouseById(params.houseId);
  }, []);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (!house) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  const { title, rooms, area, price, currency, description, image, city, id } =
    house;

  let housesFilter = houses.filter(
    (house) => house.city == city && house.id != id
  );

  housesFilter.splice(4);

  console.log(cart);

  return (
    <Container maxWidth="100%" sx={{ m: "100px 50px 0 0", width: "100%" }}>
      <Grid container my="50px">
        <Grid
          item
          sx={{
            p: "20px",
            boxShadow: 24,
            borderRadius: "7px",
            width: { xs: "100%", md: "70%" },
            my: { xs: "50px", md: "0px" },
            mr: { xs: "0", md: "30px" },
          }}
        >
          <h2>{title}</h2>
          <Grid sx={{ display: "flex" }}>
            <Grid item sx={{ mr: "50px", width: "50%" }}>
              <img style={{ width: "100%" }} src={image} alt={title} />
            </Grid>
            <Grid item sx={{ width: "40%" }}>
              <Rating />
              <Typography variant="h5" fontWeight="bold">
                Description
              </Typography>
              <Typography
                sx={{ borderBottom: "2px solid #dfdfdf", my: "10px" }}
              >
                City: <strong>{city}</strong>{" "}
              </Typography>
              <Typography
                sx={{ borderBottom: "2px solid #dfdfdf", my: "10px" }}
              >
                Rooms: <strong>{rooms}</strong>
              </Typography>
              <Typography
                sx={{ borderBottom: "2px solid #dfdfdf", my: "10px" }}
              >
                Area: <strong>{area}m²</strong>
              </Typography>
              <Typography sx={{ my: "10px" }}>{description}</Typography>
              <Grid sx={{ display: { xs: "flex", md: "none" } }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#000",
                    m: "20px 10px 20px 0",
                    p: "10px",
                  }}
                  onClick={() => addToCart(id)}
                  disabled={cart && cart.includes(id) ? true : false}
                >
                  Book this house
                </Button>
                <IconButton>
                  <FavoriteBorder fontSize="30px" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            boxShadow: 24,
            display: { xs: "none", md: "block" },
            borderRadius: "5px",
            p: "20px",
            width: { xs: "100%", md: "25%" },
          }}
        >
          <h2>
            <LocalOffer />
            {price}
            {currency}
          </h2>
          <TextField
            label="From DD-MM-YYYY"
            variant="outlined"
            sx={{ mb: "20px" }}
          />
          <TextField
            label="To DD-MM-YYYY"
            variant="outlined"
            sx={{ mb: "20px" }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "black",
              "&:hover": {
                color: "#fff",
                backgroundColor: "#000",
              },
              m: "20px 10px 20px 0",
              p: "10px",
            }}
            onClick={() => addToCart(id)}
            disabled={cart && cart.includes(id) ? true : false}
          >
            Book this house
          </Button>
          <IconButton>
            <FavoriteBorder fontSize="30px" />
          </IconButton>
        </Grid>
      </Grid>
      <Typography
        my="50px"
        variant="h4"
        sx={{ textAlign: { md: "start", xs: "center" } }}
      >
        Similar houses in <strong>{city}</strong>
      </Typography>
      <Grid
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          mb: "50px",
        }}
      >
        {housesFilter.map((house) => {
          return (
            <Card
              sx={{
                maxWidth: { xs: "50%", md: "20%" },
                height: "300px",
                p: "20px",
                mr: { xs: "none", md: "20px" },
                mb: "20px",
                boxShadow: 10,
              }}
            >
              <img
                style={{ width: "100%", height: "200px" }}
                src={house.image}
                alt={house.title}
              />
              <Typography variant="h5">{house.title}</Typography>
              <Typography my="10px">
                {house.price}
                {house.currency}
              </Typography>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#000" }}
                onClick={() => navigate(`/houses/${house.id}`)}
              >
                View Details
              </Button>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default HouseDetails;
