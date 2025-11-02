// src/hooks/useScrollEffects.ts
// Hook personalizado para efectos de scroll y parallax
// Extraído de la lógica de scroll en las páginas

import { useState, useEffect } from 'react'

/**
 * Hook personalizado para manejar efectos de scroll
 * @returns scrollY - Posición actual del scroll vertical
 */
export function useScrollEffects() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollY }
}

/**
 * Hook para detectar la dirección del scroll
 * @returns { scrollDirection, scrollY }
 */
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY ? 'down' : 'up'
      
      if (direction !== scrollDirection && Math.abs(currentScrollY - lastScrollY) > 5) {
        setScrollDirection(direction)
      }
      
      setScrollY(currentScrollY)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollDirection])

  return { scrollDirection, scrollY }
}