import { Container, Typography, Button, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
const cartItems = [{ id: 1, name: "Producto 1", price: 100, quantity: 1 }];

const Cart = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Carrito de Compras
      </Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.name} secondary={`Cantidad: ${item.quantity} - $${item.price}`} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary">
        Finalizar Compra
      </Button>
    </Container>
  );
};

export default Cart;
