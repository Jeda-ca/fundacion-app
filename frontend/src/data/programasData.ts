// Todos los datos de la página de Programas
import type { 
    ProgramasHeroData,
    ProgramaDetallado,
    HorarioData,
    SeccionData
} from '../types'

export const programasHero: ProgramasHeroData = {
    titulo: "Nuestros Programas",
    descripcion: "Cada programa está diseñado con amor y dedicación para potenciar las habilidades únicas de cada participante, creando espacios seguros donde el aprendizaje y el crecimiento personal van de la mano."
}

export const impactoProgramasData: SeccionData = {
    etiqueta: "Impacto de Nuestros Programas",
    titulo: "Transformando el presente, construyendo el futuro",
    descripcion: "Nuestros programas no solo educan, sino que inspiran, empoderan y crean oportunidades reales de crecimiento para cada participante y sus familias."
}

export const programasDetallados: ProgramaDetallado[] = [
    {
        id: "programa-mercados",
        nombre: "Programa de Mercados",
        descripcion: "Apoyo alimentario mensual para familias",
        descripcionLarga:
        "Brindamos mercados mensuales a familias en situación de vulnerabilidad, acompañados de orientación en nutrición básica y administración del hogar.",
        objetivos: [
        "Asegurar alimentación digna y suficiente",
        "Fortalecer hábitos de nutrición saludable",
        "Disminuir presión económica inmediata"
        ],
        edadTarget: "Familias",
        duracion: "Acompañamiento continuo",
        modalidad: "Presencial",
        horario: { dias: "Última semana de cada mes", horas: "9:00 AM - 12:00 PM" },
        icono: "corazon",
        color: "from-pink-400 to-orange-400"
    },
    {
        id: "refuerzo-escolar",
        nombre: "Refuerzo Escolar",
        descripcion: "Apoyo académico personalizado para niños y jóvenes",
        descripcionLarga:
        "Acompañamiento académico integral, con planes personalizados por materia y estrategias de estudio para potenciar el rendimiento.",
        objetivos: [
        "Mejorar calificaciones en materias clave",
        "Crear hábitos de estudio efectivos",
        "Aumentar la confianza académica"
        ],
        edadTarget: "6 a 17 años",
        duracion: "Año escolar completo",
        modalidad: "Presencial y virtual",
        horario: { dias: "Lunes a Viernes", horas: "2:00 PM - 5:00 PM" },
        icono: "libro",
        color: "from-pink-500 to-pink-600"
    },
    {
        id: "artes-plasticas-pintura",
        nombre: "Artes Plásticas/Pintura",
        descripcion: "Expresión creativa y desarrollo artístico integral",
        descripcionLarga:
        "Exploración artística con pintura y técnicas plásticas para expresar emociones, fortalecer la motricidad fina y la autoestima.",
        objetivos: [
        "Desarrollar habilidades artísticas",
        "Fomentar la autoexpresión",
        "Estimular la concentración"
        ],
        edadTarget: "5 a 18 años",
        duracion: "Ciclos de 6 meses",
        modalidad: "Presencial",
        horario: { dias: "Martes y Jueves", horas: "3:00 PM - 5:00 PM" },
        icono: "paleta",
        color: "from-pink-400 to-purple-400"
    },
    {
        id: "danza",
        nombre: "Danza",
        descripcion: "Movimiento, ritmo y expresión cultural",
        descripcionLarga:
        "Formación en técnica y expresión corporal con presentaciones periódicas para fortalecer disciplina y trabajo en equipo.",
        objetivos: [
        "Mejorar coordinación y postura",
        "Fomentar disciplina y constancia",
        "Conectar con raíces culturales"
        ],
        edadTarget: "4 a 20 años",
        duracion: "Anual con presentaciones semestrales",
        modalidad: "Presencial",
        horario: { dias: "Miércoles y Sábados", horas: "4:00 PM - 6:00 PM" },
        icono: "danza",
        color: "from-purple-400 to-pink-500"
    },
    {
        id: "escuela-iniciacion-musical",
        nombre: "Escuela de Iniciación Musical (NORA)",
        descripcion: "Educación musical desde los primeros años",
        descripcionLarga:
        "Fundamentos musicales, ritmo, canto y exploración de instrumentos con niveles progresivos.",
        objetivos: [
        "Desarrollar oído y sensibilidad musical",
        "Aprender fundamentos teóricos",
        "Fomentar práctica y trabajo en conjunto"
        ],
        edadTarget: "3 a 12 años",
        duracion: "Niveles progresivos anuales",
        modalidad: "Presencial",
        horario: { dias: "Lunes y Miércoles", horas: "3:00 PM - 4:30 PM" },
        icono: "musica",
        color: "from-orange-400 to-pink-400"
    },
    {
        id: "bespro",
        nombre: "Becas Estudiantiles y Profesionales (BESPRO)",
        descripcion: "Desarrollo de habilidades y acceso a oportunidades",
        descripcionLarga:
        "Acompañamiento académico/financiero con desarrollo socioemocional, habilidades blandas y proyección profesional.",
        objetivos: [
        "Desarrollar inteligencia emocional",
        "Fortalecer comunicación y liderazgo",
        "Conectar con empleabilidad y emprendimiento"
        ],
        edadTarget: "14 a 25 años",
        duracion: "Programa modular de 18 meses",
        modalidad: "Híbrida con énfasis práctico",
        horario: { dias: "Sábados", horas: "8:00 AM - 12:00 PM" },
        icono: "estrella",
        color: "from-purple-300 to-orange-300"
    },
    {
        id: "programa-meditacion",
        nombre: "Programa de Meditación",
        descripcion: "Prácticas para paz interior y bienestar",
        descripcionLarga:
        "Sesiones guiadas de meditación y técnicas de respiración inspiradas en sanación pránica para equilibrio emocional y claridad mental.",
        objetivos: [
        "Reducir estrés y ansiedad",
        "Mejorar atención y claridad",
        "Fomentar hábitos de autocuidado"
        ],
        edadTarget: "Adolescentes y adultos",
        duracion: "Ciclos continuos",
        modalidad: "Presencial y virtual",
        horario: { dias: "Martes y Viernes", horas: "7:00 PM - 8:00 PM" },
        icono: "crecimiento",
        color: "from-pink-300 to-purple-300"
    },
    {
        id: "apadrinamiento",
        nombre: "Apadrinamiento",
        descripcion: "Apoyo directo y personalizado a familias",
        descripcionLarga:
        "Vínculo entre benefactores y familias, con acompañamiento educativo y desarrollo de proyectos sostenibles.",
        objetivos: [
        "Estabilidad económica familiar",
        "Acompañamiento integral",
        "Desarrollo de proyectos familiares"
        ],
        edadTarget: "Familias",
        duracion: "Compromiso mínimo de 2 años",
        modalidad: "Híbrida",
        horario: { dias: "A coordinar", horas: "Según plan familiar" },
        icono: "corazon",
        color: "from-orange-400 to-pink-500"
    }
]

