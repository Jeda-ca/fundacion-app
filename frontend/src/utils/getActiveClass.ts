export function getActiveClass(currentPath: string, linkPath: string): string {
    const baseClasses = "block py-2 px-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0"

    const isActive = currentPath === linkPath

    return isActive ? `text-blue-600 font-semibold ${baseClasses}` : `text-gray-900 ${baseClasses}`
}
