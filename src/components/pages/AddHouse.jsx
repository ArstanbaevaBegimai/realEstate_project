import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, {useState, useContext} from "react";
import { houseContext } from "../contexts/HouseContext";

const AddHouse = () => {
  
  const {postHouse} = useContext(houseContext);
  const [data, setData] = useState({
    title: "",
    rooms: 0,
    area: 0,
    price: 0,
    currency: "",
    description: "",
    image: "",
    city: ""
  })

  console.log(data);

  return (
    <Container>
      <Box sx={{my:"100px", p:"20px", border:"1px solid #dfdfdf", display:"flex", flexDirection:"column", width:{ xs: "100%", md: "40%" }}}>
        {
          Object.keys(data).map(item => {
            if(item === "currency") {
              return <FormControl fullWidth sx={{my:"10px"}} key={item}>
              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Currency"
                value={data.currency}
                onChange={(event) => {setData({
                  ...data,
                  currency: event.target.value
                })}}
              >
                <MenuItem value="$">$</MenuItem>
                <MenuItem value="€">€</MenuItem>
                <MenuItem value="£">£</MenuItem>
              </Select>
            </FormControl>
            } else {
              return <TextField 
                        sx={{my:"10px"}}
                        key={item} 
                        label={item.charAt(0).toUpperCase() + item.slice(1)} 
                        variant="outlined" 
                        onChange={(event) => {
                          if(item === "price" || item === "area" || item === "rooms") {
                            setData({
                            ...data,
                            [item]: +event.target.value
                          })
                          } else {
                            setData({
                              ...data,
                              [item]: event.target.value
                            })
                          }
                      }}/>
            }
          })
        }
        <Button 
          sx={{backgroundColor: "#000"}}
          variant="contained"
          onClick={() => postHouse(data)}>Submit</Button>
      </Box>
    </Container>
  )
};

export default AddHouse;
