import { useState } from 'react'
import fondo from '../../common/assets/images/fondo.webp'
import logo from '../../common/assets/images/logo.webp'
import DataConnection from '../../common/components/forms/DataConnection/DataConnection';
import RegisterForm from '../../common/components/forms/Register';
const Register = () => {
    const [passwordVisibility, setPasswordVisibility] = useState({ password: false, passwordConfirm: false });
    // Función que alterna la visibilidad de los campos de contraseña
    const toggleVisibility = field => setPasswordVisibility((prev) => ({ ...prev, [field]: !prev[field] }));
    // Determina el tipo de campo según la visibilidad
    const getPasswordType = field => (passwordVisibility[field] ? 'text' : 'password');

    const handleSubmit = async dataToSend => {
        try {
            console.log('dataToSend ', dataToSend)
            // Aquí pasamos los datos recibidos del formulario a la función createAdmin
            /* const response = await createAdmin(dataToSend); */
        } catch (error) {
            console.log(error);
            console.error('Error submitting form:', error);
        }
    };
    return (
        <div className="h-full bg-[#264653]">
            <div className="flex justify-center h-full">
                <div className="flex opacity-75 bg-blend-luminosity items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <img src={logo} alt="Logo de StockSnap" className="mx-auto mb-4 object-contain" style={{ width: "150px" }} />
                            <hr />
                            <h2 className="text-4xl mt-3 text-[#E9C46A] dark:text-white">
                                Registra tu cuenta
                            </h2>
                        </div>
                        <div className="mt-6">
                            <RegisterForm onSubmit={handleSubmit} passwordType={getPasswordType('password')} passwordConfirmType={getPasswordType('passwordConfirm')} showPassword={passwordVisibility.password} showPasswordConfirm={passwordVisibility.passwordConfirm} toggleShowPasswordField={toggleVisibility} />
                            <DataConnection pathTitle={'login'} title={'Inicia sesión'} text={'¿Ya tienes cuenta?'} />
                        </div>
                    </div>
                </div>
                <div className="hidden bg-cover opacity-75 bg-blend-luminosity lg:block lg:w-2/3" style={{ backgroundImage: `url('${fondo}')` }}        >
                    <div className="flex items-center h-full px-20 bg-opacity-40">
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

export default Register