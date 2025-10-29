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
    { id: 5, name: "Contáctanos", path: "/contacto" }
]
export const programasDropdown: NavLinkItem[] = [
    { id: 1, name: "Para Niños y Adolescentes", path: "/programas/para-ninos-y-adolescentes" },
    { id: 2, name: "Para Familias", path: "/programas/para-familias" },
    { id: 3, name: "Para Jóvenes Universitarios", path: "/programas/para-jovenes-universitarios" },
    { id: 4, name: "Para Adultos", path: "/programas/para-adultos" }
]
