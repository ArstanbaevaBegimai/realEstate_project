import React, { useState } from "react";
import { FormControl, InputLabel, Input, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const Search = ({ search, setSearch }) => {
  return (
    <FormControl variant="standard" style={{ width: "80%", marginTop: "10px" }}>
      <InputLabel htmlFor="input-with-icon-adornment">Search house</InputLabel>
      <Input
        id="input-with-icon-adornment"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default Search;
