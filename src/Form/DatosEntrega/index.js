import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarAddress, validarCity, validarProvince } from "./validaciones";

const DatosEntrega = ({ updateStep }) => {
  const [address, setAddress] = useState({ value: '', valid: null })
  const [city, setCity] = useState({ value: '', valid: null })
  const [province, setProvince] = useState({ value: '', valid: null })
  const [checkAddress, setCheckAddress] = useState(false)
  const [checkCity, setCheckCity] = useState(false)
  const [checkProvince, setCheckProvince] = useState(false)

  const handleAddressChange = (input) => {
    const newAddress = input.target.value;
    const validate = validarAddress(newAddress);
    setAddress({ value: newAddress, valid: validate });
  }

  const handleBlurAddress = () => {
    (address.value !== '' && address.valid) ? setCheckAddress(false) : setCheckAddress(true)
  }

  const handleCityChange = (input) => {
    const newCity = input.target.value;
    const validate = validarCity(newCity);
    setCity({ value: newCity, valid: validate });
  }

  const handleBlurCity = () => {
    (city.value !== '' && city.valid) ? setCheckCity(false) : setCheckCity(true)
  }

  const handleProvinceChange = (input) => {
    const newProvince = input.target.value;
    const validate = validarProvince(newProvince);
    setProvince({ value: newProvince, valid: validate });
  }

  const handleBlurProvince = () => {
    (province.value !== '' && province.valid) ? setCheckProvince(false) : setCheckProvince(true)
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
        if (address.valid === true) {
          e.preventDefault();
          updateStep(3)
        }
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={checkAddress}
        helperText={checkAddress && "Ingresa una dirección válida."}
        value={address.value}
        onChange={handleAddressChange}
        onBlur={handleBlurAddress}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={checkCity}
        helperText={checkCity && "Ingresa una Ciudad válida."}
        value={city.value}
        onChange={handleCityChange}
        onBlur={handleBlurCity}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        error={checkProvince}
        helperText={checkProvince && "Ingresa un Estado válido."}
        value={province.value}
        onChange={handleProvinceChange}
        onBlur={handleBlurProvince}
      />
      <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
