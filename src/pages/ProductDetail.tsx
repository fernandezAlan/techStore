import { Container, Typography, Button, Card, CardMedia } from "@mui/material";
import { useParams } from "react-router-dom";
import { RoutePaths } from "../App";
import React from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = { name: `Producto ${id}`, price: 120, image: "/images/product1.jpg", description: "Descripción del producto." };

  return (
    <Container sx={{ mt: 4 }}>
      <Card>
        <CardMedia component="img" height="300" image={product.image} alt={product.name} />
      </Card>
      <Typography variant="h4" sx={{ mt: 2 }}>
        {product.name}
      </Typography>
      <Typography variant="h6" color="textSecondary">
        ${product.price}
      </Typography>
      <Typography sx={{ mt: 2 }}>{product.description}</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Agregar al Carrito
      </Button>
    </Container>
  );
};

export default ProductDetail;
