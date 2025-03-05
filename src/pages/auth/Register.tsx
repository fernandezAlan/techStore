import { Container, Typography, TextField, Button, Box } from "@mui/material";
import React from "react";
const Register = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom align="center">
        Crear Cuenta
      </Typography>
      <Box component="form">
        <TextField label="Nombre Completo" fullWidth required sx={{ mt: 2 }} />
        <TextField label="Correo Electrónico" type="email" fullWidth required sx={{ mt: 2 }} />
        <TextField label="Contraseña" type="password" fullWidth required sx={{ mt: 2 }} />
        <TextField label="Confirmar Contraseña" type="password" fullWidth required sx={{ mt: 2 }} />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
          Registrarse
        </Button>
      </Box>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        ¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a>
      </Typography>
    </Container>
  );
};

export default Register;
