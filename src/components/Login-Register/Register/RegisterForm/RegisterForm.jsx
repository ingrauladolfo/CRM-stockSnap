import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { RegisterFormPropTypes } from '@/types';

const RegisterForm = ({ onSubmit, icons, passwordType, passwordConfirmType, showPassword, showPasswordConfirm, toggleShowPasswordField }) => {
  const [correo, setCorreo] = useState('');
  const [nombre, setNombre] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [rol, setRol] = useState('');
  const [contraseniaConfirmada, setContraseniaConfirmada] = useState('');
  const [errors, setErrors] = useState({});
  const validateCorreo = (correo) => {
    if (correo === '') {
      return 'El campo correo no debe de estar vacío';
    }
    if (!correo.includes('@')) {
      return 'El correo debe contener el símbolo "@"';
    }
    return null;
  };
  const validateContrasenias = (contrasenia) => {
    if(contrasenia===''){
      return 'Este campo no puede estar vacío';

    }
    // Validación para verificar si las contraseñas coinciden
    if (contrasenia !== contraseniaConfirmada) {
      return 'Las contraseñas no coinciden';
    }
    return null;
  };
  const validateForm = () => {
    const newErrors = {};
    const correoError = validateCorreo(correo);
    if (correoError) newErrors.correo = correoError;
    const contraseniaError = validateContrasenias(contrasenia);
    if (contraseniaError) newErrors.contrasenia = contraseniaError;
    setErrors(newErrors);

    // Retorna true si no hay errores, de lo contrario false
    return Object.keys(newErrors).length === 0;
  };
  const sendData = () => {
   
    const dataToSend = {
      nombre,
      contrasenia,
      rol

    };
    if (!validateForm()) {
      // Mostrar una alerta general si hay errores
      alert('Por favor, corrige los errores en el formulario.')
      return;
    }
    // Si el modo es 'edit', incluye el id en los datos a enviar
    onSubmit(dataToSend);
  };
  return (
    <div className="relative col-span-1 lg:col-span-2 overflow-y-auto">
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
        >
          Correo electrónico
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-gray-600">
            <FontAwesomeIcon color={icons[0].color} icon={icons[0].icon} />
          </span>
          <input
          type='email'
            name="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="correo@correo.com"
            className={`block w-full pl-10 pr-4 py-2 mt-2 font-bold text-[#EDF2E4] placeholder-[#EDF2E4] bg-[#264653] rounded-full focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-[#E9C46A] ${errors.correo ? 'border-red-500' : ''}`}
          />
           
        </div>
        {
          errors.correo && (
            <p className="text-red-500 text-sm mt-2">
            {errors.correo}
            </p>
          )
        }
      </div>
      <div className='mt-6'>
        <label htmlFor="fullName" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Nombre completo
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-gray-600">
            <FontAwesomeIcon color={icons[1].color} icon={icons[1].icon} />
          </span>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Nombre completo"
            className="block w-full pl-10 pr-4 py-2 mt-2 font-bold text-[#EDF2F4] placeholder-[#EDF2F4] bg-[#264653] rounded-full focus:border-[rgb(88,85,214)] focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-[#E9C46A]"
          />
        </div>
      </div>
      <div className='mt-6'>
        <div className="flex justify-between mb-2">
          <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">
            Contraseña
          </label>
        </div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-gray-600">
            <FontAwesomeIcon color={icons[2].color} icon={icons[2].icon} />
          </span>
          <input
            type={passwordType}
            name='contrasenia'
            value={contrasenia}
            placeholder="Tu contraseña"
            onChange={(e) => setContrasenia(e.target.value)}
            className={`block w-full pl-10 pr-4 py-2 mt-2 font-bold text-[#EDF2E4] placeholder-[#EDF2E4] bg-[#264653] rounded-full focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-[#E9C46A] ${errors.contrasenia ? 'border-red-500' : ''}`}
            />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={() => toggleShowPasswordField('password')}
            aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            role="switch"
            aria-checked={showPassword}
          >
            <FontAwesomeIcon icon={showPassword ? icons[2].icon : icons[3].icon} color="#EDF2E4" />
          </button>
        </div>

        {/* Error de validación */}
        {
          errors.contrasenia && (
            <p className="text-red-500 text-sm mt-2">
            {errors.contrasenia}
            </p>
          )
        }</div>
      {/* Confirmar Contraseña */}
      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <label htmlFor="passwordConfirm" className="text-sm text-gray-600 dark:text-gray-200">
            Confirmar contraseña
          </label>
        </div>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-gray-600">
            <FontAwesomeIcon color={icons[2].color} icon={icons[2].icon} />
          </span>
          <input
            type={passwordConfirmType}
            name="passwordConfirm"
            value={contraseniaConfirmada}
            placeholder="Confirma tu contraseña"
            onChange={(e) => setContraseniaConfirmada(e.target.value)}
            className={`block w-full pl-10 pr-4 py-2 mt-2 font-bold text-[#EDF2E4] placeholder-[#EDF2E4] bg-[#264653] rounded-full focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-[#E9C46A] ${errors.contrasenia ? 'border-red-500' : ''}`}
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={() => toggleShowPasswordField('passwordConfirm')}
            aria-label={showPasswordConfirm ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            role="switch"
            aria-checked={showPasswordConfirm}
          >
            <FontAwesomeIcon icon={showPasswordConfirm ? icons[2].icon : icons[3].icon} color="#EDF2E4" />
          </button>
        </div>
      </div>

      {/* Error de validación */}
      {
        errors.contrasenia && (
          <p className="text-red-500 text-sm mt-2">
            {errors.contrasenia}
          </p>
        )
      }
      <div className='mt-6'>
        <label htmlFor="role" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Rol
        </label>
        <select
          id="role"
          name="role"
          className="block w-full pl-4 pr-4 py-2 mt-2 font-bold text-[#EDF2F4] bg-[#264653] rounded-full focus:border-[rgb(88,85,214)] focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-[#E9C46A]"
        >
          <option value="">Selecciona tu rol...</option>
          <option value="admin">Administrador</option>
          <option value="user">Usuario</option>
          <option value="guest">Invitado</option>
        </select>
      </div>
      <div className="mt-6 col-span-1 lg:col-span-2 flex justify-center">
        <button
          type="submit"
          onClick={sendData}
          className="w-full px-4 py-2 tracking-wide border-[#5855D6] hover:border-[#d9d9d9] text-white transition-colors duration-200 transform bg-transparent rounded-full border-[5px] hover:bg-[#E9C46A] focus:outline-none focus:bg-[#d9d9d9] focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          style={{ border: "5px solid #E9C46A" }}
        >
          Registrarse
        </button>
      </div>
    </div>
  );
}
RegisterForm.propTypes = RegisterFormPropTypes;
export default RegisterForm;
