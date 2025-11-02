export function getActiveClass(currentPath: string, linkPath: string): string {
    const baseClasses =
    "px-auto py-3 rounded-md font-[Poppins] hover:text-pink-600 hover:font-semibold transition-colors duration-200"

    const isActive = // Verifica si la ruta actual coincide con el enlace o es una subruta
    currentPath === linkPath || currentPath.startsWith(linkPath + "/") //Detecta subrutas y marca activo el enlace "padre"

    return isActive
    ? `text-pink-600 font-semibold ${baseClasses}` // enlace activo
    : `text-gray-100 ${baseClasses}` // enlace inactivo
}