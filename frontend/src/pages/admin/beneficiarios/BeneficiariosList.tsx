import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AdminLayout } from '../../../components/admin/layout/AdminLayout'
import { DataTable } from '../../../components/admin/tables/DataTable'
import { Pagination } from '../../../components/admin/tables/Pagination'
import { Badge } from '../../../components/ui/Badge'
import type { Beneficiario, TipoPersona, EstadoBeneficiario } from '../../../types/admin/beneficiario'

export default function BeneficiariosList() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [tipoFilter, setTipoFilter] = useState<TipoPersona | 'TODOS'>('TODOS')
  const [estadoFilter, setEstadoFilter] = useState<EstadoBeneficiario | 'TODOS'>('TODOS')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Datos mock (reemplazar con llamada a API)
  const beneficiariosMock: Beneficiario[] = [
    {
      id: '1',
      nombreCompleto: 'María González Pérez',
      tipoDocumento: 'TI',
      numeroDocumento: '1234567890',
      fechaNacimiento: '2010-05-15',
      edad: 14,
      tipoPersona: 'MENOR',
      direccion: 'Calle 51 #32-87',
      telefono: '+57 300 123 4567',
      estado: 'ACTIVO',
      institucionEducativa: 'Colegio San José',
      gradoActual: '8vo',
      tutorNombre: 'Ana Pérez',
      programasInscritos: [{ id: '1', nombre: 'Refuerzo Escolar' }],
      fechaCreacion: '2024-01-15',
      fechaActualizacion: '2024-01-15'
    },
    {
      id: '2',
      nombreCompleto: 'Carlos Martínez López',
      tipoDocumento: 'CC',
      numeroDocumento: '9876543210',
      fechaNacimiento: '2005-08-20',
      edad: 19,
      tipoPersona: 'JOVEN_ADULTO',
      direccion: 'Carrera 10 #15-20',
      telefono: '+57 310 987 6543',
      email: 'carlos@email.com',
      estado: 'ACTIVO',
      programasInscritos: [{ id: '2', nombre: 'BESPRO' }],
      fechaCreacion: '2024-02-10',
      fechaActualizacion: '2024-02-10'
    }
  ]

  const [isLoading] = useState(false)

  // Filtrado
  const beneficiariosFiltrados = beneficiariosMock.filter((b) => {
    const matchSearch = b.nombreCompleto.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       b.numeroDocumento.includes(searchTerm)
    const matchTipo = tipoFilter === 'TODOS' || b.tipoPersona === tipoFilter
    const matchEstado = estadoFilter === 'TODOS' || b.estado === estadoFilter
    return matchSearch && matchTipo && matchEstado
  })

  const totalPages = Math.ceil(beneficiariosFiltrados.length / itemsPerPage)
  const beneficiariosPaginados = beneficiariosFiltrados.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const columns = [
    {
      key: 'foto',
      label: 'Foto',
      width: '80px',
      render: (row: Beneficiario) => (
        <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
          {row.nombreCompleto.charAt(0)}
        </div>
      )
    },
    {
      key: 'nombreCompleto',
      label: 'Nombre Completo',
      render: (row: Beneficiario) => (
        <div>
          <p className="font-medium text-gray-900">{row.nombreCompleto}</p>
          <p className="text-xs text-gray-500">{row.tipoDocumento}: {row.numeroDocumento}</p>
        </div>
      )
    },
    {
      key: 'tipoPersona',
      label: 'Tipo',
      render: (row: Beneficiario) => {
        const labels = {
          MENOR: 'Menor',
          TUTOR: 'Tutor',
          JOVEN_ADULTO: 'Joven/Adulto',
          DOCENTE: 'Docente',
          ADMINISTRATIVO: 'Admin',
          OTRO_PERSONAL: 'Otro'
        }
        return <Badge {...({ variant: 'info', size: 'sm' } as any)}>{labels[row.tipoPersona]}</Badge>
      }
    },
    {
      key: 'edad',
      label: 'Edad',
      render: (row: Beneficiario) => `${row.edad} años`
    },
    {
      key: 'programas',
      label: 'Programas',
      render: (row: Beneficiario) => (
        <div className="flex flex-wrap gap-1">
          {row.programasInscritos?.map((p) => (
            <Badge key={p.id} {...({ variant: 'default', size: 'sm' } as any)}>{p.nombre}</Badge>
          )) || '-'}
        </div>
      )
    },
    {
      key: 'estado',
      label: 'Estado',
      render: (row: Beneficiario) => (
        <Badge color={row.estado === 'ACTIVO' ? 'blue' : 'orange'} className="text-xs px-2 py-1 rounded">
          {row.estado}
        </Badge>
      )
    },
    {
      key: 'acciones',
      label: 'Acciones',
      width: '120px',
      render: (row: Beneficiario) => (
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigate(`/admin/beneficiarios/${row.id}`)
            }}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            Ver
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigate(`/admin/beneficiarios/editar/${row.id}`)
            }}
            className="text-pink-600 hover:text-pink-800 font-medium text-sm"
          >
            Editar
          </button>
        </div>
      )
    }
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Beneficiarios</h1>
            <p className="text-gray-600 mt-2">Gestión de personas y beneficiarios del sistema</p>
          </div>
          <Link
            to="/admin/beneficiarios/nuevo"
            className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Registrar Beneficiario
          </Link>
        </div>

        {/* Filtros */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Buscar
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Nombre o documento..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Persona
              </label>
              <select
                value={tipoFilter}
                onChange={(e) => setTipoFilter(e.target.value as any)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="TODOS">Todos</option>
                <option value="MENOR">Menores</option>
                <option value="TUTOR">Tutores</option>
                <option value="JOVEN_ADULTO">Jóvenes/Adultos</option>
                <option value="DOCENTE">Docentes</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estado
              </label>
              <select
                value={estadoFilter}
                onChange={(e) => setEstadoFilter(e.target.value as any)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="TODOS">Todos</option>
                <option value="ACTIVO">Activos</option>
                <option value="INACTIVO">Inactivos</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tabla */}
        <DataTable
          columns={columns}
          data={beneficiariosPaginados}
          onRowClick={(row) => navigate(`/admin/beneficiarios/${row.id}`)}
          isLoading={isLoading}
          emptyMessage="No se encontraron beneficiarios"
        />

        {/* Paginación */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalItems={beneficiariosFiltrados.length}
            itemsPerPage={itemsPerPage}
          />
        )}
      </div>
    </AdminLayout>
  )
}
