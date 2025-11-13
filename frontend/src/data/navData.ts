import type { NavDropdown } from '../types'
import { mainNavLinks, programasDropdown } from './navigationData'

// Re-exportar los links principales
export const navLinks = mainNavLinks

// Re-exportar el dropdown de programas (esto resuelve el error)
export { programasDropdown }

// Dropdown de programas para el Navbar
export const programasNav: NavDropdown = {
texto: "Programas",
items: programasDropdown
}