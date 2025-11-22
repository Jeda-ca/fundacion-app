import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '../pages/admin/Dashboard'
import BeneficiariosList from '../pages/admin/beneficiarios/BeneficiariosList'

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="beneficiarios" element={<BeneficiariosList />} />
      
      {/* Aquí irás agregando más rutas conforme crees páginas */}
      {/* <Route path="beneficiarios" element={<BeneficiariosList />} /> */}
      
      {/* Si van a /admin sin más, redirige al dashboard */}
      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
      
      {/* Si van a /admin/algo-inexistente, redirige al dashboard */}
      <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
    </Routes>
  )
}
