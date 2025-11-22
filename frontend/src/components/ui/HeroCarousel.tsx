import { useEffect, useState } from 'react'

interface HeroCarouselProps {
    images: string[]
    intervalMs?: number
    altBase?: string
}

export const HeroCarousel = ({
    images,
    intervalMs = 6000,
    altBase = 'Foto Fundación Atma Namasté'
    }: HeroCarouselProps) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (images.length <= 1) return
        const id = window.setInterval(
        () => setIndex(prev => (prev + 1) % images.length),
        intervalMs
        )
        return () => window.clearInterval(id)
    }, [images.length, intervalMs])

    const goToPrev = () => {
        setIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const goToNext = () => {
        setIndex(prev => (prev + 1) % images.length)
    }

    return (
        <div className="relative mt-8 lg:mt-0 group">
        <div className="relative w-full max-w-[1200px] mx-auto aspect-[4/3] sm:aspect-[16/5] lg:aspect-[16/8]">
            {/* Fondos decorativos */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-50 to-orange-100 rounded-3xl lg:rounded-[3rem] rotate-3 blur-sm" />
            <div className="absolute inset-1 lg:inset-2 bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl lg:rounded-[3rem] -rotate-2 opacity-60" />

            {/* Imagen principal */}
            <div className="relative bg-white rounded-3xl lg:rounded-[3rem] shadow-2xl overflow-hidden -rotate-1 hover:rotate-0 transition-all duration-700">
            <img
                src={images[index]}
                alt={`${altBase} ${index + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5 pointer-events-none" />
            </div>

            {/* Flecha anterior */}
            {images.length > 1 && (
            <button
                onClick={goToPrev}
                className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 lg:p-3 rounded-full shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                aria-label="Foto anterior"
            >
                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            )}

            {/* Flecha siguiente */}
            {images.length > 1 && (
            <button
                onClick={goToNext}
                className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 lg:p-3 rounded-full shadow-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 z-10"
                aria-label="Foto siguiente"
            >
                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
            </button>
            )}

            {/* Glows */}
            <div className="absolute -bottom-6 lg:-bottom-10 -left-6 lg:-left-10 w-24 h-24 lg:w-40 lg:h-40 bg-gradient-to-br from-pink-200/40 to-transparent rounded-full blur-3xl" />
            <div className="absolute -top-4 lg:-top-6 -right-4 lg:-right-6 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-orange-200/50 to-transparent rounded-full blur-2xl" />

            {/* Puntos */}
            {images.length > 1 && (
            <div className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 bg-black/20 backdrop-blur-md px-3 py-2 rounded-full z-20">
                {images.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-all duration-300 ${
                    i === index
                        ? 'bg-white w-6 lg:w-8'
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Ir a foto ${i + 1}`}
                />
                ))}
            </div>
            )}
        </div>
        </div>
    )
}
