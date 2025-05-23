import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <section className="bg-[#264653] h-screen flex">
            <div className="m-auto text-center p-6 bg-transparent bg-opacity-50 rounded-2xl shadow-2xl">
                <div className="inline-block transform hover:scale-105 transition duration-500 animate-bounce">
                    <svg width={200} height={120} viewBox="0 0 631 379" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="url(#gradient)" fontSize="96" fontWeight="bold">
                            404
                        </text>
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#FACC15" />
                                <stop offset="100%" stopColor="#DC2626" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-white animate-pulse">
                    ¡Ups! Página no encontrada
                </h1>

                <p className="mt-4 text-yellow-300 text-base md:text-lg">
                    Lo siento, no existe la ruta que buscas.
                </p>
                <div className="mt-3 col-span-1 lg:col-span-2 flex flex-col items-center">
                    <button type="submit" onClick={() => navigate(-1)} className={`inline-block mt-6 px-6 py-3 tracking-wide border-[#E9C46A] hover:border-[#EF4444] text-white transition-colors duration-300 transform hover:-translate-y-1 rounded-full shadow-lg border-4 bg-[#E9C46A] hover:bg-[#EF4444] hover:shadow-2xl focus:outline-none focus:bg-[#d9d9d9] focus:ring focus:ring-[#E9C46A] focus:ring-opacity-50`}>
                        Volver atrás
                    </button>
                </div>

            </div>
        </section>
    );
}
