import { useInView } from '../hooks'
import { IconRenderer } from '../components/ui'
import { Footer } from '../components/layout'
import type { ValorData } from "../types"

// Importar datos necesarios
import {
    quienesSomosHeroData,
    historiaData,
    valoresData
} from "../data/quienesSomosData"

export default function QuienesSomos() {
    const [heroRef, heroInView] = useInView(0.1)
    const [historiaRef, historiaInView] = useInView(0.15)
    const [impactoRef, impactoInView] = useInView(0.2)
    const [valoresRef, valoresInView] = useInView(0.2)

    return (
        <main className="bg-stone-50 overflow-hidden">
        {/* HERO */}
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
                <div className="relative size-[260px] sm:size-[320px] lg:size-[420px] rounded-full overflow-hidden shadow-lg ring-2 ring-pink-200">
                <div className="size-full bg-gradient-to-br from-pink-200 to-purple-200" />
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
                    <span className="absolute -start-3 flex size-6 items-center justify-center rounded-full bg-purple-100 ring-4 ring-white">
                        <span className="size-2.5 rounded-full bg-purple-600" />
                    </span>
                    <h3 className="mb-1 text-lg font-semibold text-gray-900">{item.año} — {item.evento}</h3>
                    <p className="text-gray-700">{item.descripcion}</p>
                    </li>
                ))}
                </ol>
            </div>
            </div>
        </section>

        {/* NUESTRO IMPACTO */}
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
                <div className="aspect-4/3 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 border border-pink-200">
                {/* <img src={imagenFundacion} alt="Actividades de la fundación" className="w-full h-full object-cover" /> */}
                </div>
            </div>
            </div>
        </section>

        {/* NUESTROS VALORES */}
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
                    <div className="size-10 rounded-lg bg-pink-100 flex items-center justify-center text-pink-600">
                    <IconRenderer tipo={valor.icono || "estrella"} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{valor.nombre}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{valor.descripcion}</p>
                </div>
            ))}
            </div>
            </div>
        </section>

        {/* Footer - Componente reutilizable */}
        <Footer />
        </main>
    )
}