import { Container, Box } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "black", color: "white" }}>
      <Box
        style={{
          width: "70%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "40px",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <LocationOnIcon sx={{ fontSize: "30px" }} />
          <h3>Address</h3>
          <h5>23 James Street</h5>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <PhoneIphoneIcon sx={{ fontSize: "30px" }} />
          <h3>Phone number</h3>
          <h5>+7774 567 78 34</h5>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <MailIcon sx={{ fontSize: "30px" }} />
          <h3>Email</h3>
          <h5>myHomie@gmail.com</h5>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
