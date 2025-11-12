import type { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
    variant?: 'default' | 'bordered' | 'elevated'
    padding?: 'sm' | 'md' | 'lg'
    className?: string
}

export const Card = ({ children, variant = 'default', padding = 'md', className = '' }: CardProps) => {
    const variants = {
        default: 'bg-white/90 rounded-2xl shadow-sm hover:shadow-md',
        bordered: 'bg-white/90 rounded-2xl border border-pink-200/50 shadow-sm hover:shadow-lg',
        elevated: 'bg-white/90 rounded-2xl shadow-lg hover:shadow-xl'
    }

    const paddings = {
        sm: 'p-4 lg:p-6',
        md: 'p-6 lg:p-8',
        lg: 'p-8 lg:p-10'
    }

    return (
        <div className={`${variants[variant]} ${paddings[padding]} transition-all duration-300 ${className}`}>
        {children}
        </div>
    )
}
