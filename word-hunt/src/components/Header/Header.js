import React from "react";
import "./header.css";
import { TextField } from "@mui/material";
import { MenuItem }from "@mui/material";
import countries from "../data/category";

const Header = ({ setCategory, category, word, setWord }) => {
  const handleChange = (e) => {
    setCategory(e.target.value);
    setWord("");
    // setMeanings([]);
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Word-Hunt"}</span>
      <div className="inputs">
        <TextField
          className="search"
          id="filled-basic"
          label="Search a Word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <TextField
          select
          label="Language"
          value={category}
          onChange={(e) => handleChange(e)}
          className="select"
        >
          {countries.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default Header;
