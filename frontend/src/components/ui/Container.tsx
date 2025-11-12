import type { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl'
    className?: string
}

export const Container = ({ children, size = 'lg', className = '' }: ContainerProps) => {
    const sizes = {
        sm: 'max-w-3xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl'
    }

    return (
        <div className={`${sizes[size]} mx-auto px-4 lg:px-8 ${className}`}>
        {children}
        </div>
    )
}
