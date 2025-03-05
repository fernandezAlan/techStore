import { Container, Typography, TextField, Button, Box } from "@mui/material";
import React from "react";
const Login = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom align="center">
        Iniciar Sesión
      </Typography>
      <Box component="form">
        <TextField label="Correo Electrónico" type="email" fullWidth required sx={{ mt: 2 }} />
        <TextField label="Contraseña" type="password" fullWidth required sx={{ mt: 2 }} />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
          Ingresar
        </Button>
      </Box>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        ¿No tienes cuenta? <a href="/register">Regístrate aquí</a>
      </Typography>
    </Container>
  );
};

export default Login;
