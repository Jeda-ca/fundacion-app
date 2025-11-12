import { IconRenderer } from './IconRenderer'

interface ImagePlaceholderProps {
    icon: string
    title?: string
    subtitle?: string
    aspectRatio?: 'square' | '4/3' | '16/9' | '3/2'
    gradient?: 'pink-orange' | 'purple-blue' | 'orange-yellow'
    className?: string
}

export const ImagePlaceholder = ({ icon, title, subtitle, aspectRatio = '4/3', gradient = 'pink-orange', className = '' }: ImagePlaceholderProps) => {
    const ratios = {
        square: 'aspect-square',
        '4/3': 'aspect-[4/3]',
        '16/9': 'aspect-[16/9]',
        '3/2': 'aspect-[3/2]'
    }

    const gradients = {
        'pink-orange': 'bg-gradient-pink-orange',
        'purple-blue': 'bg-gradient-purple-blue',
        'orange-yellow': 'bg-gradient-orange-yellow'
    }

    return (
        <div className={`w-full ${ratios[aspectRatio]} rounded-2xl overflow-hidden ${gradients[gradient]} border border-pink-200/50 shadow-lg flex items-center justify-center ${className}`}>
        <div className="flex flex-col items-center justify-center text-pink-500 space-y-3">
            <IconRenderer tipo={icon} className="w-16 h-16 text-white" />
            {title && <span className="text-sm font-medium text-center text-white">{title}</span>}
            {subtitle && <span className="text-xs text-center text-white/80">{subtitle}</span>}
        </div>
        </div>
    )
}
