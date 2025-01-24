import { FaLinkedin, FaWhatsapp, FaGithub, FaReact, FaBars } from 'react-icons/fa';
import { DiJavascript1, DiCss3, DiHtml5 } from 'react-icons/di';
import { SiTypescript, SiPython, SiFlask, SiTailwindcss, SiMysql } from 'react-icons/si';
import { useState } from 'react';
import styles from './styles/Gradient.module.css';

function App() {

  const[ position, setPosition ] = useState({x:0 , y:0})
  const[ menuOpen, SetMenuOpen ] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({
      x: e.pageX - 550,
      y: e.pageY - 500,
    })
  }

  return (
    <>
      <header className="z-10 bg-slate-950 sticky top-0">
        <div className="p-3 lg:p-0 xl:max-w-[1200px] m-auto grid grid-cols-1 lg:grid-cols-2 bg-slate-950 text-white">
          <div></div>

          <div className="flex justify-between items-center p-3">
            {/* Menú de navegación principal */}
            <ul className="flex gap-x-4 md:gap-x-10 text-base font-semibold uppercase">
              <li className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
                Inicio
              </li>
              <li className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
                Experiencia
              </li>
              <li className="hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
                Proyectos
              </li>
            </ul>

            {/* Ícono de despliegue para dispositivos móviles */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => SetMenuOpen(!menuOpen)}
                className={`transition-transform duration-300 hover:scale-110 ease-in-out ${
                  menuOpen ? 'text-emerald-200' : 'text-slate-300'
                }`}
              >
                <FaBars size={25}/> 
              </button>
            </div>

            {/* Íconos visibles siempre en pantallas grandes */}
            <ul className="hidden md:flex gap-x-1 md:gap-x-4">
              <li
                className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/mauricio-palomino-ayala-16a24a274/',
                    '_blank'
                  )
                }
              >
                <FaLinkedin className="text-slate-300 hover:text-emerald-200" size={28} />
              </li>
              <li
                className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
                onClick={() =>
                  window.open('https://wa.me/970828781?text=Hola%20me%20interesa%20tu%20servicio', '_blank')
                }
              >
                <FaWhatsapp className="text-slate-300 hover:text-emerald-200" size={28} />
              </li>
              <li
                className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
                onClick={() => window.open('https://github.com/M4UR1CIO', '_blank')}
              >
                <FaGithub className="text-slate-300 hover:text-emerald-200" size={28} />
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'block' : 'hidden'
          } bg-slate-950 absolute left-0 right-0 py-3 duration-500 rounded-b-2xl`}
        >
          
          <ul className="flex flex-col gap-y-4 items-center">
            <li
              className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
              onClick={() =>
                window.open('https://www.linkedin.com/in/mauricio-palomino-ayala-16a24a274/', '_blank')
              }
            >
              <FaLinkedin className="text-slate-300 hover:text-emerald-200" size={28} />
            </li>
            <li
              className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
              onClick={() =>
                window.open('https://wa.me/970828781?text=Hola%20me%20interesa%20tu%20servicio', '_blank')
              }
            >
              <FaWhatsapp className="text-slate-300 hover:text-emerald-200" size={28} />
            </li>
            <li
              className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
              onClick={() => window.open('https://github.com/M4UR1CIO', '_blank')}
            >
              <FaGithub className="text-slate-300 hover:text-emerald-200" size={28} />
            </li>
          </ul>
        </div>
      </header>

      <section
        className={`pt-5 md:pt-10 bg-slate-900 min-h-screen flex justify-center overflow-hidden`}
        onMouseMove={handleMouseMove}
      >
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-[1200px] relative `}>
          
          <div
            className={`z-10 absolute w-[800px] h-[800px] rounded-full pointer-events-none blur-3xl ease-in-out ${styles.gradientRadial} hidden lg:block`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
          ></div>
          <div></div>
          {/* Primera columna (Fija) */}
          <div className="pr-6 pl-3 bg-slate-900 rounded-lg lg:fixed top-24 lg:h-5/6 flex flex-col justify-between">
            <div className='max-w-[600px]'>
              <h1 className='text-5xl font-bold text-slate-300 hover:cursor-pointer hover:text-slate-200 pl-2'>
                Mauricio Palomino
              </h1>

              <h3 className='mt-2 mb-5 text-xl font-semibold text-slate-200 pl-2'>
                Ingeniero de Software con Inteligencia Artificial
              </h3>
              <p className='max-w-[400px] text-slate-300 pl-2 text-lg font-light'>
                Mi compromiso es colaborar de manera eficiente y ademas de tener una gran capacidad de Aprendizaje.
              </p>
              <div className='mt-8 text-slate-300'>
                <ul className='space-y-2'>
                  <li className='max-w-[300px] space-y-1 p-2 text-lg border border-slate-900 hover:border-slate-800 hover:shadow-lg hover:shadow-slate-700 hover:transition-shadow duration-500 ease-in-out rounded-md text-slate-100'>
                    <span className='block'>Número de Celular:</span>
                    <span className='block font-semibold'>+51 970828781 </span>
                  </li>
                  <li className='max-w-[300px] space-y-1 p-2 text-lg border border-slate-900 hover:border-slate-800 hover:shadow-lg hover:shadow-slate-700 hover:transition-shadow duration-500 ease-in-out rounded-md text-slate-100'>
                    <span className='block'>Correo Electronico:</span>
                    <span className='block font-semibold'> mauriciopalomino39@gmail.com </span>
                  </li>
                  <li
                    className='max-w-[300px] space-y-1 p-2 hover:cursor-pointer border border-slate-900 hover:border-slate-800 hover:shadow-lg hover:shadow-slate-700 hover:transition-shadow duration-500 ease-in-out rounded-md'
                    onClick={() => window.open("https://drive.google.com/file/d/19Wzb01K9xnQYVMmMtz1Wh4wBYwvMXNCB/view?usp=sharing", "_blank")}
                  >
                    <span
                      className="text-lg font-semibold hover:text-slate-100 hover:underline transition-all duration-1500 ease-in-out"
                    >
                      Ver CV-MauricioPalomino
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className='flex justify-center mt-16 md:mt-15 lg:mt-0 mb-10'>
              <ul className='flex gap-x-1 md:gap-x-4 justify-center p-3 border-t border-gray-600'>
                <li
                  onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript', '_blank')}
                  className='hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out'
                >
                  <DiJavascript1 size={35} className="text-yellow-500 hover:text-yellow-300" />
                </li>
                <li
                  onClick={() => window.open('https://www.typescriptlang.org/docs/', '_blank')}
                  className='hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out'
                >
                  <SiTypescript size={30} className="text-blue-500 hover:text-blue-300" />
                </li>
                <li
                  onClick={() => window.open('https://docs.python.org/3/', '_blank')}
                  className='hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out'
                >
                  <SiPython size={30} className="text-green-500 hover:text-green-300" />
                </li>
                <li
                  onClick={() => window.open('https://flask.palletsprojects.com/', '_blank')}
                  className='hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out'
                >
                  <SiFlask size={33} className="text-gray-700 hover:text-gray-400" />
                </li>
                <li
                  onClick={() => window.open('https://reactjs.org/docs/getting-started.html', '_blank')}
                  className='hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out'
                >
                  <FaReact size={35} className="text-blue-400 hover:text-blue-200" />
                </li>
                <li
                  onClick={() => window.open('https://tailwindcss.com/docs', '_blank')}
                  className='hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out'
                >
                  <SiTailwindcss size={35} className="text-teal-400 hover:text-teal-200" />
                </li>
                <li
                  onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/CSS', '_blank')}
                  className='hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out'
                >
                  <DiCss3 size={35} className="text-blue-600 hover:text-blue-300" />
                </li>
                <li
                  onClick={() => window.open('https://developer.mozilla.org/en-US/docs/Web/HTML', '_blank')}
                  className='hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out'
                >
                  <DiHtml5 size={35} className="text-orange-500 hover:text-orange-300" />
                </li>
                <li
                  onClick={() => window.open('https://dev.mysql.com/doc/', '_blank')}
                  className='hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out'
                >
                  <SiMysql size={35} className="text-blue-700 hover:text-blue-300" />
                </li>
              </ul>
            </div>

          </div>

          {/* Segunda columna (Scroll) */}
          <div className="bg-slate-900 text-slate-400 mt-5 lg:mt-3 lg:pl-0 lg:pr-1 mb-10 lg:overflow-y-auto space-y-40  ">
            <div className='pl-5 pr-6 lg:pl-0 lg:pr-1 space-y-5 '>
              <p>
                Soy un desarrollador web apasionado por crear soluciones innovadoras y funcionales que combinan tecnologia y diseño. Con experiencia en herramientas moderas como <span className='font-semibold text-slate-300'>React, TypeScript y Python,</span> he trabajado en proyectos que van desde plataformas interactivas hasta bots inteligentes integrados con servicios como la <span className='font-semibold text-slate-300'>API Graph de Meta</span>.
              </p>
              <p>
                Me especializo en el desarrollo frontend y backend, enfocándome en la optimización de interfaces, la visualización de datos en tiempo real y la integración de sistemas seguros y escalables. Además, disfruto explorar nuevas tecnologías y aprender continuamente para seguir creando productos de alto impacto.
              </p>
              <p>
                Estoy comprometido con la creación de experiencias digitales que no solo sean funcionales, sino también significativas para los usuarios. Mi objetivo es contribuir a proyectos que marquen la diferencia, combinando mi pasión por la tecnología con un enfoque en la calidad y la innovación.
              </p>
            </div>

            <ul className=''>
              <div className='lg:grid grid-cols-8 mb-12 p-3 hover:bg-slate-800 hover:opacity-95 borderborder-slate-900 hover:border-steal-800  rounded-md hover:shadow-md hover:shadow-slate-950 transition-all duration-300 ease-in-out mx-5 lg:mx-0 hover:scale-105 lg:hover:scale-100'>
                <header className='pl-3 lg:pl-0 lg:pt-1 col-span-2 text-slate-500 uppercase text-sm font-medium'>
                    Agosto - Dic.
                    <span> 2024</span>
                  
                </header>
                <div className='pl-3 col-span-6'>
                  <h2 className='text-slate-200 font-bold text-lg mb-3'>Prog. Full Stack - TGH Technology Solution</h2> 
                    <p className='text-sm mb-2'> 
                      Contribuí con el diseño y desarrollo de una plataforma web para la gestión de métricas y generación de informes de redes
                      sociales, integrando los servicios de Meta mediante la Api Graph. Además de dashboards interactivos en React y TypeScript para visualizar métricas de Facebook e Instagram en tiempo real, y realicé pruebas de calidad de los endpoints utilizando Postman.
                    </p>
                    
                    <p className='text-sm'>
                      Tambien contribui en el backend de proyectos utilizando Express y TypeScript, asegurando la escalabilidad
                      y rendimiento.
                    </p>
                </div>
              </div>
              
              <div className='lg:grid grid-cols-8 mb-12 p-3 hover:bg-slate-800 hover:opacity-95 borderborder-slate-900 hover:border-steal-800  rounded-md hover:shadow-md hover:shadow-slate-950 transition-all duration-300 ease-in-out mx-5 lg:mx-0 hover:scale-105 lg:hover:scale-100 items-start'>
                <header className='pl-3 lg:pl-0 lg:pt-1 col-span-2 text-slate-500 uppercase text-sm font-medium'>
                  Febrero - May.
                  <span> 2024</span>
                  
                </header>
                <div className='pl-3 col-span-6'>
                  <h2 className='text-slate-200 font-bold text-lg mb-3'>Practicante Front End - Digital Buho S.A.C</h2>
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

            <ul>
              <div 
                className='group lg:grid grid-cols-8 mb-12 p-3 hover:bg-slate-800 hover:opacity-95 borderborder-slate-900 hover:border-steal-800  rounded-md hover:shadow-md hover:shadow-slate-950 transition-all duration-300 ease-in-out mx-5 lg:mx-0 hover:scale-105 lg:hover:scale-100 items-start hover:cursor-pointer'
              >
                <header className=' lg:pt-1 col-span-2 text-slate-500 uppercase text-sm font-medium pb-6'>
                  <img 
                    className='rounded-md border-4 border-double border-slate-700 group-hover:border-slate-200 transition-all duration-300 ease-in-out'
                    src="/images/Plataforma-Metricas.png" 
                    alt="Imgen-Calculadora" 
                  />
                  
                </header>
                <div className='lg:pl-3 col-span-6'>
                  <h2 className='text-slate-200 font-bold text-lg mb-3'>Plataforma de Métricas con la API Gaph de Meta</h2>
                  <p className='text-sm mb-2'>
                    Plataforma Web que muestra metricas de las redes sociales de Facebook e Instagram mediante graficos, usando la Api Graph de Meta. Los datos mostrados son en tiempo real y se pueden filtrar por fechas. Ademas de la descarga de un informe de ambas redes sociales.
                  </p>
                  <ul className='flex flex-wrap gap-3 text-sm pt-1 lg:p-1 items-center'>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>TypeScript</li>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>React</li>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>Python</li>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>Flask</li>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>mysql</li>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>Tailwind</li>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>Api Graph de Meta</li>
                  </ul>
                </div>
              </div>

              <div 
                className='group lg:grid grid-cols-8 mb-12 p-3 hover:bg-slate-800 hover:opacity-95 borderborder-slate-900 hover:border-steal-800  rounded-md hover:shadow-md hover:shadow-slate-950 transition-all duration-300 ease-in-out mx-5 lg:mx-0 hover:scale-105 lg:hover:scale-100 items-start hover:cursor-pointer'
                onClick={() => window.open('https://dynamic-tartufo-ffc886.netlify.app/', '_blank')}
              >
                <header className='lg:pt-1 col-span-2 text-slate-500 uppercase text-sm font-medium pb-6'>
                  <img 
                    className='rounded-md border-4 border-double border-slate-700 group-hover:border-slate-200 transition-all duration-300 ease-in-out'
                    src="/images/Calculadora.png" 
                    alt="Imgen-Calculadora" 
                  />
                  
                </header>
                <div className='lg:pl-3 col-span-6'>
                  <h2 className='text-slate-200 font-bold text-[1.1rem] mb-3'>Calculadora de Propinas y Consumo</h2>
                  <p className='text-sm mb-2'>
                    Aplicación web que permite calcular el monto total a pagar, incluyendo propinas. La interfaz es intuitiva y fácil de usar, permitiendo el acumulado de cada Menú y el porcentaje de propina deseado. La aplicación muestra el monto total a pagar, incluyendo la propina.
                  </p>
                  <ul className='flex flex-wrap gap-3 text-sm pt-1 lg:p-1 items-center'>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>TypeScript</li>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>React</li>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>Tailwind</li>
                  </ul>
                </div>
              </div>

              <div 
                className='group lg:grid grid-cols-8 mb-12 p-3 hover:bg-slate-800 hover:opacity-95 borderborder-slate-900 hover:border-steal-800  rounded-md hover:shadow-md hover:shadow-slate-950 transition-all duration-300 ease-in-out mx-5 lg:mx-0 hover:scale-105 lg:hover:scale-100 items-start hover:cursor-pointer'
                onClick={() => window.open('https://curious-mermaid-67a8ad.netlify.app/', '_blank')}
              >
                <header className='lg:pt-1 col-span-2 text-slate-500 uppercase text-sm font-medium pb-6'>
                  <img 
                    className='rounded-md border-4 border-double border-slate-700 group-hover:border-slate-200 transition-all duration-300 ease-in-out'
                    src="/images/Contador-Calorias.png" 
                    alt="Imgen-Calculadora" 
                  />
                </header>
                <div className='lg:pl-3 col-span-6'>
                  <h2 className='text-slate-200 font-bold text-[1.1rem] mb-3'>Sistema de Control de Calorías</h2>
                  <p className='text-sm mb-2'>
                    Sistema web que permite llevar un contros de calorias quemadas y consumidas, ademas de mostrar el resumen de calorias consumidas y quemadas. Permitiendo el registro de alimentos y ejercicios. La interfaz es facil de usar.
                  </p>
                  <ul className='flex flex-wrap gap-3 text-sm pt-1 lg:p-1 items-center'>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>TypeScript</li>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>React</li>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>Tailwind</li>
                  </ul>
                </div>
              </div>
              
              <div 
                className='group lg:grid grid-cols-8 mb-12 p-3 hover:bg-slate-800 hover:opacity-95 borderborder-slate-900 hover:border-steal-800  rounded-md hover:shadow-md hover:shadow-slate-950 transition-all duration-300 ease-in-out mx-5 lg:mx-0 hover:scale-105 lg:hover:scale-100 items-start hover:cursor-pointer'
                onClick={() => window.open('https://joyful-meringue-163536.netlify.app/', '_blank')}  
              >
                <header className='lg:pt-1 col-span-2 text-slate-500 uppercase text-sm font-medium pb-6'>
                  <img 
                    className='rounded-md border-4 border-double border-slate-700 group-hover:border-slate-200 transition-all duration-300 ease-in-out'
                    src="/images/GuitarLA.png" 
                    alt="Imgen-Calculadora" 
                  />
                  
                </header>
                <div className='lg:pl-3 col-span-6'>
                  <h2 className='text-slate-200 font-bold text-[1.1rem] mb-3'>Pagina Web de GuitarLA</h2>
                  <p className='text-sm mb-2'>
                    Pagina Web que muestra diferentes productos de GuitarLA, tiene un diseño minimalista y facil de usar. Ademas de tener un carrito de compras
                  </p>
                  <ul className='flex flex-wrap gap-3 text-sm pt-1 lg:p-1 items-center'>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>TypeScript</li>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>React</li>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>CSS</li>
                  </ul>
                </div>
              </div>
              
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
