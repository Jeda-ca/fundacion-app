import { IconRenderer } from './IconRenderer'

interface ImagePlaceholderProps {
icon: string
title?: string
subtitle?: string
aspectRatio?: 'square' | '4/3' | '16/9' | '3/2' | '4/5'
gradient?: 'pink-orange' | 'purple-blue' | 'orange-yellow'
className?: string
}

export const ImagePlaceholder = ({
icon,
title = "Imagen representativa",
subtitle = "Fundación Atma Namasté",
aspectRatio = '4/3',
gradient = 'pink-orange',
className = ''
}: ImagePlaceholderProps) => {
const ratios = {
square: 'aspect-square',
'4/3': 'aspect-[4/3]',
'16/9': 'aspect-[16/9]',
'3/2': 'aspect-[3/2]',
'4/5': 'aspect-[4/5]'
}

const gradients = {
'pink-orange': {
bg: 'from-pink-50 to-orange-50',
pattern: 'rgba(219, 39, 119, 0.15)',
iconBg: 'from-pink-100 to-pink-200',
iconColor: 'text-pink-600',
decorLeft: 'from-pink-200/40',
decorRight: 'from-orange-200/50'
},
'purple-blue': {
bg: 'from-purple-50 to-blue-50',
pattern: 'rgba(147, 51, 234, 0.15)',
iconBg: 'from-purple-100 to-purple-200',
iconColor: 'text-purple-600',
decorLeft: 'from-purple-200/40',
decorRight: 'from-blue-200/50'
},
'orange-yellow': {
bg: 'from-orange-50 to-yellow-50',
pattern: 'rgba(251, 146, 60, 0.15)',
iconBg: 'from-orange-100 to-orange-200',
iconColor: 'text-orange-600',
decorLeft: 'from-orange-200/40',
decorRight: 'from-yellow-200/50'
}
}

const colors = gradients[gradient]

return (
    <div className={`relative w-full ${ratios[aspectRatio]} rounded-2xl overflow-hidden border border-pink-200/50 shadow-lg group ${className}`}>
    {/*
    ============================================================
    TODO: REEMPLAZAR ESTE PLACEHOLDER CON TU IMAGEN REAL
    ============================================================
    Ejemplo de uso:
    text
        <img 
            src="/ruta/a/tu/imagen.jpg" 
            alt={title}
            className="w-full h-full object-cover"
        />
        Una vez agregues la imagen, puedes eliminar todo lo que está
        dentro de este componente (desde aquí hasta el final del return)
        y dejarlo solo con el <img> tag.
        ============================================================
    */}

    {/* Fondo con gradiente */}
    <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} relative overflow-hidden`}>
        {/* Patrón de puntos sutil */}
        <div className="absolute inset-0 opacity-30">
        <div 
            className="absolute inset-0" 
            style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.pattern} 1px, transparent 0)`,
            backgroundSize: '20px 20px'
            }} 
        />
        </div>
        
        {/* Overlay gradiente para profundidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/10" />
    </div>

    {/* Contenido centrado */}
    <div className="relative z-10 flex items-center justify-center h-full p-6 lg:p-8">
        <div className="text-center">
        {/* Icono en círculo con animación */}
        <div className={`w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-4 lg:mb-6 bg-gradient-to-br ${colors.iconBg} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
            <IconRenderer tipo={icon} className={`w-8 h-8 lg:w-10 lg:h-10 ${colors.iconColor}`} />
        </div>
        
        {/* Texto descriptivo */}
        <p className="text-base lg:text-lg font-semibold text-gray-600 mb-2">{title}</p>
        <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
    </div>

    {/* Elementos decorativos flotantes - Responsive */}
    <div className={`absolute -bottom-4 lg:-bottom-8 -left-4 lg:-left-8 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-br ${colors.decorLeft} to-transparent rounded-full blur-2xl`} />
    <div className={`absolute -top-2 lg:-top-4 -right-2 lg:-right-4 w-12 h-12 lg:w-20 lg:h-20 bg-gradient-to-br ${colors.decorRight} to-transparent rounded-full blur-xl`} />
    </div>
)
}