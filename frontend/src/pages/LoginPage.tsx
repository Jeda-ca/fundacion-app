// src/pages/LoginPage.tsx
import { useState, type FormEvent, useEffect } from 'react';
import logo from '../assets/LogoMejoradoRedondeado.png';

export default function LoginPage() {
  // Estados del formulario
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // ✅ Auto-focus en el campo de usuario al cargar la página
    useEffect(() => {
        const usernameInput = document.getElementById('username');
        if (usernameInput) {
        usernameInput.focus();
        }
    }, []);

    // ✅ Cerrar con tecla ESC (vuelve a la pestaña anterior)
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            window.close(); // Cierra la pestaña
        }
        };

        document.addEventListener('keydown', handleEscKey);
        return () => document.removeEventListener('keydown', handleEscKey);
    }, []);

    // Manejador del formulario
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setError('');
        setIsLoading(true);

        // Validación simple
        if (!username || !password) {
        setError('Todos los campos son obligatorios.');
        setIsLoading(false);
        return;
        }

        if (username.length < 3) {
        setError('El usuario debe tener al menos 3 caracteres.');
        setIsLoading(false);
        return;
        }

        if (password.length < 6) {
        setError('La contraseña debe tener al menos 6 caracteres.');
        setIsLoading(false);
        return;
        }

        // ✅ Simulación de login (aquí irá la conexión con la API)
        try {
        console.log('Login attempt with:', { username, password });
        
        // Simulación de delay de red
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // ✅ Aquí irá la lógica de conexión con la API del backend
        // const response = await axios.post('http://localhost:4000/api/auth/login', {
        //   username,
        //   password
        // });
        
        // ✅ Por ahora, simulamos login exitoso
        alert('¡Login exitoso! Aquí se abrirá el dashboard administrativo');
        
        } catch (err) {
        setError('Error de conexión. Intenta nuevamente.');
        } finally {
        setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* ✅ Panel izquierdo: Información de la fundación */}
            <div className="hidden lg:block">
            <div className="relative h-full rounded-3xl bg-gradient-to-br from-pink-600 to-orange-500 text-white p-12 overflow-hidden shadow-2xl">
                {/* Elementos decorativos de fondo */}
                <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
                
                <div className="relative z-10">
                {/* Logo grande */}
                <div className="mb-8">
                    <img
                    src={logo}
                    alt="Fundación Atma Namasté"
                    className="h-20 drop-shadow-lg"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                </div>
                
                <h1 className="text-4xl font-bold leading-tight mb-6">
                    Sistema de Gestión
                    <span className="block text-orange-100">Fundación Atma Namasté</span>
                </h1>
                
                <p className="text-xl text-pink-50 mb-8 leading-relaxed">
                    Plataforma administrativa para la gestión integral de programas, 
                    beneficiarios y recursos de la fundación.
                </p>
                
                <div className="space-y-4 text-pink-50">
                    <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                    <span>Acceso seguro para Administradores y Docentes</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                    <span>Gestión de asistencias y reportes</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                    <span>Control de recursos y donaciones</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                    <span>Dashboard responsivo y moderno</span>
                    </div>
                </div>
                
                <div className="mt-12 text-sm text-pink-100">
                    <p>Valledupar, Colombia • {new Date().getFullYear()}</p>
                </div>
                </div>
            </div>
            </div>

            {/* ✅ Panel derecho: Formulario de login */}
            <div className="w-full">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/20">
                
                {/* Header del formulario */}
                <div className="text-center mb-8">
                <div className="lg:hidden mb-6">
                    <img
                    src={logo}
                    alt="Fundación Atma Namasté"
                    className="h-16 mx-auto"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Gestión Administrativa
                </h2>
                <p className="text-gray-600">
                    Ingresa tus credenciales para acceder al sistema
                </p>
                </div>

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Mensaje de error */}
                {error && (
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg" role="alert">
                    <div className="flex">
                        <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="ml-3">
                        <p className="text-sm text-red-700">{error}</p>
                        </div>
                    </div>
                    </div>
                )}

                {/* Campo Usuario */}
                <div>
                    <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
                    Usuario
                    </label>
                    <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-sm placeholder-gray-400 transition-colors"
                        placeholder="nombre.apellido"
                        autoComplete="username"
                        disabled={isLoading}
                    />
                    </div>
                </div>

                {/* Campo Contraseña */}
                <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    Contraseña
                    </label>
                    <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 text-sm placeholder-gray-400 transition-colors"
                        placeholder="••••••••"
                        autoComplete="current-password"
                        disabled={isLoading}
                    />
                    </div>
                </div>

                {/* Opciones adicionales */}
                <div className="flex items-center justify-between">
                    <label className="flex items-center">
                    <input 
                        type="checkbox" 
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                        disabled={isLoading}
                    />
                    <span className="ml-2 text-sm text-gray-600">Recordarme</span>
                    </label>
                    <button 
                    type="button" 
                    className="text-sm text-pink-600 hover:text-pink-800 transition-colors"
                    disabled={isLoading}
                    >
                    ¿Olvidaste tu contraseña?
                    </button>
                </div>

                {/* Botón de envío */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-4 px-6 rounded-xl hover:from-pink-600 hover:to-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-400/50 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {isLoading ? (
                    <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Verificando...
                    </span>
                    ) : (
                    'Ingresar al Sistema'
                    )}
                </button>
                </form>

                {/* Footer */}
                <div className="mt-8 text-center">
                <p className="text-xs text-gray-500">
                    Sistema exclusivo para personal autorizado de la Fundación Atma Namasté
                </p>
                <p className="text-xs text-gray-400 mt-2">
                    Presiona <kbd className="px-1 py-0.5 bg-gray-100 rounded text-gray-700">ESC</kbd> para cerrar
                </p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}