
export default function SegundaColumna() {
  return (
    <>
        {/* Segunda columna (Scroll) */}
        <div className="bg-slate-900 text-slate-400 mt-10 lg:mt-3 lg:pl-0 lg:pr-1 mb-10 lg:overflow-y-auto space-y-24 lg:space-y-40  ">
            <div
              id='inicio' 
              className='pl-5 lg:mt-12 pt-1 pr-6 lg:pl-0 lg:pr-1 space-y-5 '
            >
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

            <ul id='experiencia' className="space-y-8">
              <div className='lg:grid grid-cols-8 p-3 hover:bg-slate-800/55 borderborder-slate-900 hover:border-steal-800  rounded-md hover:shadow-md hover:shadow-slate-950 transition-all duration-300 ease-in-out mx-5 lg:mx-0 hover:scale-105 lg:hover:scale-100'>
                <header className='lg:pt-1 col-span-2 text-slate-500 uppercase text-sm font-medium'>
                    Agosto - Dic.
                    <span> 2024</span>
                  
                </header>

                <div className='lg:pl-3 col-span-6'>
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
              
              <div className='lg:grid grid-cols-8 mb-12 p-3 hover:bg-slate-800/55 borderborder-slate-900 hover:border-steal-800  rounded-md hover:shadow-md hover:shadow-slate-950 transition-all duration-300 ease-in-out mx-5 lg:mx-0 hover:scale-105 lg:hover:scale-100 items-start'>
                <header className='lg:pl-0 lg:pt-1 col-span-2 text-slate-500 uppercase text-sm font-medium'>
                  Feb. - Mayo
                  <span> 2024</span>
                  
                </header>
                <div className='lg:pl-3 col-span-6'>
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

            <ul 
                id='proyectos' 
                className="space-y-8"
            >
              <div 
                className='group lg:grid grid-cols-8  p-3 hover:bg-slate-800/50 borderborder-slate-900 hover:border-steal-800  rounded-md hover:shadow-md hover:shadow-slate-950 transition-all duration-300 ease-in-out mx-5 lg:mx-0 hover:scale-105 lg:hover:scale-100 items-start hover:cursor-pointer'
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
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>MySQL</li>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>Tailwind</li>
                    <li className='p-1 bg-teal-400/10 text-teal-300 rounded-xl px-3 font-medium'>Api Graph de Meta</li>
                  </ul>
                </div>
              </div>

              <div 
                className='group lg:grid grid-cols-8 p-3 hover:bg-slate-800/50 borderborder-slate-900 hover:border-steal-800  rounded-md hover:shadow-md hover:shadow-slate-950 transition-all duration-300 ease-in-out mx-5 lg:mx-0 hover:scale-105 lg:hover:scale-100 items-start hover:cursor-pointer'
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
                className='group lg:grid grid-cols-8 p-3 hover:bg-slate-800/50 borderborder-slate-900 hover:border-steal-800  rounded-md hover:shadow-md hover:shadow-slate-950 transition-all duration-300 ease-in-out mx-5 lg:mx-0 hover:scale-105 lg:hover:scale-100 items-start hover:cursor-pointer'
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
                className='group lg:grid grid-cols-8 p-3 hover:bg-slate-800/50 borderborder-slate-900 hover:border-steal-800  rounded-md hover:shadow-md hover:shadow-slate-950 transition-all duration-300 ease-in-out mx-5 lg:mx-0 hover:scale-105 lg:hover:scale-100 items-start hover:cursor-pointer'
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
    </>
  )
}
