// src/components/ProtectedRoutes.jsx
import { useLocation, Outlet, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Alert from '../components/Alert'

const ProtectedRoutes = () => {
    const isAuthenticated = true;
    const location = useLocation()
    const navigate = useNavigate()
    const [showAlert, setShowAlert] = useState(false)
    useEffect(() => { if (!isAuthenticated) { setShowAlert(true) } }, [isAuthenticated])
    const handleConfirm = () => {
        setShowAlert(false)
        navigate('/login', { state: { from: location }, replace: true })
    }

    if (!isAuthenticated) {
        return (
            <Alert
                show={showAlert}
                title="Sin permisos"
                text="Primero autentícate antes de continuar"
                icon="warning"
                showCancelButton={false}
                confirmButtonText="Ir a login"
                onConfirm={handleConfirm}
            />
        )
    }

    return <Outlet />
}

export default ProtectedRoutes
