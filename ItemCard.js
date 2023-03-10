import React from "react";
import { FiHeart } from "react-icons/fi";


import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ItemCard = ({ title, description, image }) => {
  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/del/src/img/del.jpg"
        title="Laptop"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <FiHeart />
        <Button size="small">Wishlist</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
