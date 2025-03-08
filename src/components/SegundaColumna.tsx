import { Proyectos } from "../types"
// import Modal from "./Modal"
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiPostgresql, SiFlask, SiTypescript } from "react-icons/si";

type SegundaColumnaProps = {
    proyectos: Proyectos[]
}

const tecnologias = [
  { nombre: "HTML", icono: <FaHtml5 className="text-orange-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { nombre: "CSS", icono: <FaCss3Alt className="text-blue-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { nombre: "Tailwind", icono: <SiTailwindcss className="text-teal-400" />, link: "https://tailwindcss.com/" },
  { nombre: "JavaScript", icono: <FaJs className="text-yellow-300" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { nombre: "TypeScript", icono: <SiTypescript className="text-blue-500" />, link: "https://www.typescriptlang.org/" },
  { nombre: "React", icono: <FaReact className="text-blue-400" />, link: "https://react.dev/" },
  { nombre: "Python", icono: <FaPython className="text-yellow-500" />, link: "https://www.python.org/" },
  { nombre: "Flask", icono: <SiFlask className="text-gray-600" />, link: "https://flask.palletsprojects.com/" },
  { nombre: "PostgreSQL", icono: <SiPostgresql className="text-blue-600" />, link: "https://www.postgresql.org/" },
  { nombre: "SQL", icono: <FaDatabase className="text-gray-700" />, link: "https://www.w3schools.com/sql/" },
  { nombre: "MySQL", icono: <SiMysql />, link: "https://www.mysql.com/" }
];

export default function SegundaColumna({proyectos}: SegundaColumnaProps) {

  return (
    <>
        {/* Segunda columna (Scroll) */}
        <div className="bg-slate-900 text-slate-400 mt-20 lg:mt-3 lg:pl-0 lg:pr-1 mb-10 lg:overflow-y-auto">
            <div
              id='inicio' 
              className='pl-5 lg:mt-12 pt-1 pr-6 lg:pl-0 lg:pr-0 space-y-5 mb-24 md:mb-32 lg:mb-40'
            >
              <p>
                Soy un desarrollador web apasionado por crear soluciones innovadoras y funcionales que combinan tecnologia y diseño. Con experiencia en herramientas moderas como <span className='font-semibold text-slate-300'>React, JavaScript, TypeScript, Python y Flask,</span> he trabajado en proyectos que van desde plataformas interactivas hasta bots inteligentes integrados con servicios como la <span className='font-semibold text-slate-300'>API Graph de Meta</span>.
              </p>

              <p className="">
                Me especializo en el desarrollo frontend y backend, enfocándome en la optimización de interfaces, la visualización de datos en tiempo real y la integración de sistemas seguros y escalables. Además, disfruto explorar nuevas tecnologías y aprender continuamente para seguir creando productos de alto impacto.
              </p>
              <h2 className="text-lg font-bold text-slate-200 uppercase">Tecnologías y Herramientas:</h2>
              <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-2 group/list">
                
                {tecnologias.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative flex flex-col items-center justify-center bg-slate-900 py-4 rounded-lg shadow-sm hover:shadow-slate-500 hover:scale-105 transition-all duration-300 text-2xl lg:hover:!opacity-100 lg:group-hover/list:opacity-40 cursor-pointer"
                    onClick={() => window.open(tech.link, '_blank')}
                  >
                    {tech.icono}
                    <p className="text-sm text-white mt-2">{tech.nombre}</p>
                  </div>
                ))}
              </section>

            </div>

            <ul 
              id='experiencia'
              className="group/list space-y-10 mb-24 md:mb-32 lg:mb-40"
            >
              <div className='group relative lg:grid grid-cols-8 p-3 bg-slate-800/50 lg:bg-transparent hover:bg-slate-800/50 border border-slate-900 hover:border-slate-800 rounded-md hover:shadow-sm hover:shadow-slate-800 transition-all duration-300 ease-in-out mx-5 md:mx-7 lg:mx-0 scale-105 lg:scale-100 lg:hover:!opacity-100 lg:group-hover/list:opacity-40'>
                <header className='lg:pt-1 col-span-2 text-slate-300/60 uppercase text-sm font-medium'>
                    Agosto - Dic.
                    <span> 2024</span>
                </header>

                <div className='lg:pl-3 col-span-6'>
                    <h2 className='flex font-bold text-lg mb-3 items-center text-slate-200 group-hover:text-teal-200 gap-x-1'>Prog. Full Stack - TGH Technology Solution 
                      <span>
                        <GoArrowUpRight 
                          className=" group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ease-in-out" 
                          strokeWidth={0.6}
                      /></span>
                    </h2> 
                  
                    <div className="space-y-2 ">
                      <p className='text-sm'> 
                        Diseñé y desarrollé una plataforma web para la gestión de métricas y generación de informes de redes sociales, integrando los servicios de Meta API Graph
                      </p>
                      <p className="text-sm">
                        Implementé dashboards interactivos en React y TypeScript para visualizar métricas en tiempo real de Facebook e Instagram.
                      </p>
                      <p className='text-sm'>
                        Tambien contribui en el backend de proyectos utilizando Express y TypeScript, asegurando la escalabilidad
                        y rend/imiento.
                      </p>
                    </div>
                    
                </div>
              </div>
              
              <div className='group relative lg:grid grid-cols-8 p-3 bg-slate-800/50 lg:bg-transparent hover:bg-slate-800/50 border border-slate-900 hover:border-slate-800 rounded-md hover:shadow-sm hover:shadow-slate-800 transition-all duration-300 ease-in-out mx-5 md:mx-7 lg:mx-0 scale-105 lg:scale-100 lg:hover:!opacity-100 lg:group-hover/list:opacity-40'>
                <header className='lg:pl-0 lg:pt-1 col-span-2 text-slate-300/60 uppercase text-sm font-medium'>
                  Feb. - Mayo
                  <span> 2024</span>
                  
                </header>
                <div className='lg:pl-3 col-span-6'>
                  <h2 className='flex font-bold text-lg mb-3 items-center text-slate-200 group-hover:text-teal-200 gap-x-1'>Practicante Front End - Digital Buho S.A.C 
                    <span>
                      <GoArrowUpRight 
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ease-in-out" 
                      strokeWidth={0.6}
                    /></span>
                  </h2>
                  
                  <div className="space-y-2">
                    <p className='text-sm'>
                      Contribuí al diseño y desarrollo de prototipos interactivos en Figma para una aplicación móvil,
                      alineados con las necesidades de la empresa y las mejores prácticas de diseño UX/UI.
                    </p>
                    <p className='text-sm'>
                      Brindé soporte en la creación y mejora del diseño web de aplicaciones empresariales,
                      optimizando la experiencia de usuario y la coherencia visual.
                    </p>
                  </div>
                  
                </div>
              </div>
            </ul>

            <ul 
                id='proyectos' 
                className="group/list space-y-10 lg:space-y-4"
            >
              {proyectos.map((proyecto) => (
                <li 
                  key={proyecto.id}
                >
                  <div className="group relative lg:grid p-3 bg-slate-800/50 lg:bg-transparent hover:bg-slate-800/50 border border-slate-900 hover:border-slate-800 rounded-lg hover:shadow-sm hover:shadow-slate-800 transition-all duration-300 ease-in-out mx-5 md:mx-7 lg:mx-0 scale-105 lg:scale-100 items-start lg:hover:!opacity-100 lg:group-hover/list:opacity-40">

                  <header className="grid md:grid-flow-col lg:pt-1 text-slate-500 uppercase text-sm font-medium pb-4 items-center justify-center md:justify-between">
                    {/* Imagen con efecto zoom */}
                    <div className="w-full md:w-96 lg:w-96 h-auto overflow-hidden rounded-md border-2 border-double border-slate-700 transition-all duration-300 ease-in-out group-hover:border-teal-200">
                      <img
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                        src={`/images/${proyecto.imagen}.png`}
                        alt={proyecto.name}
                      />
                    </div>

                    {/* Contenedor del botón alineado abajo */}
                    <div className="flex flex-row md:flex-col lg:flex-col h-full justify-end items-center space-x-2 md:space-x-0 space-y-1 mt-2 md:mt-0">
                      {proyecto.id !== '1' && (
                        <button 
                          className="flex justify-between w-[160px] bg-slate-500 px-4 py-2 rounded-xl items-center gap-2 text-white transition-all duration-300 ease-in-out hover:scale-105 border border-slate-900 hover:border-slate-500 hover:bg-slate-200 hover:text-teal-900"
                          onClick={() => window.open(proyecto.link, "_blank")}
                        >
                          Ver Proyecto
                        <FaGlobe
                          size={22}
                        />
                        </button>
                      )}
                      <button 
                        className="flex justify-between w-[160px] bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl items-center gap-2 text-slate-200 transition-all duration-300 ease-in-out hover:scale-105 border border-slate-900 hover:border-slate-950 hover:bg-black hover:text-white"
                        onClick={() => window.open(proyecto.link_github, "_blank")}
                      >
                        Ver en GitHub
                        <FaGithub 
                          size={22} 
                        />
                      </button>
                    </div>
                  </header>

                    <div className=''>
                      <h2 className='flex items-center mb-3 gap-x-1 text-slate-200 group-hover:text-teal-200 font-bold text-lg'>{proyecto.title} 
                        <span>
                          <GoArrowUpRight 
                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ease-in-out" 
                            strokeWidth={0.6}
                        />
                        </span>
                      </h2>

                      <p className='text-sm mb-2'>
                          {proyecto.content}
                      </p>
                      
                      <ul className="flex flex-wrap gap-3 text-sm pt-1 lg:py-1 items-center">
                        {proyecto.tecnologias.map((tecnologia, index )=> (
                          <li
                            key={index}
                            className="p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium"
                          >
                            {tecnologia}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="lg:mb-10 mt-20">
              <footer className="text-center text-sm text-slate-500 px-10 lg:px-0">
                © 2025 Mauricio Palomino. Desarrollado con <span className="font-medium text-slate-400">React, TypeScript y Tailwind CSS</span>. Implementado en <span className="font-medium text-slate-400">Vercel</span>.
              </footer>
            </div>
          </div>
    </>
  )
}