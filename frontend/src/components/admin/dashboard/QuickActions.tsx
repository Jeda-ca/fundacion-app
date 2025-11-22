// components/admin/dashboard/QuickActions.tsx
import { Link } from 'react-router-dom'
import type { QuickAction } from '../../../types/admin'

const quickActions: QuickAction[] = [
  {
    label: 'Registrar Beneficiario',
    icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z',
    color: 'pink',
    path: '/admin/beneficiarios/nuevo'
  },
  {
    label: 'Tomar Asistencia',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    color: 'blue',
    path: '/admin/asistencias/tomar'
  },
  {
    label: 'Registrar Donación',
    icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7',
    color: 'orange',
    path: '/admin/donaciones/nueva'
  },
  {
    label: 'Ver Reportes',
    icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    color: 'purple',
    path: '/admin/reportes'
  }
]

export const QuickActions = () => {
  const colorClasses = {
    pink: 'bg-pink-600 hover:bg-pink-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
    orange: 'bg-orange-500 hover:bg-orange-600',
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700'
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Acciones Rápidas</h3>
      <div className="grid grid-cols-1 gap-3">
        {quickActions.map((action, index) => (
          <Link
            key={index}
            to={action.path}
            className={`${colorClasses[action.color]} text-white px-4 py-3 rounded-lg font-semibold flex items-center gap-3 transition-all hover:shadow-lg`}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
            </svg>
            <span>{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
