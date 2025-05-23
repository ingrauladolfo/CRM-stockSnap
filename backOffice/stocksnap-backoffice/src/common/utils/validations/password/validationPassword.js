// utils/validationPassword.js
export const validationPassword = (pass = "", PASSWORD_REGEX, passConfirm = "") => {
    // 1) ambos campos vacíos
    if (!pass && !passConfirm) { return 'Los campos "Contraseña" y "Confirmar contraseña" no deben estar vacíos'; }
    // 2) no cumple regex en alguno de los dos
    if (!PASSWORD_REGEX.test(pass) || !PASSWORD_REGEX.test(passConfirm)) { return 'La contraseña debe tener al menos 16 caracteres, incluir 2 mayúsculas, 2 minúsculas, 2 números y 2 caracteres especiales.'; }
    // 3) no coinciden
    if (pass !== passConfirm) { return 'Las contraseñas no coinciden'; }
    return null;
};

export default validationPassword;
