import { useState, type FormEvent } from 'react';
// Importamos el logo usando la ruta relativa desde 'src/components/'
import logo from '../assets/LogoMejoradoSinFondo.png';

// Props que el componente espera recibir.
// Solo necesita saber cómo "cerrarse" a sí mismo.
interface LoginModalProps {
    onClose: () => void;
}

// Usamos 'export default' para que sea fácil de importar
export default function LoginModal({ onClose }: LoginModalProps) {
    // --- Estados Internos ---
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // --- Manejador del Formulario ---
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault(); // Evita que la página se recargue
        setError(''); // Limpia errores anteriores

        // Validación simple (solo UI)
        if (!username || !password) {
        setError('Todos los campos son obligatorios.');
        return;
        }

        // Aquí irá la lógica de conexión con la API (axios)
        console.log('Login attempt with:', { username, password });

        // Simulación (luego la reemplazarás con la lógica de la API)
        // if (loginFallido) {
        //   setError('Usuario o contraseña incorrectos.');
        // } else {
        //   onClose(); // Cierra el modal si el login es exitoso
        // }
    };

    // --- Renderizado del Componente ---
    return (
        // 1. Overlay (Fondo oscuro)
        <div
        className="fixed inset-0 bg-black bg-opacity-70 z-40 flex justify-center items-center p-4"
        onClick={onClose} // Cierra el modal al hacer clic en el fondo
        >
        {/* 2. Contenedor del Modal (Caja blanca) */}
        <div
            className="relative bg-white p-8 pt-10 rounded-xl shadow-2xl w-full max-w-sm z-50"
            onClick={(e) => e.stopPropagation()} // Evita que el clic DENTRO del modal lo cierre
        >
            {/* 3. Botón de Cerrar (X) */}
            <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-pink-500 transition-colors"
            aria-label="Cerrar modal"
            >
            {/* SVG en línea para 'X' (patrón de NavBar.tsx) */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            </button>

            {/* 4. Logo (Superior y centrado) */}
            <img
            src={logo}
            alt="Logo Fundación Atma Namasté"
            className="w-28 h-auto mx-auto mb-5" // mx-auto lo centra
            />

            {/* 5. Título */}
            <h2 className="text-2xl font-bold text-center text-pink-700 mb-6">
            Gestión Administrativa
            </h2>

            {/* 6. Formulario */}
            <form onSubmit={handleSubmit} className="space-y-5">
            {/* Mensaje de Error (si existe) */}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm" role="alert">
                {error}
                </div>
            )}

            {/* Campo de Usuario */}
            <div>
                <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-1"
                >
                Usuario
                </label>
                <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    {/* SVG en línea para 'usuario' (patrón de NavBar.tsx) */}
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                </span>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-orange-400 focus:border-orange-400"
                    placeholder="nombre.apellido"
                    autoComplete="username"
                />
                </div>
            </div>

            {/* Campo de Contraseña */}
            <div>
                <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
                >
                Contraseña
                </label>
                <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    {/* SVG en línea para 'candado' */}
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                </span>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-orange-400 focus:border-orange-400"
                    placeholder="••••••••"
                    autoComplete="current-password"
                />
                </div>
                {/* Opcional: Enlace para 'olvidé contraseña' */}
                <div className="text-right mt-1">
                <a href="#" className="text-sm text-pink-600 hover:text-pink-800 transition-colors">
                    ¿Olvidaste tu contraseña?
                </a>
                </div>
            </div>

            {/* 7. Botón de Ingresar */}
            <button
                type="submit"
                className="w-full bg-orange-400/80 text-white font-bold py-3 px-4 rounded-lg hover:bg-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
            >
                Ingresar
            </button>
            </form>
        </div>
        </div>
    );
}
