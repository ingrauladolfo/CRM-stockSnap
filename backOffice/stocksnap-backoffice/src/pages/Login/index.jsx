import { useState } from 'react'
import fondo from '../../common/assets/images/fondo.webp'
import logo from '../../common/assets/images/logo.webp'
import LoginForm from '../../common/components/forms/Login'
import DataConnection from '../../common/components/forms/DataConnection/DataConnection'

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState({ password: false });
  const toggleVisibility = field => setPasswordVisibility(prev => ({ ...prev, [field]: !prev[field] }));
  const getPasswordType = field => (passwordVisibility[field] ? 'text' : 'password');
  const handleSubmit = async dataToSend => {
    try {
      console.log('dataToSend ', dataToSend)
      // Aquí pasamos los datos recibidos del formulario a la función createAdmin
      /*       const response = await createAdmin(dataToSend);*/
}
    catch (error) {
      console.log(error);
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="h-full bg-[#264653]">
      <div className="flex justify-center h-screen">
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
        <div className="flex opacity-75 bg-blend-luminosity items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <img src={logo} alt="Logo de StockSnap" className="mx-auto mb-4 object-contain" style={{ width: "150px" }} />
              <hr />
              <h2 className="text-4xl mt-3 text-[#E9C46A] dark:text-white">
                Accede a tu cuenta
              </h2>
            </div>
            <div className="mt-6">
              <LoginForm showPassword={passwordVisibility.password} passwordType={getPasswordType('password')} toggleShowPasswordField={toggleVisibility} onSubmit={handleSubmit} />
              <DataConnection pathTitle={'register'} title={'Regístrate'} text={'¿Aún no tienes cuenta?'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login