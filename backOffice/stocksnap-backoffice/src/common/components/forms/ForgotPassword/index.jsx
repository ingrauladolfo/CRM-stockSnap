import { useEffect, useRef, useState } from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { errorForm, validationEmail, validationForm } from '../../../utils';
import Alert from '../../Alert';

const ForgotPasswordForm = ({ onSubmit }) => {
    const [correo, setCorreo] = useState('');
    const [errors, setErrors] = useState({});
    const [showAlert, setShowAlert] = useState(false);
    const timeoutRef = useRef(null);
    useEffect(() => { return () => { if (timeoutRef.current) { clearTimeout(timeoutRef.current); } }; }, []);
    const validations = { correo: validationEmail };
    const fields = { correo };
    const sendData = () => {
        if (!validationForm(validations, setErrors, fields)) {
            if (timeoutRef.current) { clearTimeout(timeoutRef.current); }
            timeoutRef.current = setTimeout(() => { setShowAlert(true); }, 50);
            return;
        }
        onSubmit({ correo });
    };
    const hasError = errorForm(errors)
    return (
        <div className="relative col-span-1 lg:col-span-2 ">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Correo electrónico
                </label>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-5 text-gray-600">
                        <FaEnvelope color='#EDF2E4' />
                    </span>
                    <input type="email" name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="correo@correo.com" className={`block w-full pl-10 pr-4 py-2 mt-2 font-bold text-[#EDF2E4] placeholder-[#EDF2E4] bg-[#264653] rounded-full focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 border-2 border-[#E9C46A] ${errors.correo ? 'border-red-500' : ''}`} />
                </div>
                {errors.correo && (
                    <p className="text-red-500 text-sm mt-2 mb-4">
                        {errors.correo}
                    </p>
                )}
            </div>
            <div className="mt-3 col-span-1 lg:col-span-2 flex flex-col items-center">
                <input type="submit" onClick={sendData} className={`w-full px-4 py-2 tracking-wide border-[#5855D6] hover:border-[#d9d9d9] text-white transition-colors duration-200 transform bg-transparent rounded-full border-4 ${hasError ? 'hover:bg-[#EF4444]' : 'hover:bg-[#E9C46A]'} focus:outline-none focus:bg-[#d9d9d9] focus:ring focus:ring-blue-300 focus:ring-opacity-50`} value="Iniciar sesión" style={{ border: hasError ? "5px solid #EF4444" : "5px solid #E9C46A" }} />
            </div>
            {hasError && (
                <p className="text-red-500 text-sm mb-4">
                    Por favor, corrige los errores marcados arriba.
                </p>
            )}
            <Alert show={showAlert} title="Error de validación" text={correo === '' ? "Por favor complete todos los campos requeridos" : `<div style="text-align: center;">${[errors.correo].filter(error => error).join('<br/>')}</div>`} icon="error" onConfirm={() => setShowAlert(false)} onClose={() => setShowAlert(false)} confirmButtonText="Aceptar" showClass={{ popup: `animate__animated animate__headShake animate__faster` }} hideClass={{ popup: `animate__animated animate__fadeOutUp animate__faster` }} />
        </div>
    )
}

export default ForgotPasswordForm