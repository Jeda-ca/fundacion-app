import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    variant?: 'primary' | 'secondary'
    type?: 'button' | 'submit'
    disabled?: boolean
    href?: string
    className?: string
}

export const Button = ({children, onClick, variant = 'primary', type = 'button', disabled = false, href, className = ''}: ButtonProps) => {
    const baseClasses = "group inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-xl transition-all duration-300"
    
    const variants = {
        primary: "bg-pink-600 text-white hover:bg-pink-700 hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        secondary: "text-pink-600 border-2 border-pink-600 hover:bg-pink-50 hover:border-pink-700"
    }

    const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`

    if (href) {
        return (
        <a href={href} className={combinedClasses}>
            {children}
        </a>
        )
    }

    return (
        <button 
        type={type}
        onClick={onClick} 
        disabled={disabled}
        className={combinedClasses}
        >
        {children}
        </button>
    )
}
