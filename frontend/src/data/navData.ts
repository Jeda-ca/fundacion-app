// Datos de navegación para el sitio web
import type { NavLinkItem } from "../types"

export const navLinks: NavLinkItem[] = [
    { id: 1, name: "Inicio", path: "/" },
    { id: 2, name: "¿Quiénes somos?", path: "/quienes-somos" },
    { id: 3, name: "Programas", path: "/programas" },
    { id: 4, name: "Servicios", path: "/servicios" },
    { id: 5, name: "Contáctanos", path: "/contacto" },
    { id: 6, name: "Nuestras sedes", path: "/nuestras-sedes" },
]
export const programasDropdown: NavLinkItem[] = [
    { id: 1, name: "Programa de Mercados", path: "/programas#programa-mercados" },
    { id: 2, name: "Refuerzo Escolar", path: "/programas#refuerzo-escolar" },
    { id: 3, name: "Artes Plásticas/Pintura", path: "/programas#artes-plasticas-pintura" },
    { id: 4, name: "Danza", path: "/programas#danza" },
    { id: 5, name: "Escuela de Iniciación Musical", path: "/programas#escuela-iniciacion-musical" },
    { id: 6, name: "Becas Estudiantiles y Profesionales (BESPRO)", path: "/programas#bespro" },
    { id: 7, name: "Programa de Meditación", path: "/programas#programa-meditacion" },
    { id: 8, name: "Apadrinamiento", path: "/programas#apadrinamiento" }
]