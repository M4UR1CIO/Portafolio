import '../styles/Barra-desplazamiento.css'

type ModalProps = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export default function Modal({isOpen, setIsOpen} : ModalProps) {

  return (
    <div 
        className={`fixed inset-0 flex items-center justify-center bg-black/90 z-50 transition-opacity duration-500 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
    >
        {/* Se utiliza no-scrollbar para la ocultacion de la barra de desplazamiento */}
        <div
            className={`bg-gradient-to-t from-slate-900 to-slate-800 rounded-md shadow-md shadow-cyan-900 max-w-[40vh] md:max-w-2xl max-h-[80vh] overflow-y-auto no-scrollbar transform transition-all duration-500 ${
                isOpen ? "scale-100 translate-y-0" : "scale-75 translate-y-10"
            }`}
        >
            <div className='z-10 sticky top-0 bg-gradient-to-b from-slate-900 to-slate-800 rounded-b-md py-3 px-9 flex items-center justify-between'>
                <h1 className="text-lg md:text-2xl font-bold text-slate-300 uppercase">Plataforma de Métricas de Meta</h1>
                <button
                    className=" px-3 py-2 bg-teal-200/30 text-teal-300 rounded-lg hover:bg-teal-500/80 hover:scale-105 transition-all duration-300 ease-in-out"
                    onClick={() => setIsOpen(false)}
                >
                    Cerrar
                </button>
            </div>  
            
            <ul className="mt-4 space-y-3 px-6 mb-4 group/list">
                <li className="group relative hover:bg-slate-600/35 border border-transparent hover:border-steal-800 rounded-lg hover:shadow-md hover:shadow-slate-700 transition-all duration-300 ease-in-out p- lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className='bg-teal-400/20 text-center p-1 rounded-xl mt-2 mx-2'>
                        <h2 className='uppercase text-teal-300'>Login</h2>
                    </div>
                
                    <div className='grid md:grid-cols-8 gap-x-4 items-center p-3'>
                        <div className="md:col-span-4 mb-2 md:mb-0">
                            <p className="text-slate-300 text-sm text-justify">Accede de manera segura y sencilla a la plataforma para gestionar métricas de redes sociales. La seguridad y facilidad de uso garantizan una experiencia fluida desde el primer momento.</p>
                        </div>
                        <div className="md:col-span-4">
                            <img 
                                src="/images/Plataforma-Meta/Login.png" alt="Guia de Uso"
                                className="border-4 border-double border-transparent group-hover:border-slate-200 rounded-lg transition-all duration-300 ease-in-out"
                            />
                        </div>
                    </div>
                    
                </li>

                <li className="group relative hover:bg-slate-600/35 border border-transparent hover:border-steal-800  rounded-lg hover:shadow-md hover:shadow-slate-700 transition-all duration-300 ease-in-out p- lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className='bg-teal-400/20 text-center p-1 rounded-xl mt-2 mx-2'>
                        <h2 className='uppercase text-teal-300'>Guía de Uso</h2>
                    </div>
                    <div className='grid md:grid-cols-8 gap-x-4 items-center p-3'>
                        <div className="md:col-span-4 order-2 md:order-1">
                            <img 
                                src="/images/Plataforma-Meta/Metricas-1.png" alt="Guia de Uso"
                                className="border-4 border-double border-transparent group-hover:border-slate-200 rounded-lg transition-all duration-300 ease-in-out"
                            />
                        </div>
                        <div className="md:col-span-4 order-1 mb-2 md:order-2 md:mb-0">
                            <p className="text-slate-300 text-sm text-justify">Explora la plataforma con facilidad gracias a una guía intuitiva que detalla cada funcionalidad, garantizando una experiencia de usuario optimizada y sin complicaciones.</p>
                        </div>
                    </div>
                </li>

                <li className="group relative hover:bg-slate-600/35 border border-transparent hover:border-steal-800  rounded-lg hover:shadow-md hover:shadow-slate-700 transition-all duration-300 ease-in-out p- lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className='bg-teal-400/20 text-center p-1 rounded-xl mt-2 mx-2'>
                        <h2 className='uppercase text-teal-300'>Sección de Facebook</h2>
                    </div>
                
                    <div className='grid md:grid-cols-8 gap-x-4 items-center p-3'>
                        <div className="md:col-span-4 mb-2 md:mb-0">
                            <p className="text-slate-300 text-sm text-justify">Obtén información valiosa sobre el rendimiento de tus publicaciones, el alcance de tu contenido y el nivel de interacción con tu audiencia en Facebook, optimizando tu estrategia digital.</p>
                        </div>
                        <div className="md:col-span-4">
                            <img 
                                src="/images/Plataforma-Meta/Metricas-2.png" alt="Guia de Uso"
                                className="border-4 border-double border-transparent group-hover:border-slate-200 rounded-lg transition-all duration-300 ease-in-out"
                            />
                        </div>
                    </div>
                    
                </li>

                <li className="group relative hover:bg-slate-600/35 border border-transparent hover:border-steal-800  rounded-lg hover:shadow-md hover:shadow-slate-700 transition-all duration-300 ease-in-out p- lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className='bg-teal-400/20 text-center p-1 rounded-xl mt-2 mx-2'>
                        <h2 className='uppercase text-teal-300'>Sección de Instagram</h2>
                    </div>
                    <div className='grid md:grid-cols-8 gap-x-4 items-center p-3'>
                        <div className="md:col-span-4 order-2 md:order-1">
                            <img 
                                src="/images/Plataforma-Meta/Metricas-3.png" alt="Guia de Uso"
                                className="border-4 border-double border-transparent group-hover:border-slate-200 rounded-lg transition-all duration-300 ease-in-out"
                            />
                        </div>
                        <div className="md:col-span-4 order-1 mb-2 md:order-2 md:mb-0">
                            <p className="text-slate-300 text-sm text-justify">Analiza el crecimiento de tus seguidores, descubre qué publicaciones generan más impacto y mide la efectividad de tus historias para maximizar tu presencia en Instagram.</p>
                        </div>
                    </div>
                </li>

                <li className="group relative hover:bg-slate-600/35 border border-transparent hover:border-steal-800  rounded-lg hover:shadow-md hover:shadow-slate-700 transition-all duration-300 ease-in-out p- lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className='bg-teal-400/20 text-center p-1 rounded-xl mt-2 mx-2'>
                        <h2 className='uppercase text-teal-300'>Sección de Reportes</h2>
                    </div>
                
                    <div className='grid md:grid-cols-8 gap-x-4 items-center p-3'>
                        <div className="md:col-span-4 mb-2 md:mb-0">
                            <p className="text-slate-300 text-sm text-justify">Genera reportes personalizados y detallados con métricas clave de Facebook e Instagram, facilitando la toma de decisiones informadas y el seguimiento de campañas de marketing.</p>
                        </div>
                        <div className="md:col-span-4">
                            <img 
                                src="/images/Plataforma-Meta/Metricas-4.png" alt="Guia de Uso"
                                className="border-4 border-double border-transparent group-hover:border-slate-200 rounded-lg transition-all duration-300 ease-in-out"
                            />
                        </div>
                    </div>
                    
                </li>
                
                <li className="group relative hover:bg-slate-600/35 border border-transparent hover:border-steal-800 rounded-lg hover:shadow-md hover:shadow-slate-700 transition-all duration-300 ease-in-out p- lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className='bg-teal-400/20 text-center p-1 rounded-xl mt-2 mx-2'>
                        <h2 className='uppercase text-teal-300'>Sección de Chat Bot</h2>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-8 gap-x-4 items-center p-3'>
                        <div className="col-span-1 md:col-span-2 order-2 md:order-1">
                            <img 
                                src="/images/Plataforma-Meta/ChatBot.png" 
                                alt="Guia de Uso"
                                className="w-full h-auto border-4 border-double border-transparent group-hover:border-slate-200 rounded-lg transition-all duration-300 ease-in-out"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-2 order-3 md:order-2">
                            <img 
                                src="/images/Plataforma-Meta/ChatBot2.png" 
                                alt="Guia de Uso"
                                className="w-full h-auto border-4 border-double border-transparent group-hover:border-slate-200 rounded-lg transition-all duration-300 ease-in-out"
                            />
                        </div>
                        <div className="col-span-2 md:col-span-4 order-1 md:order-3 mb-2 md:md-0">
                            <p className="text-slate-300 text-justify">Interactúa con un chatbot inteligente que brinda informacion acerca de la plataforma de Metricas, ademas de redirifir a las secciones correspondientes de la plataforma.</p>
                        </div>
                    </div>
                </li>

          </ul>
        </div>
      </div>
  )
}
