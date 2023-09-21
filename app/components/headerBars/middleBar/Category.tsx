"use client";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// interface
import { ListItemProps } from "@/types/props.module";

import { useState } from "react";

function Category({listItems,title}:ListItemProps) {
  const [category, setCategory] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ width: 170 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" size="small">
          {title}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label={title}
          onChange={handleChange}
          style={{
            borderRadius: "0",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
            height: 40,
          }}
        >
          <MenuItem value={"-1"}>{title}</MenuItem>
          {listItems &&
            listItems.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Category;
