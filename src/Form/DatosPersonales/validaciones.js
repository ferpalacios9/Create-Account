export const validarName = (nombre) => {
    console.log(nombre);
    const length = nombre.length;
    return (length >= 2 && length <= 30) ? true : false
};

export const validarLastName = (apellidos) => {
    console.log(apellidos);
    const length = apellidos.length;
    return (length > 1 && length < 50) ? true : false
};

export const validarPhone = (telefono) => {
    console.log(telefono);
    const length = telefono.length;
    return (length >= 8 && length <= 14) ? true : false
};