export const horariosProgramas: HorarioData[] = [
    {
        programa: "Refuerzo Escolar",
        dias: "Lunes a Viernes", 
        horario: "2:00 PM - 5:00 PM",
        modalidad: "Presencial / Virtual"
    },
    {
        programa: "Artes & Pintura",
        dias: "Martes y Jueves",
        horario: "3:00 PM - 5:00 PM", 
        modalidad: "Presencial"
    },
    {
        programa: "Danza",
        dias: "Miércoles y Sábados",
        horario: "4:00 PM - 6:00 PM",
        modalidad: "Presencial"
    },
    {
        programa: "Iniciación Musical",
        dias: "Lunes y Miércoles",
        horario: "3:00 PM - 4:30 PM",
        modalidad: "Presencial"
    },
    {
        programa: "BESPRO",
        dias: "Sábados",
        horario: "8:00 AM - 12:00 PM",
        modalidad: "Híbrida"
    }
]

export const compromisosLista = [
    "Todos nuestros programas son completamente gratuitos",
    "Proporcionamos materiales y recursos necesarios",
    "Seguimiento personalizado del progreso de cada participante",
    "Apoyo emocional y académico integral",
    "Oportunidades de participación en eventos y presentaciones",
    "Conexión con redes de apoyo comunitario y profesional"
]