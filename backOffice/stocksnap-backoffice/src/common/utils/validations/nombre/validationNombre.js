const validationNombre = name => {
if (name === '') {
      return 'El campo nombre no debe estar vacío.';
    }
    if (name.length < 2) {
      return 'El campo nombre debe tener al menos 2 caracteres.';
    }
    return null;
}
export default validationNombre