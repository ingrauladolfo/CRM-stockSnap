import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import RegisterFormPropTypes from '../../../../types/Login-Register/Register/RegisterForm/RegisterFormPropTypes/RegisterFormPropTypes';

const RegisterForm = ({ icons, passwordType, passwordConfirmType, showPassword, showPasswordConfirm, toggleShowPasswordField }) => {


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
            type="email"
            name="email"
            id="email"
            placeholder="correo@correo.com"
            className="block w-full pl-10 pr-4 py-2 mt-2 font-bold text-[#EDF2F4] placeholder-[#EDF2F4] bg-[#264653] rounded-full focus:border-[rgb(88,85,214)] focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-[#E9C46A]"
          />
        </div>
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
            name="password"
            id="password"
            placeholder="Tu contraseña"
            className="block w-full pl-10 pr-4 py-2 mt-2 font-bold text-[#EDF2E4] placeholder-[#EDF2E4] bg-[#264653] rounded-full focus:border-[rgb(88,85,214)] focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-[#E9C46A]"
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
      </div>
      <div className='mt-6'>
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
            id="passwordConfirm"
            placeholder="Confirma tu contraseña"
            className="block w-full pl-10 pr-4 py-2 mt-2 font-bold text-[#EDF2E4] placeholder-[#EDF2E4] bg-[#264653] rounded-full focus:border-[rgb(88,85,214)] focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-[#E9C46A]"
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
    </div>
  );
}
RegisterForm.propTypes = RegisterFormPropTypes;
export default RegisterForm;
