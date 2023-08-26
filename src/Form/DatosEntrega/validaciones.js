export const validarAddress = (address) => {
    const length = address.length;
    return (length >= 5 && length <= 30) ? true : false
};

export const validarCity = (city) => {
    const length = city.length;
    return (length >= 4 && length <= 25) ? true : false
};

export const validarProvince = (province) => {
    const length = province.length;
    return (length >= 4 && length <= 25) ? true : false
};