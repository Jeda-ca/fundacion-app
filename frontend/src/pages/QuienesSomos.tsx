// src/pages/QuienesSomos.tsx
export default function QuienesSomos() {
  // Ejemplo de campos destacados, se pueden adaptar según el backend/fuentes reales
    return (
        <div className="min-h-screen bg-linear-to-br from-white to-blue-50 px-4 py-10">
        <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-2">
            ¿Quiénes somos?
            </h1>
            <p className="text-lg max-w-xl mx-auto text-gray-700">
            Somos la Fundación Atma Namasté, un espacio dedicado al servicio comunitario y la sanación pránica, comprometidos con el bienestar físico, emocional y espiritual de niños, jóvenes y familias en Valledupar, Colombia.
            </p>
        </header>

        {/* Historia y misión */}
        <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-sky-700 mb-2">Historia</h2>
            <p className="text-gray-700 mb-4">
            Desde el año 2009, la fundación trabaja en proyectos educativos, sociales y de salud emocional, promoviendo valores y el crecimiento integral, apoyados en la enseñanza del Maestro [translate:Grand Master Choa Kok Sui (G.M.C.K.S)]. Nuestra misión es acompañar a los más necesitados, ofreciendo herramientas para una vida plena y sana.
            </p>
            <h3 className="text-lg font-semibold text-pink-700 mb-2">Misión</h3>
            <p className="text-gray-700 mb-4">
            Promover la transformación social y espiritual, brindando educación, sanación pránica y apoyo integral a la comunidad, especialmente a los más vulnerables.
            </p>
            <h3 className="text-lg font-semibold text-pink-700 mb-2">Visión</h3>
            <p className="text-gray-700">
            Ser referente local y nacional en programas de bienestar, educación, espiritualidad y desarrollo humano, expandiendo la enseñanza pránica para el beneficio de todos.
            </p>
        </section>

        {/* Información complementaria / Equipo / Valores */}
        <section className="max-w-3xl mx-auto flex flex-col gap-6">
            {/* Equipo Directivo */}
            <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-bold text-sky-700 mb-2">Equipo Directivo</h3>
            <ul className="text-gray-700 list-disc ml-4">
                <li>Jesús David Carvajal — Director y fundador, facilitador en sanación pránica</li>
                <li>Colaboradores voluntarios y facilitadores certificados</li>
            </ul>
            </div>
            {/* Valores y filosofía */}
            <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-lg font-bold text-sky-700 mb-2">Valores Fundamentales</h3>
            <ul className="text-gray-700 list-disc ml-4">
                <li>Amor incondicional y servicio</li>
                <li>Sabiduría, respeto y solidaridad</li>
                <li>Compromiso con la comunidad y el crecimiento espiritual</li>
            </ul>
            </div>
        </section>
        </div>
    )
}
