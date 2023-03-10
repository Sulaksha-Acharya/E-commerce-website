import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import imgf from "../src/asset/imgf.jpg";
import ddd from "../src/asset/ddd.jpg";
import xyz from "../src/asset/xyz.jpg";
import shoes from "../src/asset/shoes.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import del from "../src/asset/del.jpg";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import ItemCard from "./component/ItemCard";
import Wishlist from "./Wishlist";
import Cart from "./Cart";

const Home = () => {
  const [addto, setHome] = useState("");

  const navigate = useNavigate();
  const CartPage = () => {
    navigate(`/cart/${addto}`);
  };

  const carouselItems = [
    { title: "Fresh Fruites and Vegetable", subtitle: "30 % Off", image: xyz },
    { title: "Lightweight Gaming Headset", subtitle: "10 % Off", image: ddd },
    {
      title: "Shoes for Men Light Sports Fashion Running Shoes",
      subtitle: "10 % Off",
      image: shoes,
    },
  ];

  const latestProducts = [
    {
      title: "New Product A",
      description:
        " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: " d",
    },
    {
      title: "New Product B",
      description:
        " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: "",
    },
    {
      title: "New Product C",
      description:
        " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: "",
    },
    {
      title: "New Product D",
      description:
        " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: "",
    },
    {
      title: "New Product E",
      description:
        " Model : Inspiron 14 5420 Keep the conversation going with this 35.56cm (14 Inch) laptop. Features an FHD camera, dual mics with AI noise reduction & latest 12th Gen Intel® Core™ proces",

      image: "",
    },
    
    
  ];

  return (

    <div>
      <h1 style={{ textAlign: "center" }}>
        <b>Welcome to ShopCart</b>
      </h1>

      <Carousel>
        {carouselItems?.map((item) => (
          <Carousel.Item key={item?.title}>
            <img
              className="xyz"
              src={item?.image}
              alt="img"
              width={"100%"}
              height={300}
            />
            <Carousel.Caption>
              <h3>{item?.title}</h3>
              <p>{item?.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div>
        <h1 style={{ textAlign: "center" }}>
          <b>See the latest Outfit</b>
        </h1>
        <p style={{ textAlign: "center" }}>
          <i>Explore our New Arrivals</i>
        </p>

        <Container style={{ display: "flex", gap: 15 }}>
          {latestProducts?.map((product) => (
            <ItemCard
              key={product.id}
              title={product?.title}
              description={product?.description}
            />
            
          ))}
        </Container>
      

      </div>
    </div>
  );
};

export default Home;
