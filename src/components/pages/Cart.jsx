import { houseContext } from "../contexts/HouseContext";
import { useContext, useEffect } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Cart = () => {
  const navigate = useNavigate();
  const { getAllHouses, houses } = useContext(houseContext);

  useEffect(() => {
    getAllHouses();
  }, []);

  let cart = JSON.parse(localStorage.getItem("cart"));

  let filteredHouses = houses.filter((item) => cart.includes(item.id));

  return (
    <Container sx={{ my: "120px" }}>
      <h2>There are {filteredHouses.length} items in your cart</h2>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          {filteredHouses.map((house) => {
            return (
              <Card sx={{ maxWidth: 345, width: 345, mx: 2 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={house.image}
                  alt={house.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {house.title}
                  </Typography>
                  <div className="span-group">
                    <span className="span-item">
                      <b>Number of rooms:</b> {house.rooms}
                    </span>
                    <span className="span-item">
                      <b>Square meters:</b> {house.area}
                    </span>
                    <span className="span-item">
                      <LocalOfferIcon sx={{ fontSize: "15px" }} />
                      {house.price}
                      {house.currency}
                    </span>
                    <span className="span-item">
                      <LocationOnIcon sx={{ fontSize: "15px" }} /> {house.city}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        <Button
          sx={{
            my: "20px",
            backgroundColor: "#fff",
            color: "black",
            "&:hover": {
              color: "#fff",
              backgroundColor: "#000",
            },
          }}
          onClick={() => navigate("/payment")}
        >
          Confirm booking and go for payment
        </Button>
      </Box>
    </Container>
  );
};

export default Cart;
