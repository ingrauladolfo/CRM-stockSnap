const validationForm = (validations, setErrors, fields, PASSWORD_REGEX) => {
  const newErrors = {};
  Object.keys(validations).forEach(field => {
    if (fields[field] !== undefined) {
      const error = validations[field](fields[field], PASSWORD_REGEX);
      if (error){ newErrors[field] = error;}
    }
  });
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
}
export default validationForm