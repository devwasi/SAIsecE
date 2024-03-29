import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCmp from "../components/CardCmp";
import NavbarCmp from "../components/NavbarCmp";

const Home = () => {
  const [productData, setProductData] = useState(null);
  useEffect(() => {
    // console.log("first time");
    // fetch("https://fakestoreapi.com/productssdsaasdsadad")
    //   .then((res) => res.json()) //convert data into json
    //   .then((response) => {
    //     console.log("response", response);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data, "response");
      setProductData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  console.log("productData", productData);
  return (
    <>
    <NavbarCmp />
    <div className="d-flex  gap-3 flex-wrap ">
      {productData?.map((product, index) => {
        return (
          <CardCmp
            title={product.title}
            desc={product.description}
            image={product.image}
            id={product.id}
            price={product.price}
          />
        );
      })}

      <CardCmp />
    </div>
    </>
  );
};

export default Home;
