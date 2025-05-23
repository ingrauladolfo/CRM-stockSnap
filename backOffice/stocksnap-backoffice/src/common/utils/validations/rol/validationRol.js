const validationRol = role => {
    if (!role) {
        return 'El campo rol no debe estar vacío';
    }
    return null;
}
export default validationRol