import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../Utils/tasksSlice";
import { TextField } from "@mui/material";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <TextField
      label="Search Tasks"
      variant="outlined"
      fullWidth
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
