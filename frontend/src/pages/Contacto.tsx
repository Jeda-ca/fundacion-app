import { useState } from 'react'
import { useInView } from '../hooks'
import { Footer } from '../components/layout'
import { IconRenderer } from '../components/ui'
import { contactoHeroData, datosContacto } from '../data/contactoData'

export default function Contacto() {
    const [heroRef, heroInView] = useInView(0.1)
    const [infoRef, infoInView] = useInView(0.15)
    const [formularioRef, formularioInView] = useInView(0.15)

    // Estado del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
        ...prev,
        [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aquí se integrará con el backend en el futuro
        console.log('Datos del formulario:', formData)
        alert('¡Gracias por tu mensaje! Te responderemos pronto.')
        
        // Limpiar formulario
        setFormData({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
        })
    }

    return (
        <main className="bg-stone-50 overflow-hidden">
        {/* HERO */}
        <section
            ref={heroRef}
            className={`relative pt-12 sm:pt-16 lg:pt-20 pb-10 lg:pb-14 transition-all duration-700 ${
            heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 lg:px-8 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full border border-pink-200/60 shadow-sm mb-6">
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-pink-700">
                {contactoHeroData.subtitulo}
                </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
                {contactoHeroData.titulo}
            </h1>

            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light max-w-2xl mx-auto">
                {contactoHeroData.descripcion}
            </p>
            </div>
        </section>

        {/* INFORMACIÓN DE CONTACTO Y MAPA */}
        <section
            ref={infoRef}
            className={`py-16 lg:py-20 bg-white/70 backdrop-blur-sm transition-all duration-700 ${
            infoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                
                {/* INFORMACIÓN GENERAL */}
                <div className="space-y-8">
                {/* Header */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-0.5 bg-pink-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
                        Información General
                    </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    Datos de Contacto
                    </h2>
                </div>

                {/* Información principal */}
                <div className="space-y-6">
                    {/* Correo */}
                    <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600">
                        <IconRenderer tipo="email" />
                    </div>
                    <div>
                        <p className="text-sm text-pink-600 font-medium mb-1">Correo Electrónico:</p>
                        <a 
                        href={`mailto:${datosContacto.informacionGeneral.correo}`}
                        className="text-gray-900 font-semibold hover:text-pink-600 transition-colors"
                        >
                        {datosContacto.informacionGeneral.correo}
                        </a>
                    </div>
                    </div>

                    {/* Teléfono */}
                    <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600">
                        <IconRenderer tipo="telefono" />
                    </div>
                    <div>
                        <p className="text-sm text-pink-600 font-medium mb-1">Teléfono Principal:</p>
                        <a 
                        href={`tel:${datosContacto.informacionGeneral.telefonoPrincipal}`}
                        className="text-gray-900 font-semibold hover:text-pink-600 transition-colors"
                        >
                        {datosContacto.informacionGeneral.telefonoPrincipal}
                        </a>
                    </div>
                    </div>

                    {/* Dirección */}
                    <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 flex-shrink-0">
                        <IconRenderer tipo="ubicacion" />
                    </div>
                    <div>
                        <p className="text-sm text-pink-600 font-medium mb-1">Dirección:</p>
                        <p className="text-gray-900 font-semibold">
                        {datosContacto.informacionGeneral.direccion}
                        </p>
                    </div>
                    </div>

                    {/* WhatsApp General */}
                    <div className="bg-pink-50/80 rounded-xl p-4 border border-pink-200/50">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white">
                        <IconRenderer tipo="whatsapp" />
                        </div>
                        <div>
                        <p className="text-pink-700 font-semibold">WhatsApp General:</p>
                        <a 
                            href={`https://wa.me/${datosContacto.informacionGeneral.whatsapp.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pink-600 hover:text-pink-700 transition-colors"
                        >
                            {datosContacto.whatsappGeneral}
                        </a>
                        </div>
                    </div>
                    </div>
                </div>

                {/* NUESTRO EQUIPO */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-0.5 bg-purple-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                        Nuestro Equipo
                    </span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">Puedes contactar directamente a nuestros representantes:</p>
                    
                    <div className="space-y-3">
                    {datosContacto.equipo.map((miembro, index) => (
                        <div key={index} className="flex items-center justify-between py-2">
                        <div>
                            <p className="font-semibold text-gray-900">{miembro.nombre}:</p>
                            {miembro.area && (
                            <p className="text-xs text-gray-500">{miembro.area}</p>
                            )}
                        </div>
                        <a 
                            href={`tel:${miembro.telefono}`}
                            className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                        >
                            {miembro.telefono}
                        </a>
                        </div>
                    ))}
                    </div>
                </div>
                </div>

                {/* MAPA */}
                <div className="w-full">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-0.5 bg-orange-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    Encuéntranos
                    </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    Nuestra Ubicación
                </h2>
                
                {/* Placeholder para mapa */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-teal-100 border border-green-200/60 shadow-lg flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center text-green-600 space-y-4">
                    <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <div className="text-center">
                        <span className="text-lg font-semibold block mb-1">Mapa de ubicación</span>
                        <span className="text-sm text-green-500">Valledupar, César</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* FORMULARIO DE CONTACTO */}
        <section
            ref={formularioRef}
            className={`py-16 lg:py-20 bg-pink-50/30 transition-all duration-700 ${
            formularioInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
            <div className="max-w-4xl mx-auto px-4 lg:px-8">
            {/* Header del formulario */}
            <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                ¿Tienes Alguna Duda? ¡Escríbenos!
                </h2>
                <p className="text-gray-700 text-lg">
                Completa el formulario y te responderemos a la brevedad.
                </p>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Tu Nombre Completo
                    </label>
                    <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white"
                    placeholder="Escribe tu nombre completo"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Tu Correo Electrónico
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white"
                    placeholder="tu@email.com"
                    />
                </div>
                </div>

                {/* Asunto */}
                <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto
                </label>
                <input
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white"
                    placeholder="¿De qué quieres hablar?"
                />
                </div>

                {/* Mensaje */}
                <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Tu Mensaje
                </label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                />
                </div>

                {/* Botón de envío */}
                <div className="text-center pt-4">
                <button
                    type="submit"
                    className="group inline-flex items-center gap-3 px-12 py-4 bg-pink-600 text-white font-semibold rounded-2xl hover:bg-pink-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                    Enviar Mensaje
                    <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                    </svg>
                </button>
                </div>
            </form>
            </div>
        </section>

        <Footer />
        </main>
    )
}
