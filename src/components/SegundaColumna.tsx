import { Proyectos } from "../types"
// import Modal from "./Modal"
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiPostgresql, SiFlask, SiTypescript } from "react-icons/si";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

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
        <div className="bg-white dark:bg-slate-900 text-gray-600 dark:text-slate-400 mt-20 lg:mt-3 lg:pl-0 lg:pr-1 mb-10 lg:overflow-y-auto transition-colors">
            <div
              id='sobremi' 
              className='pl-5 lg:mt-12 pt-1 pr-5 lg:pl-0 lg:pr-0 mb-24 md:mb-32 lg:mb-40 space-y-12'
            >
              <div className="space-y-5">
                <p>
                Soy un desarrollador web apasionado por crear soluciones innovadoras y funcionales que combinan tecnología y diseño. Con experiencia en <span className='font-semibold text-cyan-900 dark:text-slate-300 transition-colors'>React, JavaScript, TypeScript, Python y Flask</span>, he desarrollado plataformas interactivas y bots inteligentes integrados con la <span className='font-semibold text-cyan-900 dark:text-slate-300 transition-colors'>API Graph de Meta</span>.
              </p>

              <p>
                Me especializo en el desarrollo <span className='font-semibold text-cyan-900 dark:text-slate-300 transition-colors'>frontend y backend</span>, enfocándome en la optimización de interfaces, la visualización de datos en tiempo real y la integración de sistemas seguros y escalables. Además, cuento con experiencia en el <span className='font-semibold text-cyan-900 dark:text-slate-300 transition-colors'>consumo y desarrollo de APIs REST</span>, permitiendo la conexión eficiente entre diversas aplicaciones y servicios.
              </p>
              </div>
              
              <div>
                <h2 className="text-lg font-bold text-gray-800 dark:text-slate-200 uppercase transition-colors">Tecnologías y Herramientas:</h2>
                <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 p-1 group/list">
                  
                  {tecnologias.map((tech, index) => (
                    <div
                      key={index}
                      className="group relative flex flex-col items-center justify-center bg-transparent py-4 shadow-xs hover:shadow-slate-500 hover:scale-105 transition-all duration-300 text-2xl lg:hover:opacity-100! lg:group-hover/list:opacity-40 cursor-pointer"
                      onClick={() => window.open(tech.link, '_blank')}
                    >
                      {tech.icono}
                      <p className="text-sm text-gray-900 dark:text-slate-100 mt-2">{tech.nombre}</p>
                    </div>
                  ))}
                </section>
              </div>
              
            </div>
              
            <ul 
              id="experiencia"
              className="ml-5 pr-4 relative border-s border-gray-400 dark:border-gray-700 lg:ml-4 group/list space-y-5 mb-24 md:mb-32 lg:mb-40"
            >
              <li className="group mb-5 ms-3 lg:ms-6 p-3 bg-transparent border border-transparent rounded-lg transition-all duration-300 ease-in-out lg:hover:bg-slate-200/50 dark:lg:hover:bg-slate-800/50 lg:hover:border-slate-200 dark:lg:hover:border-slate-800 lg:hover:shadow-xs lg:hover:shadow-slate-500 dark:lg:hover:shadow-slate-800 lg:hover:opacity-100! lg:group-hover/list:opacity-40"> 
           
                <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -start-3.5 ring-6 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg 
                    className="w-3.5 h-3.5 text-blue-800 dark:text-blue-300" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 group-hover:text-black dark:text-slate-200 dark:group-hover:text-teal-200 gap-x-1 transition-colors">
                    Prog. Full Stack - TGH Technology Solution   
                    <span>
                      <GoArrowUpRight 
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ease-in-out" 
                        strokeWidth={0.6}
                    />
                    </span>
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-cyan-700 dark:text-gray-500 transition-colors">
                    Agosto 2024 - Diciembre 2024
                  </time>
                  <div className="text-sm font-normal text-gray-600 dark:text-slate-400">
                    <ul className="list-disc list-inside">
                      <li>Diseñé y desarrollé una plataforma web para la gestión de métricas y generación de informes de redes sociales, integrando la Api Graph de Meta.</li>
                      <li>Implementé dashboards interactivos en React y TypeScript para visualizar métricas en tiempo real.</li>
                      <li>Contribui en el backend de proyectos utilizando Express y TypeScript, asegurando la escalabilidad
                      y rendimiento.</li>
                    </ul>
                  </div>
              </li>
              <li className="group mb-5 ms-3 lg:ms-6 p-3 bg-transparent border border-transparent rounded-lg transition-all duration-300 ease-in-out lg:hover:bg-slate-200/50 dark:lg:hover:bg-slate-800/50 lg:hover:border-slate-200 dark:lg:hover:border-slate-800 lg:hover:shadow-xs lg:hover:shadow-slate-500 dark:lg:hover:shadow-slate-800 lg:hover:opacity-100! lg:group-hover/list:opacity-40">  
                <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -start-3.5 ring-6 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg 
                    className="w-3.5 h-3.5 text-blue-800 dark:text-blue-300" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </span>
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 group-hover:text-black dark:text-slate-200 dark:group-hover:text-teal-200 gap-x-1 transition-colors">
                  Practicante Front End - Digital Buho S.A.C
                  <span>
                    <GoArrowUpRight 
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ease-in-out" 
                      strokeWidth={0.6}
                  />
                  </span>
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-cyan-700 dark:text-gray-500 transition-colors">
                  Febrero 2024 - Mayo 2024
                </time>
                <div className="space-y-2 text-sm font-normal text-gray-600 dark:text-slate-400">
                  <ul className="list-disc list-inside">
                    <li>Contribuí al diseño y desarrollo de prototipos interactivos en Figma para una aplicación móvil, alineados con las necesidades de la empresa y las mejores prácticas de diseño UX/UI.</li>
                    <li>Brindé soporte en la creación y mejora del diseño web de aplicaciones empresariales, optimizando la experiencia de usuario y la coherencia visual.</li>
                  </ul>
                </div>

                
              </li>
            </ul>

            <ul 
                id='proyectos' 
                className="group/list space-y-10 lg:space-y-4 ml-1"
            >
              {proyectos.map((proyecto) => (
                <li 
                  key={proyecto.id}
                >
                  <div className="group relative lg:grid p-3 bg-slate-300/50 dark:bg-slate-800/50 dark:lg:bg-transparent lg:bg-transparent hover:bg-slate-200/50 dark:hover:bg-slate-800/50 border border-white dark:border-slate-900 hover:border-slate-200 shadow shadow-slate-500 lg:shadow-transparent dark:hover:border-slate-800 rounded-lg hover:shadow-xs lg:hover:shadow-slate-500 dark:hover:shadow-slate-800 transition-all duration-300 ease-in-out mx-5 md:mx-7 lg:mx-0 scale-105 lg:scale-100 items-start lg:hover:opacity-100! lg:group-hover/list:opacity-40">
                  {/* <div className="group relative lg:grid p-3 lg:bg-transparent hover:bg-slate-800/50 border border-slate-900 hover:border-slate-800 rounded-lg hover:shadow-xs hover:shadow-slate-800 transition-all duration-300 ease-in-out mx-5 md:mx-7 lg:mx-0 scale-105 lg:scale-100 items-start lg:hover:opacity-100! lg:group-hover/list:opacity-40"> */}


                  <header className="grid md:grid-flow-col lg:pt-1 text-slate-500 uppercase text-sm font-medium pb-4 items-center justify-center md:justify-between">
                    {/* Imagen con efecto zoom */}
                    <div className="w-full md:w-96 lg:w-96 h-auto overflow-hidden rounded-md border-2 border-double dark:border-slate-700 transition-all duration-300 ease-in-out group-hover:border-teal-950 dark:group-hover:border-teal-200">
                    <div className="w-full max-w-md mx-auto">
                      {/* Componente Swiper para el carrusel */}
                      <Swiper
                        scrollbar={{
                          hide: true,
                        }}
                        slidesPerView={1}
                        spaceBetween={30}
                        mousewheel={true}
                        modules={[ Scrollbar, Mousewheel ]}
                        effect="fade" 
                        loop={true}
                        className="text-black"
                      >
                        {proyecto.imagen.map((img, index) => (
                          <SwiperSlide key={index}>
                            <img
                              className="hover:scale-105 duration-300 ease-in-out"
                              src={`/images/${img}.png`}
                              alt={`${proyecto.name} - ${index + 1}`}
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                      
                    </div>

                    {/* Contenedor del botón alineado abajo */}
                    <div className="flex flex-row md:flex-col lg:flex-col h-full justify-center md:justify-end items-center space-x-2 md:space-x-0 space-y-0 md:space-y-2 mt-2 md:mt-0 ">
                      {proyecto.id !== '1' && (
                        <button 
                          className="flex justify-between w-max-[160px] bg-slate-300 dark:bg-slate-500 px-4 py-2 rounded-xl items-center gap-3 text-gray-900 dark:text-white transition-all duration-300 ease-in-out hover:scale-105 border border-slate-900 hover:border-slate-500 hover:bg-gray-700 dark:hover:bg-slate-200 hover:text-slate-100 dark:hover:text-teal-900 cursor-pointer"
                          onClick={() => window.open(proyecto.link, "_blank")}
                        >
                          Ver Proyecto
                        <FaGlobe
                          size={22}
                        />
                        </button>
                      )}
                      <button 
                        className="flex justify-between w-max-[160px] bg-black/90 dark:bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl items-center gap-2 text-slate-200 transition-all duration-300 ease-in-out hover:scale-105 border border-slate-900 hover:border-slate-950 hover:bg-slate-300 dark:hover:bg-black hover:text-black dark:hover:text-white cursor-pointer"
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
                      <h2 className='flex items-center mb-3 gap-x-1 text-gray-900 dark:text-slate-200 dark:group-hover:text-teal-200 font-bold text-lg transition-colors'>
                        {proyecto.title} 
                        <span>
                          <GoArrowUpRight 
                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform ease-in-out" 
                            strokeWidth={0.6}
                        />
                        </span>
                      </h2>

                      <p className='text-sm mb-2 '>
                          {proyecto.content}
                      </p>
                      
                      <ul className="flex flex-wrap gap-3 text-sm pt-1 lg:py-1 items-center">
                        {proyecto.tecnologias.map((tecnologia, index ) => (
                          <li
                            key={index}
                            className="p-1 bg-teal-700/20 dark:bg-teal-400/10 text-teal-800 dark:text-teal-300 rounded-xl px-3 font-medium transition-colors"
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
              <footer className="text-center text-sm text-gray-600 dark:text-slate-500 px-10 lg:px-0 transition-colors">
                © 2025 Mauricio Palomino. Desarrollado con <span className="font-medium text-gray-900 dark:text-slate-400 transition-colors">React, TypeScript y Tailwind CSS</span>. Implementado en <span className="font-medium text-gray-900 dark:text-slate-400 transition-colors">Vercel</span>.
              </footer>
            </div>
          </div>
    </>
  )
}