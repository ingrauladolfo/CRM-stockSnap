import React from 'react'
import RouteTitleHandler from './RouteTitleHandler'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login, Register, ForgotPassword, Dashboard, DashboardHome, NotFound } from '../../pages'
import ProtectedRoutes from './ProtectedRoutes'

const MainRoutes = () => {
    return (
        <>
            <RouteTitleHandler />
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route element={<ProtectedRoutes />}>
                    <Route path="/dashboard/*" element={<Dashboard />}>
                        <Route index element={<Navigate to="home" replace />} />
                        <Route path="home" element={<DashboardHome />} />
                        {/* <Route path="account" element={<DashboardAccount />} /> */}
                    </Route>
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default MainRoutes