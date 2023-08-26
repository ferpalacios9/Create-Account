import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";

const DatosUsuario = ({ updateStep }) => {
  const [email, setEmail] = useState({ value: "", valid: null });
  const [password, setPassword] = useState({ value: "", valid: null });
  const [checkEmail, setCheckEmail] = useState(false)

  const handleEmailChange = (input) => {
    const newEmail = input.target.value;
    const validate = validarEmail(newEmail);
    setEmail({ value: newEmail, valid: validate });
  }

  const handleBlur = () => {
    { (email.value !== '' && email.valid) ? setCheckEmail(false) : setCheckEmail(true) }
  }

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        if (email.valid && password.valid) {
          console.log("Siguiente formulario");
          updateStep(1);
        } else {
          console.log("No hacer nada");
        }
        console.log(email, password);
      }}
    >
      <TextField
        label="Correo electrónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={checkEmail}
        helperText={checkEmail && "Ingresa un correo electrónico válido."}
        value={email.value}
        onChange={handleEmailChange}
        onBlur={handleBlur}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        error={password.valid === false}
        helperText={
          password.valid === false &&
          "Ingresa una contraseña válida, Al menos 8 caracteres y máximo 20."
        }
        value={password.value}
        onChange={(input) => {
          const password = input.target.value;
          setPassword({ value: password, valid: validarPassword(password) });
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosUsuario;