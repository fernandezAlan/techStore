import { Container, Typography, TextField, Button } from "@mui/material";
import React from "react";
const Profile = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Mi Perfil
      </Typography>
      <TextField label="Nombre" fullWidth sx={{ mt: 2 }} />
      <TextField label="Correo Electrónico" fullWidth sx={{ mt: 2 }} />
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Guardar Cambios
      </Button>
    </Container>
  );
};

export default Profile;
