export interface NavLinkItem { // Interfaz para los enlaces de navegación
    id: number
    name: string
    path: string
}

export const navLinks: NavLinkItem[] = [
    { id: 1, name: "Inicio", path: "/" },
    { id: 2, name: "¿Quiénes somos?", path: "/quienes-somos" },
    { id: 3, name: "Programas", path: "/programas" },
    { id: 4, name: "Servicios", path: "/servicios" },
    { id: 5, name: "Contáctanos", path: "/contacto" },
    { id: 6, name: "Nuestras sedes", path: "/nuestras-sedes" }
]
export const programasDropdown: NavLinkItem[] = [
    { id: 1, name: "Refuerzo Escolar", path: "/programas/refuerzo-escolar" },
    { id: 2, name: "Artes plásticas y pintura", path: "/programas/artes-plasticas-y-pintura" },
    { id: 3, name: "Danza", path: "/programas/danza" },
    { id: 4, name: "Escuela de iniciación musical", path: "/programas/escuela-de-iniciacion-musical" },
    { id: 5, name: "Apadrinamiento", path: "/programas/apadrinamiento" },
    { id: 6, name: "Mercados", path: "/programas/mercados" },
    { id: 7, name: "BESPRO", path: "/programas/bespro" },
    { id: 8, name: "Programa de Meditación", path: "/programas/meditacion" }
]
