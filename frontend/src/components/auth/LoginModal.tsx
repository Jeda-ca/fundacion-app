import { useState, useEffect } from 'react'
import logo from '../../assets/atmaV2SinFondo.png'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => { // Cerrar modal con tecla ESC
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

/*1. Limpiar cuando se cierra el modal (seguridad)
useEffect(() => {
  if (!isOpen) {
    setUsername('')
    setPassword('')
    setShowPassword(false)
  }
}, [isOpen])

2. También limpiar después de login exitoso
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    // Aquí irá tu lógica de autenticación
    // await authenticateUser(username, password)
    
    console.log('Login attempt:', { username, password })
    
    // Limpiar campos
    setUsername('')
    setPassword('')
    setShowPassword(false)
    
    // Cerrar modal
    onClose()
    
    // Redirigir al dashboard o hacer lo que necesites
  } catch (error) {
    console.error('Login failed:', error)
    // Aquí puedes mostrar un mensaje de error
    // No limpies los campos si el login falla para que el usuario pueda corregir
  }
}*/

  useEffect(() => { // Limpiar campos cuando el modal se cierra
    if (!isOpen) {
      setUsername('')
      setPassword('')
      setShowPassword(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log('Login attempt:', { username, password })
  /*
  Placeholder para la Lógica de autenticación con username y password
  */
}

  return (
    <>
      <div 
        className="fixed inset-0 bg-gray-900/60 backdrop-blur-md z-50 transition-all duration-300"
        onClick={onClose}
      />
      
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden animate-scale-in max-h-[95vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-1 md:grid-cols-5">
            
            {/* Lado izquierdo */}
            <div className="md:col-span-2 bg-gradient-to-br from-pink-300 via-pink-600 to-orange-500 text-white p-6 md:p-10 lg:p-14 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
              
              <div className="relative z-10 space-y-4 md:space-y-8">
                <div className="size-14 md:size-20">
                  <img src={logo} alt="Fundación Atma Namasté" className="w-full h-full object-contain drop-shadow-lg" />
                </div>

                <div className="space-y-2 md:space-y-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                    Sistema de Gestión
                  </h2>
                  <p className="text-base md:text-xl lg:text-2xl font-semibold text-pink-100">
                    Fundación Atma Namasté
                  </p>
                  <p className="hidden md:block text-pink-100/90 text-sm lg:text-base leading-relaxed">
                    Plataforma administrativa para la gestión integral de programas, beneficiarios y recursos de la fundación.
                  </p>
                </div>

                <ul className="hidden md:flex flex-col space-y-4">
                  {[
                    { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", text: "Acceso seguro y encriptado" },
                    { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", text: "Reportes y análisis en tiempo real" },
                    { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", text: "Gestión de beneficiarios" },
                    { icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4", text: "Control de recursos y donaciones" }
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm lg:text-base">
                      <div className="size-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20">
                        <svg className="size-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                        </svg>
                      </div>
                      <span className="text-white/95">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden md:block relative z-10 pt-8 border-t border-white/20">
                <p className="text-sm text-pink-100/80">Valledupar, Colombia • 2025</p>
              </div>
            </div>

            {/* Formulario */}
            <div className="md:col-span-3 p-6 md:p-10 lg:p-14 relative bg-gray-50">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-gray-200/50 hover:bg-gray-300/50 text-gray-500 hover:text-gray-700 transition-all duration-200"
                aria-label="Cerrar"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col justify-center h-full max-w-md mx-auto">
                <div className="space-y-4 md:space-y-8">
                  <div className="space-y-1 md:space-y-2">
                    <h3 className="text-xl md:text-3xl font-bold text-gray-900">Iniciar sesión</h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      Sistema exclusivo para personal autorizado de la Fundación Atma Namasté
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3 md:space-y-6">
                    <div className="space-y-1 md:space-y-2">
                      <label htmlFor="username" className="block text-xs md:text-sm font-semibold text-gray-700">
                        Usuario
                      </label>

                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                          <svg className="size-4 md:size-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-sm md:text-base text-gray-900 placeholder:text-gray-400"
                          placeholder="Nombre de usuario"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1 md:space-y-2">
                      <label htmlFor="password" className="block text-xs md:text-sm font-semibold text-gray-700">
                        Contraseña
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 md:pl-4 flex items-center pointer-events-none">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-10 md:pl-12 pr-10 md:pr-12 py-2.5 md:py-3.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-sm md:text-base text-gray-900 placeholder:text-gray-400 [&::-ms-reveal]:hidden [&::-webkit-credentials-auto-fill-button]:hidden"
                          placeholder="••••••••••"
                          required
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 md:pr-4 flex items-center text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? (
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          )}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white py-2.5 md:py-3.5 rounded-xl font-semibold hover:from-pink-700 hover:to-pink-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base"
                    >
                      Acceder al sistema
                    </button>
                  </form>

                  <div className="text-center text-xs md:text-sm pt-2">
                    <a href="#" className="text-pink-600 hover:text-pink-700 font-medium transition-colors">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
