import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoginFormPropTypes } from '@/types';

const LoginForm = ({
  passwordType,
  showPassword,
  toggleShowPasswordField,
  icons,
}) => {
  return (
    <form >
      <div className="relative col-span-1 lg:col-span-2">
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
        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <label
              htmlFor="password"
              className="text-sm text-gray-600 dark:text-gray-200"
            >
              Contraseña
            </label>
            <a
              href="/forgot-password"
              className="text-[#E9C46A] focus:outline-none focus:underline hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </a>
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
        <div className="col-span-1 lg:col-span-2 flex justify-center">
          <div className="flex items-center mt-4">
            <label className="inline-flex items-center text-gray-500 dark:text-gray-300">
              <input
                type="checkbox"
                id="rememberUser"
                className="form-checkbox h-5 w-5 text-[#E9C46A]"
              />
              <span className="ml-2 text-[#E9C46A]">Recordar usuario y contraseña</span>
            </label>
          </div>
        </div>
        <div className="mt-6 col-span-1 lg:col-span-2 flex justify-center">
          <input
            type="submit"
            className="w-full px-4 py-2 tracking-wide border-[#5855D6] hover:border-[#d9d9d9] text-white transition-colors duration-200 transform bg-transparent rounded-full border-[5px] hover:bg-[#E9C46A] focus:outline-none focus:bg-[#d9d9d9] focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            value="Iniciar sesión"
            style={{ border: "5px solid #E9C46A" }}
          />
        </div>
      </div>
    </form>
  );
};
LoginForm.propTypes = LoginFormPropTypes;

export default LoginForm;
