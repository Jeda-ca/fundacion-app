import { useState, useRef, useEffect } from 'react'
/**
 * Hook personalizado para detectar cuando un elemento entra en viewport
 * Usa Intersection Observer API para animaciones de scroll
 * 
 * @param threshold - Porcentaje del elemento que debe ser visible (0.0 a 1.0)
 * @returns [ref, isInView] - Ref para asignar al elemento y estado de visibilidad
 */
export function useInView(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
    const [isInView, setIsInView] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsInView(true)
            }
        },
        { threshold }
        )

        if (ref.current) {
        observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [threshold])

    return [ref, isInView]
}