import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarName, validarLastName, validarPhone } from "./validaciones";

const DatosPersonales = ({ updateStep }) => {

  const [name, setName] = useState({ value: '', valid: null })
  const [lastName, setLastName] = useState({ value: '', valid: null })
  const [phone, setPhone] = useState({ value: '', valid: null })
  const [checkName, setCheckName] = useState(false)

  const handleNameChange = (input) => {
    const newName = input.target.value;
    const validate = validarName(newName);
    setName({ value: newName, valid: validate });
  }

  const handleBlurName = () => {
    (name.value !== '' && name.valid) ? setCheckName(false) : setCheckName(true) 
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
        updateStep(2)
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={checkName}
        helperText={checkName && "Ingresa un nombre válido."}
        value={name.value}
        onChange={handleNameChange}
        onBlur={handleBlurName}

      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={lastName.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarLastName(value);
          setLastName({ value, valid });
          console.log(value, valid)
        }}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={phone.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarPhone(value);
          setPhone({ value, valid });
          console.log(value, valid)
        }}
      />
      <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
