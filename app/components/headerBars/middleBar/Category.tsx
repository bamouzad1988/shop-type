"use client";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useState } from "react";

function Category() {
  const [category, setCategory] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ width: 170 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" size="small">
          دسته بندی
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="دسته بندی"
          onChange={handleChange}
          style={{
            borderRadius: "0",
            borderTopLeftRadius: "4px",
            borderBottomLeftRadius: "4px",
            height: 40,
          }}
        >
          <MenuItem value={"-1"}> دسته بندی</MenuItem>
          <MenuItem value={"کالای دیجیتال"}>کالای دیجیتال</MenuItem>
          <MenuItem value={"پوشاک"}>پوشاک</MenuItem>
          <MenuItem value={"لوازم منزل"}>لوازم منزل</MenuItem>
          <MenuItem value={"اسباب بازی"}>اسباب بازی</MenuItem>
          <MenuItem value={"زیبایی و سلامت"}>زیبایی و سلامت</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Category;
