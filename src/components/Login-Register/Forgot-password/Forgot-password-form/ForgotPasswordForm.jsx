import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { ForgotPasswordFormPropTypes } from '@/types';

const ForgotPasswordForm = ({ icons }) => {
    return (
        <div className="relative col-span-1 lg:col-span-2 overflow-y-auto">
            {/* Mensaje antes del formulario */}
            <div className="mb-4 text-center">
                <p className="text-lg text-gray-600 dark:text-gray-200">
                    Por favor ingresa tu correo para restablecer tu contraseña
                </p>
            </div>
            <form action="">
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
                <div className="mt-6 col-span-1 lg:col-span-2 flex justify-center">
                    <input
                        type="submit"
                        className="w-full px-4 py-2 tracking-wide border-[#5855D6] hover:border-[#d9d9d9] text-white transition-colors duration-200 transform bg-transparent rounded-full border-[5px] hover:bg-[#E9C46A] focus:outline-none focus:bg-[#d9d9d9] focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                        value="Mandar código"
                        style={{ border: "5px solid #E9C46A" }}
                    />
                </div>
            </form>
        </div>
    )
}
ForgotPasswordForm.propTypes = ForgotPasswordFormPropTypes;

export default ForgotPasswordForm