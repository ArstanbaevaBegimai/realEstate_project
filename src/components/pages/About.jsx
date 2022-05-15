import * as React from "react";
import { Box, Container } from "@mui/material";

const About = () => {
  return (
    <Container sx={{ my: "130px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <img
            style={{
              width: "500px",
              marginRight: "50px",
              marginBottom: "30px",
            }}
            src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="team-img"
          />
          <p style={{ width: "500px", lineHeight: "30px" }}>
            <h2>Our Mission</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet
            distinctio blanditiis tempora quasi maiores esse consectetur, beatae
            impedit perspiciatis adipisci reiciendis, hic magnam maxime?
            <br />
            ducimus eligendi culpa pariatur nostrum, tempora quaerat tempore
            quos minus nulla vitae est placeat nam quisquam vero maiores id aut,
            cupiditate rerum iure dolorum.
          </p>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <img
            style={{
              width: "500px",
              marginRight: "50px",
              marginBottom: "30px",
            }}
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="team-img"
          />
          <p style={{ width: "500px", lineHeight: "30px" }}>
            <h2>Our services</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet
            distinctio blanditiis tempora quasi maiores esse consectetur, beatae
            impedit perspiciatis adipisci reiciendis, hic magnam maxime?
            <br />
            ducimus eligendi culpa pariatur nostrum, tempora quaerat tempore
            quos minus nulla vitae est placeat nam quisquam vero maiores id aut,
            cupiditate rerum iure dolorum.
          </p>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <img
            style={{
              width: "500px",
              marginRight: "50px",
              marginBottom: "30px",
            }}
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="team-img"
          />
          <p style={{ width: "500px", lineHeight: "30px" }}>
            <h2>Our team</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet
            distinctio blanditiis tempora quasi maiores esse consectetur, beatae
            impedit perspiciatis adipisci reiciendis, hic magnam maxime?
            <br />
            ducimus eligendi culpa pariatur nostrum, tempora quaerat tempore
            quos minus nulla vitae est placeat nam quisquam vero maiores id aut,
            cupiditate rerum iure dolorum.
          </p>
        </Box>
      </Box>
      <Box></Box>
    </Container>
  );
};

export default About;
