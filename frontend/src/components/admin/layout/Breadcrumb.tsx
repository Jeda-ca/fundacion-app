// components/admin/layout/Breadcrumb.tsx
import { Link, useLocation } from 'react-router-dom'

export const Breadcrumb = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  const breadcrumbNameMap: Record<string, string> = {
    admin: 'Administración',
    dashboard: 'Dashboard',
    beneficiarios: 'Beneficiarios',
    programas: 'Programas',
    asistencias: 'Asistencias',
    apadrinamiento: 'Apadrinamiento',
    donaciones: 'Donaciones',
    gastos: 'Gastos',
    reportes: 'Reportes',
    usuarios: 'Usuarios'
  }

  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
      <Link to="/admin/dashboard" className="hover:text-pink-600 transition-colors">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`
        const isLast = index === pathnames.length - 1
        const label = breadcrumbNameMap[value] || value

        return (
          <div key={to} className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {isLast ? (
              <span className="font-medium text-gray-900">{label}</span>
            ) : (
              <Link to={to} className="hover:text-pink-600 transition-colors">
                {label}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
