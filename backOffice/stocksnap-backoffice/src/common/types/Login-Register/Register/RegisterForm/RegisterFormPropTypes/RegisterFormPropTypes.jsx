// RegisterFormPropTypes.js
import PropTypes from "prop-types";

const RegisterFormPropTypes = {
    toggleShowPasswordField: PropTypes.func,
    showPassword: PropTypes.bool,
    showPasswordConfirm: PropTypes.bool,
    passwordType: PropTypes.string,
    passwordConfirmType: PropTypes.string,
    icons: PropTypes.array,
};

export default RegisterFormPropTypes;
