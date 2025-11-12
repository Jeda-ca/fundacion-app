import type { ReactNode } from 'react'
import { forwardRef } from 'react'

interface SectionProps {
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'tertiary'
    className?: string
}

export const Section = forwardRef<HTMLElement, SectionProps>(
    ({ children, variant = 'primary', className = '' }, ref) => {
        const variants = {
        primary: 'bg-white/70 backdrop-blur-sm',
        secondary: 'bg-white/80 backdrop-blur-sm',
        tertiary: 'bg-white/60 backdrop-blur-sm'
        }

        return (
        <section ref={ref} className={`py-16 lg:py-20 ${variants[variant]} ${className}`}>
            {children}
        </section>
        )
    }
)

Section.displayName = 'Section'