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

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
        ...prev,
        [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
        // Aquí se integrará con el backend en el futuro
        console.log('Datos del formulario:', formData)
        
        // Simular envío
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        alert('¡Gracias por tu mensaje! Te responderemos pronto.')
        
        // Limpiar formulario
        setFormData({
            nombre: '',
            email: '',
            asunto: '',
            mensaje: ''
        })
        } catch (error) {
        alert('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.')
        } finally {
        setIsSubmitting(false)
        }
    }

    const handleWhatsAppClick = () => {
        const mensaje = encodeURIComponent(datosContacto.whatsappGeneral.mensaje)
        const whatsappNumero = datosContacto.informacionGeneral.whatsapp.replace(/\D/g, '')
        const url = `https://api.whatsapp.com/send?phone=${whatsappNumero}&text=${mensaje}`
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <main className="bg-stone-50 overflow-hidden">
        {/* HERO CON IMAGEN */}
        <section
            ref={heroRef}
            className={`relative pt-12 sm:pt-16 lg:pt-20 pb-16 lg:pb-20 transition-all duration-700 ${
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

            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light max-w-2xl mx-auto mb-12">
                {contactoHeroData.descripcion}
            </p>

            {/* Imagen estratégica debajo del título */}
            <div className="w-full max-w-3xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden bg-gradient-to-br from-orange-100 to-pink-100 border border-orange-200/60 shadow-xl flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-orange-500 space-y-4">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7v2.99s-1.99.01-2 0V7c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v3c0 .01-2 0-2 0V7c0-2.21 1.79-4 4-4h6c2.21 0 4 1.79 4 4zM8 10v11c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10H8z" />
                    <path d="M12 2l-5.5 9h11L12 2zm0 2.84L14.93 9H9.07L12 4.84z" />
                </svg>
                <div className="text-center">
                    <span className="text-lg font-semibold block mb-1">Nuestra casa de transformación</span>
                    <span className="text-sm text-orange-400">Fundación Atma Namasté</span>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* INFORMACIÓN DE CONTACTO Y MAPA PLACEHOLDER */}
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
                        <br />
                        <span className="text-gray-600">Valledupar, César, Colombia</span>
                        </p>
                    </div>
                    </div>

                    {/* WhatsApp Formal */}
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200/50">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.297"/>
                        </svg>
                        </div>
                        <div>
                        <p className="text-green-700 font-semibold text-lg">WhatsApp Oficial</p>
                        <p className="text-green-600 text-sm">Respuesta rápida y directa</p>
                        </div>
                    </div>
                    <button
                        onClick={handleWhatsAppClick}
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.297"/>
                        </svg>
                        {datosContacto.whatsappGeneral.texto}
                    </button>
                    </div>
                </div>
                </div>

                {/* MAPA PLACEHOLDER */}
                <div className="w-full">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-0.5 bg-purple-500" />
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                    Encuéntranos
                    </span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    Nuestra Ubicación
                </h2>
                
                {/* Placeholder para mapa */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 border border-blue-200/60 shadow-lg flex items-center justify-center">
                    <div className="text-center text-blue-600">
                    <svg className="w-20 h-20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <div className="space-y-1">
                        <p className="text-lg font-semibold text-gray-700">Mapa de ubicación</p>
                        <p className="text-blue-500 font-medium">Valledupar, César</p>
                        <p className="text-sm text-gray-500">Próximamente con Google Maps</p>
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
                    Nombre Completo
                    </label>
                    <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white disabled:opacity-50"
                    placeholder="Escribe el nombre completo"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo Electrónico
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white disabled:opacity-50"
                    placeholder="ejemplo@correo.com"
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
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white disabled:opacity-50"
                    placeholder="¿De qué quieres hablar?"
                />
                </div>

                {/* Mensaje */}
                <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                </label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors bg-white resize-none disabled:opacity-50"
                    placeholder="Escribe el mensaje aquí..."
                />
                </div>

                {/* Botón de envío */}
                <div className="text-center pt-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-3 px-12 py-4 bg-pink-600 text-white font-semibold rounded-2xl hover:bg-pink-700 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                    {isSubmitting ? (
                    <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                    </>
                    ) : (
                    <>
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
                    </>
                    )}
                </button>
                </div>
            </form>
            </div>
        </section>

        <Footer />
        </main>
    )
}
