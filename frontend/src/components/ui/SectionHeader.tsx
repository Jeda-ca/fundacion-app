interface SectionHeaderProps {
    badge: string
    title: string
    description?: string
    badgeColor?: 'pink' | 'purple' | 'orange'
    className?: string
}

export const SectionHeader = ({ badge, title, description, badgeColor = 'pink', className = '' }: SectionHeaderProps) => {
    const colors = {
        pink: 'bg-pink-500 text-pink-600',
        purple: 'bg-purple-500 text-purple-600',
        orange: 'bg-orange-500 text-orange-600'
    }

    const [lineColor, textColor] = colors[badgeColor].split(' ')

    return (
        <div className={`text-center max-w-4xl mx-auto mb-12 lg:mb-16 ${className}`}>
        <div className="flex items-center justify-center gap-3 mb-4">
            <div className={`w-12 h-0.5 ${lineColor}`} />
            <span className={`text-xs font-bold uppercase tracking-wider ${textColor}`}>
            {badge}
            </span>
            <div className={`w-12 h-0.5 ${lineColor}`} />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
        </h2>
        {description && (
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
            {description}
            </p>
        )}
        </div>
    )
}
