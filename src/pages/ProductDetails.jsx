import { Image } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    getSingleData();
  }, []);
  const [product, setProduct] = useState(null);
  const getSingleData = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );

      //   console.log("response getSingleData", response);
      setProduct(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log(product, "product");

  return (
    <>
    <Stack>
    <Typography variant="h2">
          Product Details
        </Typography>
      <Stack sx={{border: "2px solid black", padding: 5, width: 650, mx:"auto", borderRadius: 2}}>
        <Stack mx={"auto"}>
          <img src={product?.image} alt={product?.title} width={250} />
        </Stack>
        <Typography variant="h3">
          {product?.title}
        </Typography>
        <Typography variant="p">
          {product?.description}
        </Typography>
        <Button variant="contained">Buy ${product?.price}</Button>
      </Stack>
    </Stack>
    </>
  );
};

export default ProductDetails;
