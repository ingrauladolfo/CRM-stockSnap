import { useState, useEffect, useRef } from "react";
import useSidebar from "../../hooks/useSidebar";
import { IoMdMenu, IoMdPerson } from "react-icons/io";
import Sidebar from "../Sidebar";
import logo from '../../assets/images/logo.webp'
import axios from "axios";
import { FaEnvelope, FaUser } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { IoCloudOffline } from "react-icons/io5";
const Navbar = () => {
    const { sidebarOpen, toggleSidebar, closeSidebar } = useSidebar();
    const [openUserMenu, setOpenUserMenu] = useState(false);
    const [user, setUser] = useState({ name: 'Juan Pérez', email: 'juan.perez@example.com' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const userMenuRef = useRef(null);
    const fetchUser = async ({ setUser, setError, setLoading }) => {
        try {
            const res = await axios.get('/api/user');
            if (!res.ok) { throw new Error('Fetch error'); }
            const data = await res.json();
            if (data.name && data.email) {
                setUser(data);
                setError(error => error);
            } else throw new Error('Datos incompletos');
        } catch (err) {
            console.warn('API user failed, using dummy data', err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };
    const fetchedRef = useRef(false);
    const sidebarRef = useRef(sidebarOpen);
    const menuRef = useRef(openUserMenu);
    sidebarRef.current = sidebarOpen;
    menuRef.current = openUserMenu;

    useEffect(() => {
        // solo una vez
        if (!fetchedRef.current) {
            fetchUser({ setUser, setError, setLoading });
            fetchedRef.current = true;
        }

        const onKey = e => {
            if (e.key === 'Escape') {
                if (sidebarRef.current) { closeSidebar(); }
                if (menuRef.current) { setOpenUserMenu(false); }
            }
        };
        const onClick = e => { if (userMenuRef.current && !userMenuRef.current.contains(e.target)) { setOpenUserMenu(false); } };

        document.addEventListener('keydown', onKey);
        document.addEventListener('click', onClick);
        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('click', onClick);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleLogout = () => { console.log('Cerrando sesión') }

    return (
        <header className="w-full bg-[#264653] text-sm text-white shadow-md fixed top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Izquierda: sidebar toggle y logo */}
                <div className="flex items-center space-x-4">
                    <button onClick={toggleSidebar} className="text-white focus:outline-none">
                        <IoMdMenu size={20} />
                    </button>
                </div>
                <img src={logo} alt="Logo" className="h-8 w-auto" />

                {/* Derecha: user dropdown */}
                <div className="relative" ref={userMenuRef}>
                    <button onClick={() => setOpenUserMenu(prev => !prev)} className="flex items-center text-white focus:outline-none" disabled={loading}>
                        <IoMdPerson size={20} />
                    </button>

                    {openUserMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-[#264653] text-white rounded-md shadow-lg z-50">
                            {loading ? (
                                <div className="px-4 py-2 text-sm">Cargando...</div>
                            ) : (
                                <>
                                    {error && (
                                        <div className="px-4 py-1 text-xs text-red-500 flex items-center">
                                            <IoCloudOffline className="mr-2" size={16} />
                                            Offline: usando datos dummy
                                        </div>
                                    )}
                                    <div className="px-4 py-2">
                                        <p className="font-medium truncate flex items-center">
                                            <FaUser className="mr-2" size={16} />
                                            {user.name}
                                        </p>
                                        <p className="text-xs text-amber-50 truncate flex items-center">
                                            <FaEnvelope className="mr-2" size={14} />
                                            {user.email}
                                        </p>
                                    </div>
                                    <div className="border-t" />
                                    <button onClick={() => handleLogout} className="w-full text-left px-4 py-2 hover:bg-[#E9C46A] hover:text-black flex items-center">
                                        <FaSignOutAlt className="mr-2" size={16} />
                                        Cerrar sesión
                                    </button>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <Sidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen} />
        </header>
    );
};

export default Navbar;