import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarName, validarLastName, validarPhone } from "./validaciones";

const DatosPersonales = ({ updateStep }) => {

  const [name, setName] = useState({ value: '', valid: null })
  const [lastName, setLastName] = useState({ value: '', valid: null })
  const [phone, setPhone] = useState({ value: '', valid: null })
  const [checkName, setCheckName] = useState(false)
  const [checkLast, setCheckLast] = useState(false)
  const [checkPhone, setCheckPhone] = useState(false)

  const handleNameChange = (input) => {
    const newName = input.target.value;
    const validate = validarName(newName);
    setName({ value: newName, valid: validate });
  }

  const handleBlurName = () => {
    (name.value !== '' && name.valid) ? setCheckName(false) : setCheckName(true) 
  }

  const handleLastChange = (input) => {
    const newLast = input.target.value;
    const validate = validarLastName(newLast);
    setLastName({ value: newLast, valid: validate });
  }

  const handleBlurLast = () => {
    (lastName.value !== '' && lastName.valid) ? setCheckLast(false) : setCheckLast(true) 
  }

  const handlePhoneChange = (input) => {
    const newPhone = input.target.value;
    const validate = validarPhone(newPhone);
    setPhone({ value: newPhone, valid: validate });
  }

  const handleBlurPhone = () => {
    (phone.value !== '' && phone.valid) ? setCheckPhone(false) : setCheckPhone(true) 
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
        error={checkLast}
        helperText={checkLast && "Ingresa información válida."}
        value={lastName.value}
        onChange={handleLastChange}
        onBlur={handleBlurLast}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        error={checkPhone}
        helperText={checkPhone && "Ingresa número de 10 dígitos XXXX XX XX XX."}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={phone.value}
        onChange={handlePhoneChange}
        onBlur={handleBlurPhone}
      />
      <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
