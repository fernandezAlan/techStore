import { Grid, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { RoutePaths } from "../App";
import React from "react";

const products = [
  { id: 1, name: "Producto 1", price: 100, image: "/images/product1.jpg" },
  { id: 2, name: "Producto 2", price: 150, image: "/images/product2.jpg" },
];

const Products = () => {
  return (
    <Grid container spacing={3} sx={{ mt: 4 }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia component="img" height="200" image={product.image} alt={product.name} />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography color="textSecondary">${product.price}</Typography>
              <Button variant="contained" fullWidth color="primary" component={Link} to={`${RoutePaths.PRODUCT_DETAIL.replace(":id", product.id.toString())}`}>
                Ver Detalles
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
