import { useState, useEffect } from 'react'/**
 * Hook para efectos de parallax basados en scroll
 * 
 * @returns scrollY - Posición actual del scroll en Y
 */
export function useScrollEffects() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return scrollY
}