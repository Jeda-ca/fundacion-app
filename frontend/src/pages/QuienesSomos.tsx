import React, { useEffect, useRef, useState } from "react"
import type { ValorData } from "../types"

// Data necesarios (ajusta import según tu repo)
import {
    quienesSomosHeroData,   // { titulo, subtitulo, descripcion }
    historiaData,           // { etiqueta, titulo, descripcion, timeline[] }
    valoresData             // Array<{ nombre, descripcion, icono }>
} from "../data/quienesSomosData"

import {
    footerData,
    navegacionLinks,
    contactoInfo,
    redesSociales,
    politicasLinks
} from "../data/inicioData"

export default function QuienesSomos() {
    const useInView = (threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] => {
    const [isInView, setIsInView] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
            { threshold, rootMargin: "100px" }
        )
        if (ref.current) obs.observe(ref.current)
        return () => obs.disconnect()
    }, [threshold])

    return [ref, isInView]
    }

    const [heroRef, heroInView] = useInView(0.1)
    const [historiaRef, historiaInView] = useInView(0.15)
    const [impactoRef, impactoInView] = useInView(0.2)
    const [valoresRef, valoresInView] = useInView(0.2)

    const renderIcon = (tipo: string, className = "w-6 h-6") => {
        const iconos = {
        corazon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
        estrella: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
        libro: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        }
        return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            {iconos[tipo as keyof typeof iconos] || iconos.estrella}
        </svg>
        )
    }

    return (
        <main className="bg-stone-50 overflow-hidden">
        {/* HERO: Imagen circular restaurada */}
        <section
            ref={heroRef}
            className={`relative pt-12 sm:pt-16 lg:pt-20 pb-10 lg:pb-14 transition-all duration-700 ${heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
            <div className="max-w-6xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Texto */}
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-pink-200/50 shadow-sm mb-5">
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-pink-700">{quienesSomosHeroData?.subtitulo || "¿Quiénes Somos?"}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
                {quienesSomosHeroData?.titulo || "Fundación Atma Namasté"}
                </h1>
                <p className="mt-5 text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                {quienesSomosHeroData?.descripcion || "Transformamos vidas a través del amor, la educación integral y la espiritualidad."}
                </p>
            </div>
            {/* Imagen circular */}
            <div className="w-full flex justify-center">
                <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-lg ring-2 ring-pink-200">
                {/* <img src={imagenHeroQS} alt="Fundación Atma Namasté" className="w-full h-full object-cover" /> */}
                <div className="w-full h-full bg-gradient-to-br from-pink-200 to-purple-200" />
                </div>
            </div>
            </div>
        </section>

        {/* HISTORIA */}
        <section
            ref={historiaRef}
            className={`py-16 lg:py-20 bg-white/70 backdrop-blur-sm transition-all duration-700 ${historiaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
                <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-0.5 bg-purple-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600">{historiaData.etiqueta}</span>
                <div className="w-12 h-0.5 bg-purple-500" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">{historiaData.titulo}</h2>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">{historiaData.descripcion}</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <ol className="relative border-s border-purple-200">
                {historiaData.timeline.map((item, idx) => (
                    <li key={idx} className="mb-10 ms-6">
                    <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 ring-4 ring-white">
                        <span className="h-2.5 w-2.5 rounded-full bg-purple-600" />
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">{item.año} — {item.evento}</h3>
                    <p className="text-gray-700">{item.descripcion}</p>
                    </li>
                ))}
                </ol>
            </div>
            </div>
        </section>

        {/* NUESTRO IMPACTO (sin cards) */}
        <section
            ref={impactoRef}
            className={`py-16 lg:py-20 bg-white transition-all duration-700 ${impactoInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
            <div className="max-w-6xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-5">
                <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-purple-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600">Nuestro Impacto</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Transformaciones que inspiran</h2>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                Durante años, la Fundación Atma Namasté ha construido procesos sostenidos con familias y comunidades,
                generando transformación social desde el amor, la educación y la espiritualidad. Nuestro impacto se refleja
                en historias de vida, no solo en números.
                </p>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                Aquí compartiremos relatos y aprendizajes que inspiran a seguir sirviendo con compromiso y excelencia.
                Este espacio también podrá incluir una galería fotográfica de la fundación.
                </p>
            </div>

            <div className="w-full">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 border border-pink-200">
                {/* <img src={imagenFundacion} alt="Actividades de la fundación" className="w-full h-full object-cover" /> */}
                </div>
            </div>
            </div>
        </section>

        {/* NUESTROS VALORES (5 elementos) */}
        <section
            ref={valoresRef}
            className={`py-16 lg:py-20 bg-white/60 transition-all duration-700 ${valoresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
                <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-0.5 bg-pink-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-pink-600">Nuestros Valores</span>
                <div className="w-12 h-0.5 bg-pink-500" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">Lo que nos guía</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:[&>*:nth-child(5)]:col-span-1 lg:[&>*:nth-child(5)]:justify-self-center">
            {((valoresData as unknown) as ValorData[]).slice(0, 5).map((valor: ValorData, i: number) => (
                <div key={i} className="bg-white border border-purple-100 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600">
                    {renderIcon(valor.icono || "estrella")}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{valor.nombre}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{valor.descripcion}</p>
                </div>
            ))}
            </div>
            </div>
        </section>

        {/* FOOTER reutilizado */}
        <footer className="bg-gray-900 text-white">
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
            <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                <div className="sm:col-span-2 lg:col-span-2">
                <div className="space-y-4 lg:space-y-6">
                    <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-1 lg:mb-2">{footerData.titulo}</h3>
                    <p className="text-sky-400 font-medium text-sm lg:text-base">{footerData.subtitulo}</p>
                    </div>
                    <p className="text-gray-300 leading-relaxed max-w-md text-sm lg:text-base">
                    {footerData.descripcion}
                    </p>
                    <div className="flex items-center gap-3 lg:gap-4">
                    {redesSociales.map((red, index) => (
                        <a
                        key={index}
                        href={red.url}
                        target={red.url.startsWith("http") ? "_blank" : "_self"}
                        rel={red.url.startsWith("http") ? "noopener noreferrer" : undefined}
                        className={`w-9 h-9 lg:w-10 lg:h-10 bg-gray-800 rounded-lg flex items-center justify-center ${red.hoverColor} transition-colors duration-300`}
                        >
                        <svg className="w-4 h-4 lg:w-5 lg:h-5" fill={red.nombre === "Contacto" ? "none" : "currentColor"} stroke={red.nombre === "Contacto" ? "currentColor" : "none"} viewBox="0 0 24 24">
                            <path strokeLinecap={red.nombre === "Contacto" ? "round" : undefined} strokeLinejoin={red.nombre === "Contacto" ? "round" : undefined} strokeWidth={red.nombre === "Contacto" ? 2 : undefined} d={red.icono}/>
                        </svg>
                        </a>
                    ))}
                    </div>
                </div>
                </div>

                <div>
                <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Navegación</h4>
                <ul className="space-y-2 lg:space-y-3">
                    {navegacionLinks.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm lg:text-base">
                        {link.texto}
                        </a>
                    </li>
                    ))}
                </ul>
                </div>

                <div>
                <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6">Contacto</h4>
                <ul className="space-y-2 lg:space-y-3 text-gray-300">
                    {contactoInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {renderIcon(info.icono)}
                        </svg>
                        <span style={{whiteSpace: "pre-line"}} className="text-sm lg:text-base">{info.texto}</span>
                    </li>
                    ))}
                </ul>
                </div>
            </div>

            <div className="py-6 lg:py-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 lg:gap-4">
                <p className="text-gray-400 text-xs lg:text-sm text-center sm:text-left">
                {footerData.copyright}
                </p>
                <div className="flex items-center gap-4 lg:gap-6 text-xs lg:text-sm">
                {politicasLinks.map((link, index) => (
                    <a key={index} href={link.url} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.texto}
                    </a>
                ))}
                </div>
            </div>
            </div>
        </footer>
        </main>
    )
}
