import type { Proyectos } from "../types"

export const proyectos : Proyectos[] = [
    { 
        id: '1', 
        name: 'proyecto1', 
        title : 'Plataforma de Métricas de Meta', 
        content: 'Plataforma Web que muestra metricas de las redes sociales de Facebook e Instagram mediante graficos, usando la Api Graph de Meta.',
        imagen: ['Plataforma-Meta/Plataforma-Metricas', 'Plataforma-Meta/Metricas-1', 'Plataforma-Meta/Metricas-4'],
        link: '',
        link_github: 'https://github.com/M4UR1CIO/Meta-Metricas-Frontend',
        tecnologias: ['TypeScript', 'React', 'Python', 'Flask', 'MySQL', 'Tailwind', 'Api Graph de Meta']
    },
    { 
        id: '2', 
        name: 'proyecto2', 
        title : 'Portafolio Personal', 
        content: 'Portafolio que muestra y presenta mis habilidades y mis proyectos realizados.',
        imagen: ['Portafolio/Portafolio-Dark', 'Portafolio/Portafolio-Light'],
        link: 'https://portafolio-mauriciopalomino.vercel.app/',
        link_github: 'https://github.com/M4UR1CIO/Portafolio',
        tecnologias: ['TypeScript', 'React', 'Tailwind', 'CSS']
    },
        
    { 
        id: '3', 
        name: 'proyecto3', 
        title : 'Calculadora de Propinas y Consumo',
        content: 'Aplicación web que permite calcular el monto total a pagar, incluyendo propinas. Permitiendo el acumulado de cada Menú y el porcentaje de propina.', 
        imagen: ['Calculadora/Calculadora', 'Calculadora/Calculadora-2'],
        link: 'https://calculadora-propinas-snowy.vercel.app/',
        link_github: 'https://github.com/M4UR1CIO/Calculadora-Propinas',
        tecnologias: ['TypeScript', 'React', 'Tailwind']
    },
    { 
        id: '4', 
        name: 'proyecto4', 
        title : 'Sistema de Control de Calorias', 
        content: 'Sistema web que permite llevar un control de cálorias quemadas y consumidas, muestra el resumen de calorias consumidas y quemadas.',
        imagen: ['Calorias/Contador-Calorias', 'Calorias/Contador-Calorias-2'],
        link: 'https://control-de-calorias.vercel.app/', 
        link_github: 'https://github.com/M4UR1CIO/Control-de-Calorias',
        tecnologias: ['TypeScript', 'React', 'Tailwind']
    },
    { 
        id: '5', 
        name: 'proyecto5', 
        title : 'Página Web de GuitarLA',
        content: 'Pagina Web que muestra diferentes productos de GuitarLA, tiene un diseño minimalista y facil de usar.', 
        imagen: ['GuitarLA/GuitarLA', 'GuitarLA/GuitarLA-2'],
        link: 'https://guitar-la-eight.vercel.app/',
        link_github: 'https://github.com/M4UR1CIO/GuitarLA',
        tecnologias: ['TypeScript', 'React', 'CSS']
    },
    { 
        id: '6', 
        name: 'proyecto6', 
        title : 'Planificador de Gastos',
        content: 'Aplicacion Web que permite la Planificación de Gastos, permite el ingreso del presupuesto, asi como la inclusion de los gastos por categoria. ', 
        imagen: ['Gastos/Planificador-Gastos', 'Gastos/Planificador-Gastos-2'],
        link: 'https://planificador-de-gastos-khaki.vercel.app/',
        link_github: 'https://github.com/M4UR1CIO/Planificador-de-Gastos',
        tecnologias: ['TypeScript', 'React', 'Tailwind']
    },
    {
        id: '7',
        name: 'proyecto7',
        title: 'Buscador de bedidas y recetas',
        content: 'Sistema web que permite la busqueda de bebidas y recetas, asi como añadirlas a una sección de favoritos, se uso React Router DOM.',
        imagen: ['Recetas/Buscador-Recetas', 'Recetas/Buscador-Recetas-2'],
        link: 'https://buscador-react-router-dom.vercel.app/',
        link_github: 'https://github.com/M4UR1CIO/Buscador-React-Router-DOM',
        tecnologias: ['TypeScript', 'React', 'React Router DOM', 'Tailwind']
    }
]