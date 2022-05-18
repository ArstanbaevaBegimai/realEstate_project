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
import { houseContext } from "./contexts/HouseContext";
import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FormControl, InputLabel, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

const HouseCard = (props) => {
  const { title, rooms, area, price, currency, image, city, id, description } =
    props;
  const { deletePost, editPost } = useContext(houseContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [editData, setEditData] = useState({
    title: title,
    rooms: rooms,
    area: area,
    price: price,
    currency: currency,
    description: description,
    image: image,
    city: city,
  });

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

      <CardActions style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link style={{ textDecoration: "none" }} to={`${id}`}>
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
          onClick={() => deletePost(id)}
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
          onClick={handleOpen}
        >
          Edit
        </Button>

        {/* MODAL */}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Edit properties
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {Object.keys(editData).map((item) => {
                return (
                  <TextField
                    sx={{ my: "10px", mx: "10px", width: "90%" }}
                    key={item}
                    label={item.charAt(0).toUpperCase() + item.slice(1)}
                    value={editData[item]}
                    variant="outlined"
                    onChange={(event) => {
                      if (
                        item === "price" ||
                        item === "area" ||
                        item === "rooms"
                      ) {
                        setEditData({
                          ...editData,
                          [item]: +event.target.value,
                        });
                      } else {
                        setEditData({
                          ...editData,
                          [item]: event.target.value,
                        });
                      }
                    }}
                  />
                );
              })}
            </Typography>
            <Button
              size="small"
              sx={{
                my: "10px",
                backgroundColor: "#fff",
                color: "black",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#000",
                },
              }}
              onClick={() => {
                editPost(id, editData);
                handleClose();
              }}
            >
              Save changes
            </Button>
          </Box>
        </Modal>
      </CardActions>
    </Card>
  );
};
export default HouseCard;
