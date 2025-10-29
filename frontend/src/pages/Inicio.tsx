export default function Inicio() {
  // Mock de noticias y eventos
    const noticias = [
        {
        id: 1,
        titulo: "Nueva Jornada de Sanación Pránica",
        fecha: "2025-10-30",
        texto: "Únete a nuestra próxima jornada el 30 de octubre, abierta para toda la comunidad.",
        },
        {
        id: 2,
        titulo: "Celebración de aniversario",
        fecha: "2025-11-05",
        texto: "¡Cumplimos 16 años acompañando con amor! Participa en nuestra semana de talleres.",
        },
    ]

    // Información de la fundación
    const info = [
        {
        titulo: "Qué hacemos",
        descripcion: "Apoyamos a niños, jóvenes y familias brindando educación, salud emocional y oportunidades, inspirados en la sanación pránica.",
        },
        {
        titulo: "Nuestros Programas",
        descripcion: "Contamos con programas de mercados, refuerzo escolar, artes, becas BESPRO, meditación, entre otros, impulsando desarrollo integral.",
        },
        {
        titulo: "Compromiso Social",
        descripcion: "Actuamos en el Valledupar y alrededores, promoviendo valores, bienestar físico y mental, y el crecimiento espiritual de nuestros beneficiarios.",
        },
    ]

    return (
        <div className="min-h-screen bg-linear-to-br from-pink-50 to-blue-50 px-4 py-8">
        {/* Título Principal */}
        <header className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-pink-600 mb-4">
            Fundación Atma Namasté <br />
            <span className="text-sky-600">sanación pránica G.M.C.K.S</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Apoyamos a la comunidad con programas educativos, de bienestar y sanación pránica. ¡Conócenos!
            </p>
        </header>

        {/* Noticias y eventos */}
        <section className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-sky-700 mb-4">Noticias y Eventos</h2>
            <ul className="divide-y divide-gray-200">
                {noticias.map(n => (
                <li key={n.id} className="py-4 flex flex-col gap-1">
                    <span className="text-pink-500 font-medium">
                    {n.titulo}
                    </span>
                    <span className="text-sm text-gray-500">{n.fecha}</span>
                    <span className="text-gray-700">{n.texto}</span>
                </li>
                ))}
            </ul>
            </div>
        </section>

        {/* Información destacada de la fundación */}
        <section className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
            {info.map((item, i) => (
            <div key={i} className="flex-1 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-pink-700 mb-2">{item.titulo}</h3>
                <p className="text-gray-700">{item.descripcion}</p>
            </div>
            ))}
        </section>
        </div>
    )
}