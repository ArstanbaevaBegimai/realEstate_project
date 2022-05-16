import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import HouseCardStyle from "./HouseCardStyle.css";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

const HouseCard = (props) => {

  const { title, rooms, area, price, currency, image, city, id } = props;
  return (
    <Card sx={{ maxWidth: 345, width: 345 }}>
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <div className="span-group">
          <span className="span-item">
            <b>Number of rooms:</b> {rooms}
          </span>
          <span className="span-item">
            <b>Square meters:</b> {area}
          </span>
          <span className="span-item">
            <LocalOfferIcon sx={{ fontSize: "15px" }} />
            {price}
            {currency}
          </span>
          <span className="span-item">
            <LocationOnIcon sx={{ fontSize: "15px" }} /> {city}
          </span>
        </div>
      </CardContent>

      <CardActions>
        <Link style={{textDecoration:"none"}} to={`${id}`}>
          <Button
            size="small"
            sx={{
              backgroundColor: "#fff",
              color: "black",
              "&:hover": {
                color: "#fff",
                backgroundColor: "#000",
              },
            }}
            >
            View details
          </Button>
        </Link>
        <Button
          size="small"
          sx={{
            backgroundColor: "#fff",
            color: "black",
            "&:hover": {
              color: "#fff",
              backgroundColor: "#000",
            },
          }}
        >
          Delete
        </Button>
        <Button
          size="small"
          sx={{
            backgroundColor: "#fff",
            color: "black",
            "&:hover": {
              color: "#fff",
              backgroundColor: "#000",
            },
          }}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};
export default HouseCard;
