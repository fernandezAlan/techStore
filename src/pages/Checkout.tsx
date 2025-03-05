import { Container, Typography, TextField, Button } from "@mui/material";
import React from "react";
const Checkout = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Finalizar Compra
      </Typography>
      <TextField label="Nombre Completo" fullWidth sx={{ mt: 2 }} />
      <TextField label="Dirección" fullWidth sx={{ mt: 2 }} />
      <TextField label="Tarjeta de Crédito" fullWidth sx={{ mt: 2 }} />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Pagar
      </Button>
    </Container>
  );
};

export default Checkout;
