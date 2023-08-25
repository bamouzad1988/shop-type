"use client";
import TextField from "@mui/material/TextField";

function Search() {
  return (
    <>
      <button className="rounded-s-default h-10 z-10 relative right-1 px-5 bg-custom-text text-custom-white hover:bg-custom-main transition-colors duration-300">
        <i className="ti-search "></i>
      </button>
      <TextField
        className="sm:w-[unset] w-full"
        InputProps={{
          sx: { borderRadius: 0, height: 40 },
        }}
        label="جستجو"
        variant="outlined"
        size="small"
      />
    </>
  );
}

export default Search;
