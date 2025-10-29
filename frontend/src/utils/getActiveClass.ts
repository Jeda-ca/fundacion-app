export function getActiveClass(currentPath: string, linkPath: string): string {
    const baseClasses =
    "block py-2 px-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"

    const isActive = // Verifica si la ruta actual coincide con el enlace o es una subruta
    currentPath === linkPath || currentPath.startsWith(linkPath + "/") //Detecta subrutas y marca activo el enlace padre

    return isActive
    ? `text-blue-600 font-semibold ${baseClasses}` // enlace activo
    : `text-gray-900 ${baseClasses}` // enlace inactivo
}