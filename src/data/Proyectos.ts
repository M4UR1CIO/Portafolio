import type { Proyectos } from "../types"

export const proyectos : Proyectos[] = [
    { 
        id: '1', 
        name: 'proyecto1', 
        title : 'Plataforma de Métricas con la API Gaph de Meta', 
        content: 'Plataforma Web que muestra metricas de las redes sociales de Facebook e Instagram mediante graficos, usando la Api Graph de Meta. Los datos mostrados son en tiempo real y se pueden filtrar por fechas. Ademas de la descarga de un informe de ambas redes sociales.',
        imagen: 'Plataforma-Metricas',
        link: '',
        tecnologias: ['TypeScript', 'React', 'Python', 'Flask', 'MySQL', 'Tailwind', 'Api Graph de Meta']
    },
        
    { 
        id: '2', 
        name: 'proyecto2', 
        title : 'Calculadora de Propinas y Consumo',
        content: 'Aplicación web que permite calcular el monto total a pagar, incluyendo propinas. La interfaz es intuitiva y fácil de usar, permitiendo el acumulado de cada Menú y el porcentaje de propina deseado. La aplicación muestra el monto total a pagar, incluyendo la propina.', 
        imagen: 'Calculadora',
        link: 'https://dynamic-tartufo-ffc886.netlify.app/',
        tecnologias: ['TypeScript', 'React', 'Tailwind']
    },
    { 
        id: '3', 
        name: 'proyecto3', 
        title : 'Sistema de Control de Calorias', 
        content: 'Sistema web que permite llevar un contros de calorias quemadas y consumidas, ademas de mostrar el resumen de calorias consumidas y quemadas. Permitiendo el registro de alimentos y ejercicios. La interfaz es facil de usar.',
        imagen: 'Contador-Calorias',
        link: 'https://curious-mermaid-67a8ad.netlify.app/', 
        tecnologias: ['TypeScript', 'React', 'Tailwind']
    },
    { 
        id: '4', 
        name: 'proyecto4', 
        title : 'Página Web de GuitarLA',
        content: 'Pagina Web que muestra diferentes productos de GuitarLA, tiene un diseño minimalista y facil de usar. Ademas de tener un carrito de compras.', 
        imagen: 'GuitarLA',
        link: 'https://joyful-meringue-163536.netlify.app/',
        tecnologias: ['TypeScript', 'React', 'CSS']
    },
    { 
        id: '5', 
        name: 'proyecto5', 
        title : 'Planificador de Gastos',
        content: 'Aplicacion Web que permite la Planificación de Gastos, permite el ingreso del presupuesto, asi como la inclusion de los gastos por categoria. Permitiendo el registro de cada gasto y mostrando el Presupuesto. La interfaz es moderna y facil de usar.', 
        imagen: 'Planificador-Gastos',
        link: 'https://leafy-conkies-4c381f.netlify.app/',
        tecnologias: ['TypeScript', 'React', 'Tailwind']
    },
    {
        id: '6',
        name: 'proyecto6',
        title: 'Pagina Web Festival de Musica',
        content: 'Pagina Web que muestra diferentes secciones, tiene un diseño minimalista',
        imagen: 'Festival-Musica',
        link: 'https://luminous-jelly-998350.netlify.app/',
        tecnologias: ['JavaScript', 'SASS'],
    }
]