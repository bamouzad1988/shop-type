"use client";
import React, { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ShowMessage({ text = "sadasd", type = "error" }) {
  // info,success,warn,error,
  useEffect(() => {
    toast[type](text, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }, []);

  return (
    <div className="text-sm">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default ShowMessage;
