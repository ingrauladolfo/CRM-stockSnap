import React from 'react'
import fondo from "@/assets/images/fondo.webp";
import logo from "@/assets/images/logo.webp";
import { DataConnection, ForgotPasswordForm } from "../../../components/Login-Register";
import LoginIcons from '../../../assets/data/icons/Login-Register/icons';
const ForgotPassword = () => {
    return (
        <div className="h-full bg-[#264653]">
            <div className="flex justify-center lg:h-screen h-full">
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6 bg-opacity-75 bg-blend-luminosity">
                    <div className="lg:mt-0 mt-2 flex-1">
                        <div className="text-center">
                            <img
                                src={logo}
                                alt="Logo de StockSnap"
                                className="mx-auto mb-4 object-contain"
                                style={{ width: "150px" }}
                            />
                            <hr />
                            <h2 className="text-4xl mt-3 text-[#E9C46A] dark:text-white">
                                Recupera tu cuenta
                            </h2>
                        </div>
                        <div className="mt-6">
                            <ForgotPasswordForm icons={LoginIcons} />
                            <DataConnection text='¿Ya recordaste tu contraseña? ¡Regresa a iniciar sesión!' showGoBack={true} /></div>
                    </div>
                </div>
                <div
                    className="hidden bg-cover opacity-75 bg-blend-luminosity lg:block lg:w-2/3 left"
                    style={{
                        backgroundImage: `url(${fondo})`,
                    }}
                >
                    <div className="flex items-center h-full px-20 bg-[#264653] bg-opacity-40">
                        <div>
                            <h1 className="text-4xl font-extrabold text-white">
                                ¡Bienvenido a StockSnap!
                            </h1>
                            <h2 className="text-3xl max-w-xl font-semibold mt-3 text-white">
                                Solución que facilita la gestión diaria de tu negocio.
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ForgotPassword