const validationEmail = co => {
    if (co === '') { return 'El campo correo no debe de estar vacío'; }
    if (!co.includes('@')) { return 'El correo debe contener el símbolo "@"'; }
    return null;
}
export default validationEmail