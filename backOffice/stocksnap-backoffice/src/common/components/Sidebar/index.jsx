import { FaChevronRight, FaX, } from 'react-icons/fa6';
import sidebarLinksData from '../../assets/data/dataLinksSidebar';
import { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ sidebarOpen, closeSidebar, handleLogout }) => {
    const [activeMenu, setActiveMenu] = useState([]);
    const handleMenuMouseEnter = (item, level) => {
        if (activeMenu[level] !== item.title) { setActiveMenu([...activeMenu.slice(0, level), item.title]); }
    };
    const handleMenuMouseLeave = level => { setActiveMenu(activeMenu.filter((_, idx) => idx < level)); };
    const renderLinks = (links, level = 0) => (
        <ul className="space-y-4">
            {links.map((item, idx) => (
                <li key={idx} className={item.children ? 'relative group' : ''} onMouseEnter={() => item.children && handleMenuMouseEnter(item, level)} onMouseLeave={() => item.children && handleMenuMouseLeave(level)}>
                    <div className="flex items-center gap-2">
                        {item.icon}
                        <a href={item.href} className={`text-left flex-1 hover:font-semibold hover:text-[#E9C46A] transition ${activeMenu[level] === item.title ? 'font-semibold text-[#E9C46A]' : ''}`} onClick={closeSidebar}>
                            {item.title}
                        </a>
                        {item.children && (
                            <span className="ml-auto">
                                <FaChevronRight />
                            </span>
                        )}
                    </div>
                    {item.children && activeMenu[level] === item.title && (
                        <div className="absolute top-0 left-full w-64 bg-[#264653] text-white p-4 space-y-4 shadow-lg">
                            {renderLinks(item.children, level + 1)}
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );

    if (!sidebarOpen) return null;

    return (
        <aside className="absolute top-0 left-0 w-64 h-screen bg-[#264653] text-white p-4 z-50 shadow-lg flex flex-col">
            <button onClick={closeSidebar} className="mb-4 text-white">
                <FaX />
            </button>
            {renderLinks(sidebarLinksData)}
            <div className="mt-auto">
                <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 flex items-center text-white hover:bg-[#E9C46A] hover:text-black"
                >
                    <FaSignOutAlt className="mr-2" size={16} />
                    Cerrar sesión
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;