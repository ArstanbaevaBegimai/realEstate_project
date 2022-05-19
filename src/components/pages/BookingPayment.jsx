import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const BookingPayment = () => {
  return (
    <Container>
      <Box>
        <h3>Step 1: Your details</h3>
        <Box>
          <TextField required id="outlined-required" label="First name" />
          <TextField required id="outlined-required" label="Last name" />
          <TextField required id="outlined-required" label="Email address" />
          <TextField
            required
            id="outlined-required"
            label="Cell phone number"
          />
        </Box>
      </Box>
      <Box>
        <h3>Step 2: Payment details</h3>
        <Box>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Choose payment option
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <Box sx={{ display: "flex" }}>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Credit/Debit card"
                />
                <img
                  style={{ width: "40px" }}
                  src="../images/credit-card.png"
                  alt=""
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Paypal"
                />
                <img
                  style={{ width: "40px" }}
                  src="../images/paypal.png"
                  alt=""
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Gift card"
                />
                <img
                  style={{ width: "40px" }}
                  src="../images/gift-card.png"
                  alt=""
                />
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>
        <Box>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Enter your card information
            </FormLabel>
            <TextField required id="outlined-required" label="Name on card" />
            <TextField required id="outlined-required" label="Card number" />
            <TextField required id="outlined-required" type="date" />
            <TextField required id="outlined-required" label="Security code" />
          </FormControl>
        </Box>
      </Box>
      <Button
        sx={{
          backgroundColor: "#000",
          color: "white",
          "&:hover": {
            color: "#000",
            backgroundColor: "#fff",
          },
        }}
      >
        Confirm booking
      </Button>
    </Container>
  );
};

export default BookingPayment;
