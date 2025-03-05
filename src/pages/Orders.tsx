import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
const orders = [{ id: 1, status: "Enviado", total: 250 }];

const Orders = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Mis Órdenes
      </Typography>
      <List>
        {orders.map((order) => (
          <ListItem key={order.id}>
            <ListItemText primary={`Orden #${order.id}`} secondary={`Estado: ${order.status} - Total: $${order.total}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Orders;
