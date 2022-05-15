import { Box, Container } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MailIcon from "@mui/icons-material/Mail";

const Contacts = () => {
  return (
    <Container sx={{ my: "130px" }}>
      <Box
        style={{
          textAlign: "center",
          backgroundColor: "#E5E7E9",
          padding: "30px",
        }}
      >
        <Box>
          <h1 style={{ fontSize: "60px" }}>Contact us</h1>
          <p style={{ fontSize: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            molestiae.
          </p>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            marginTop: "100px",
          }}
        >
          <Box>
            <LocationOnIcon sx={{ fontSize: "50px" }} />
            <h2>Address</h2>
            <h4>23 James Street</h4>
          </Box>
          <Box>
            <PhoneIphoneIcon sx={{ fontSize: "50px" }} />
            <h2>Phone number</h2>
            <h4>+7774 567 78 34</h4>
          </Box>
          <Box>
            <MailIcon sx={{ fontSize: "50px" }} />
            <h2>Email</h2>
            <h4>myHomie@gmail.com</h4>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contacts;
