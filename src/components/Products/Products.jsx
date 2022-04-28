import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$5",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464ed9e1-ad03-4bca-b5ed-418b1fc41734/air-zoom-pegasus-38-road-running-shoes-Hmsj6Q.png",
  },
  {
    id: 2,
    name: "MacBook",
    description: "Apple Macbook",
    price: "$20",
    image:
      "https://cdn0-production-images-kly.akamaized.net/BDkkLwApR7PQC2c7cQ_0MqT41X0=/1280x720/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2396411/original/038762800_1540948748-apple-macbook01.jpg",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
