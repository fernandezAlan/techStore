import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { RoutePaths } from "../App";
import React from "react";
const NotFound = () => {
  return (
    <Container sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h1" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Página no encontrada
      </Typography>
      <Typography variant="body1" color="textSecondary">
        Lo sentimos, la página que buscas no existe.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" component={Link} to={RoutePaths.HOME}>
          Volver al Inicio
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
