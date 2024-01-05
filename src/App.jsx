import { useEffect, useState } from "react";
import Home from "./pages/Home";
import ProductDetails from "./pages/productDetails";
import { Route, Routes } from "react-router-dom";
import Button from "@mui/material/Button";
function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
