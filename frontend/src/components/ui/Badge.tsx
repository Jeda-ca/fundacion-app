interface BadgeProps {
    children: React.ReactNode
    color?: 'pink' | 'purple' | 'orange' | 'blue'
    className?: string
}

export const Badge = ({ children, color = 'pink', className = '' }: BadgeProps) => {
    const colors = {
        pink: 'border-pink-200/50 text-pink-700',
        purple: 'border-purple-200/50 text-purple-700',
        orange: 'border-orange-200/50 text-orange-700',
        blue: 'border-blue-200/50 text-blue-700'
    }

    return (
        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full border shadow-sm ${colors[color]} ${className}`}>
        <div className={`w-2 h-2 ${color === 'pink' ? 'bg-pink-500' : color === 'purple' ? 'bg-purple-500' : color === 'orange' ? 'bg-orange-500' : 'bg-blue-500'} rounded-full animate-pulse`} />
        <span className="text-sm font-medium">{children}</span>
        </div>
    )
}
