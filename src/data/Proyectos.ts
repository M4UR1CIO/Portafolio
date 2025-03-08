import type { Proyectos } from "../types"

export const proyectos : Proyectos[] = [
    { 
        id: '1', 
        name: 'proyecto1', 
        title : 'Plataforma de Métricas de Meta', 
        content: 'Plataforma Web que muestra metricas de las redes sociales de Facebook e Instagram mediante graficos, usando la Api Graph de Meta.',
        imagen: 'Plataforma-Metricas',
        link: '',
        link_github: 'https://github.com/M4UR1CIO/Meta-Metricas-Frontend',
        tecnologias: ['TypeScript', 'React', 'Python', 'Flask', 'MySQL', 'Tailwind', 'Api Graph de Meta']
    },
        
    { 
        id: '2', 
        name: 'proyecto2', 
        title : 'Calculadora de Propinas y Consumo',
        content: 'Aplicación web que permite calcular el monto total a pagar, incluyendo propinas. Permitiendo el acumulado de cada Menú y el porcentaje de propina.', 
        imagen: 'Calculadora',
        link: 'https://dynamic-tartufo-ffc886.netlify.app/',
        link_github: 'https://github.com/M4UR1CIO/Calculadora-Propinas',
        tecnologias: ['TypeScript', 'React', 'Tailwind']
    },
    { 
        id: '3', 
        name: 'proyecto3', 
        title : 'Sistema de Control de Calorias', 
        content: 'Sistema web que permite llevar un control de cálorias quemadas y consumidas, muestra el resumen de calorias consumidas y quemadas.',
        imagen: 'Contador-Calorias',
        link: 'https://curious-mermaid-67a8ad.netlify.app/', 
        link_github: 'https://github.com/M4UR1CIO/Control-de-Calorias',
        tecnologias: ['TypeScript', 'React', 'Tailwind']
    },
    { 
        id: '4', 
        name: 'proyecto4', 
        title : 'Página Web de GuitarLA',
        content: 'Pagina Web que muestra diferentes productos de GuitarLA, tiene un diseño minimalista y facil de usar.', 
        imagen: 'GuitarLA',
        link: 'https://joyful-meringue-163536.netlify.app/',
        link_github: 'https://github.com/M4UR1CIO/GuitarLA',
        tecnologias: ['TypeScript', 'React', 'CSS']
    },
    { 
        id: '5', 
        name: 'proyecto5', 
        title : 'Planificador de Gastos',
        content: 'Aplicacion Web que permite la Planificación de Gastos, permite el ingreso del presupuesto, asi como la inclusion de los gastos por categoria. ', 
        imagen: 'Planificador-Gastos',
        link: 'https://leafy-conkies-4c381f.netlify.app/',
        link_github: 'https://github.com/M4UR1CIO/Planificador-de-Gastos',
        tecnologias: ['TypeScript', 'React', 'Tailwind']
    },
    {
        id: '6',
        name: 'proyecto6',
        title: 'Buscador de bedidas y recetas',
        content: 'Sistema web que permite la busqueda de bebidas y recetas, asi como añadirlas a una sección de favoritos, se uso React Router DOM.',
        imagen: 'Buscador-Recetas',
        link: 'https://buscador-react-router-dom.vercel.app/',
        link_github: 'https://github.com/M4UR1CIO/Buscador-React-Router-DOM',
        tecnologias: ['TypeScript', 'React', 'React Router DOM', 'Tailwind']
    }
]