// src/hooks/useInView.ts
// Hook personalizado para detectar cuando un elemento entra en viewport
// Extraído de las páginas Inicio, Programas y QuienesSomos (duplicado)

import { useState, useRef, useEffect } from 'react'

/**
 * Hook personalizado para detectar cuando un elemento está visible en el viewport
 * Utiliza Intersection Observer API para animaciones de entrada
 * 
 * @param threshold - Porcentaje del elemento que debe estar visible (0.0 a 1.0)
 * @param rootMargin - Margen adicional alrededor del elemento (ej: '100px')
 * @returns [ref, isInView] - Referencia para el elemento y estado de visibilidad
 */
export function useInView(
  threshold = 0.1,
  rootMargin = '0px'
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { 
        threshold,
        rootMargin
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, isInView]
}