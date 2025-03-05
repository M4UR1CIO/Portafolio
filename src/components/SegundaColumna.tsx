import { useState, useEffect } from "react"
import { Proyectos } from "../types"
import Modal from "./Modal"
import { GoArrowUpRight } from "react-icons/go";

type SegundaColumnaProps = {
    proyectos: Proyectos[]
}

export default function SegundaColumna({proyectos}: SegundaColumnaProps) {

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Cuando el modal está abierto, desactiva el scroll
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Limpieza al desmontar el componente
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]); // Ejecuta el efecto cada vez que cambia isOpen

  return (
    <>
        {/* Segunda columna (Scroll) */}
        <div className="bg-slate-900 text-slate-400 mt-10 lg:mt-3 lg:pl-0 lg:pr-1 mb-10 lg:overflow-y-auto">
            <div
              id='inicio' 
              className='pl-5 lg:mt-12 pt-1 pr-6 lg:pl-0 lg:pr-1 space-y-5 mb-24 md:mb-32 lg:mb-40'
            >
              <p>
                Soy un desarrollador web apasionado por crear soluciones innovadoras y funcionales que combinan tecnologia y diseño. Con experiencia en herramientas moderas como <span className='font-semibold text-slate-300'>React, JavaScript, TypeScript, Python y Flask,</span> he trabajado en proyectos que van desde plataformas interactivas hasta bots inteligentes integrados con servicios como la <span className='font-semibold text-slate-300'>API Graph de Meta</span>.
              </p>

              <p>
                Me especializo en el desarrollo frontend y backend, enfocándome en la optimización de interfaces, la visualización de datos en tiempo real y la integración de sistemas seguros y escalables. Además, disfruto explorar nuevas tecnologías y aprender continuamente para seguir creando productos de alto impacto.
              </p>

              <p>
                Estoy comprometido con la creación de experiencias digitales impactantes, que no solo cumplan su función, sino que también marquen la diferencia para los usuarios. Mi objetivo es seguir creciendo como profesional y contribuir con mi conocimiento y habilidades a proyectos que requieran calidad, rendimiento y escalabilidad.
              </p>

            </div>

            <ul 
              id='experiencia'
              className="group/list space-y-8 mb-24 md:mb-32 lg:mb-40"
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
                  
                    <div className="space-y-2">
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
                    
                  <p className='text-sm mb-2'>
                    Contribuí al diseño y desarrollo de prototipos interactivos en Figma para una aplicación móvil,
                    alineados con las necesidades de la empresa y las mejores prácticas de diseño UX/UI.
                  </p>
                  <p className='text-sm'>
                    Brindé soporte en la creación y mejora del diseño web de aplicaciones empresariales,
                    optimizando la experiencia de usuario y la coherencia visual.
                  </p>
                </div>
              </div>
            </ul>

            <ul 
                id='proyectos' 
                className="group/list space-y-8 lg:space-y-6 mb-12 md:mb-16 lg:mb-24"
            >
              {proyectos.map((proyecto) => (
                <li 
                  key={proyecto.id}
                  onClick={proyecto.id === '1' 
                    ? () => setIsOpen(!isOpen) : 
                      () => window.open(proyecto.link, "_blank")}
                >
                  <div className="group relative lg:grid grid-cols-8 p-3 bg-slate-800/50 lg:bg-transparent hover:bg-slate-800/50 border border-slate-900 hover:border-slate-800  rounded-lg hover:shadow-sm hover:shadow-slate-800 transition-all duration-300 ease-in-out mx-5 md:mx-7 lg:mx-0 scale-105 lg:scale-100 items-start hover:cursor-pointer lg:hover:!opacity-100 lg:group-hover/list:opacity-40">

                    <header className='lg:pt-1 col-span-2 text-slate-500 uppercase text-sm font-medium pb-6'>
                      <img 
                        className='md:w-80 rounded-md border-4 border-double border-slate-700 group-hover:border-slate-200 transition-all duration-300 ease-in-out'
                        src={`/images/${proyecto.imagen}.png`} 
                        alt={proyecto.name} 
                      />
                    </header>

                    <div className='lg:pl-3 col-span-6'>
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
                      
                      <ul className="flex flex-wrap gap-3 text-sm pt-1 lg:p-1 items-center">
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
          <Modal 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
    </>
  )
}