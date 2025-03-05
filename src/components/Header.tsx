import { useState, useEffect } from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub, FaBars } from 'react-icons/fa'; 

export default function Header() {
    const [menuOpen, SetMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        // Cuando el menu esta abierto, desactiva el scroll
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Limpieza al desmontar el componente
        return () => {
            document.body.style.overflow = '';
        };
    } ,[menuOpen]);

    const handleSmoothScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, 
        id: string, 
        offset: number = 0 
      ) => {
        e.preventDefault(); 
      
        const target = document.getElementById(id); 
      
        if (target) {
          // Calcular la posición del elemento en la página
          const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      
          // Desplazarse a la posición con el offset
          window.scrollTo({
            top: elementPosition - offset, // Restar el offset para ajustar la posición
            behavior: 'smooth', // Animación de desplazamiento suave
          });
        }
      };     

      useEffect(() => {
        const handleScroll = () => {
          // Seleccionamos los elementos con los IDs
          const elements = document.querySelectorAll("#inicio, #experiencia, #proyectos");
          let maxVisibleHeight = 0;
          let mostVisibleElement: string | null = null;
    
          elements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const visibleHeight = Math.max(0, Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top));
    
            if (visibleHeight > maxVisibleHeight) {
              maxVisibleHeight = visibleHeight;
              mostVisibleElement = element.id; // Guardamos el id del elemento más visible
            }
          });
    
          setActiveSection(mostVisibleElement); // Actualizamos la sección activa
        };
    
        window.addEventListener("scroll", handleScroll);
    
        // Limpieza del evento
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
  return (
    <>
        <div className='bg-slate-950/50 backdrop-blur-md z-50 relative'>
        <div className="px-2 pt-2 pb-1 lg:p-0 xl:max-w-[1200px] m-auto grid grid-cols-1 lg:grid-cols-2 ">
            <div></div>
    
            <div className=" flex justify-between items-center">
                {/* Menú de navegación principal */}
                <ul className="py-1 pr-1 pl-0 lg:p-1 flex gap-x-3 md:gap-x-5 lg:gap-x-10 text-sm lg:text-base font-semibold uppercase">
                    <a 
                        className={`${ activeSection === "inicio" ? "text-slate-100 border-b-2 border-slate-200 scale-105" : "text-slate-500"
                        } p-2 hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out`}
                        href='#inicio'
                        onClick={(e) => {
                            if (menuOpen) {
                                e.preventDefault();
                            } else {
                                handleSmoothScroll(e, 'inicio', window.innerWidth < 768 ? 100 : 150)
                            }
                        }}
                    >
                        Sobre Mí
                    </a>
                    <a 
                        className={`${ activeSection === "experiencia" ? "text-slate-100 border-b-2 border-slate-200 scale-105" : "text-slate-500"
                          } p-2 hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out`}
                        href='#experiencia'
                        onClick={(e) => {
                            if (menuOpen) {
                                e.preventDefault();
                            } else {
                                handleSmoothScroll(e, 'experiencia', 100)
                            }
                        }}
                    >
                        Experiencia
                    </a>
                    <a 
                        className={`${ activeSection === "proyectos" ? "text-slate-100 border-b-2 border-slate-200 scale-105" : "text-slate-500"
                        } p-2 hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out`}
                        href='#proyectos'
                        onClick={(e) => {
                            if (menuOpen) {
                                e.preventDefault();
                            } else {
                                handleSmoothScroll(e, 'proyectos', 100)
                            }
                        }}
                    >
                        Proyectos
                    </a>
                </ul>
                        
                {/* Ícono de despliegue para dispositivos móviles */}
                <div className="md:hidden flex items-center pr-1">
                <button
                    onClick={() => SetMenuOpen(!menuOpen)}
                    className={`transition-transform duration-300 hover:scale-110 ease-in-out ${
                    menuOpen ? 'text-emerald-200' : 'text-slate-300'
                    }`}
                >
                    <FaBars size={26}/> 
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
                        <FaLinkedin className="text-slate-300 hover:text-emerald-100" size={28} />
                    </li>
                    <li
                        className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
                        onClick={() =>
                        window.open('https://wa.me/970828781?', '_blank')
                        }
                    >
                        <FaWhatsapp className="text-slate-300 hover:text-emerald-100" size={28} />
                    </li>
                    <li
                        className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
                        onClick={() => window.open('https://github.com/M4UR1CIO', '_blank')}
                    >
                        <FaGithub className="text-slate-300 hover:text-emerald-100" size={28} />
                    </li>
                </ul>
            </div>
            </div>
        </div>
        
        {/* Fondo oscuro */}
        {menuOpen && (
            <div 
                className="fixed inset-0 bg-slate-950/20 backdrop-blur-md z-30 transition-opacity duration-500" 
                onClick={() => SetMenuOpen(false)}
            />
        
        )}               

        {/* Menú */}
        <div
            className={`md:hidden ttransition-all duration-500 ease-in-out transform top-0 ${
                menuOpen ? 'translate-y-14 opacity-100' : '-translate-y-10 opacity-0'
            }  bg-slate-950/50 backdrop-blur-md absolute left-0 right-0 py-3 rounded-b-2xl z-30 `}
        >
            <ul className="flex justify-around items-center">
                <li className="flex flex-col items-center gap-y-1">
                    <FaLinkedin 
                        className="text-slate-300 hover:text-emerald-200 hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out" 
                        size={28} 
                        onClick={() =>
                            window.open('https://www.linkedin.com/in/mauricio-palomino-ayala-16a24a274/', '_blank')
                        }
                    />
                    <span className="text-slate-200 text-sm">Linkedin</span>
                </li>
                <li className="flex flex-col items-center gap-y-1">
                    <FaWhatsapp 
                        className="text-slate-300 hover:text-emerald-200 hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out" 
                        size={28} 
                        onClick={() =>
                            window.open('https://wa.me/970828781?text=Hola%20me%20interesa%20tu%20servicio', '_blank')
                        }
                    />
                    <span className="text-slate-200 text-sm">WhatsApp</span>
                </li>
                <li className="flex flex-col items-center gap-y-1">
                    <FaGithub 
                        className="text-slate-300 hover:text-emerald-200 hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
                        size={28} 
                        onClick={() => window.open('https://github.com/M4UR1CIO', '_blank')}
                    />
                    <span className="text-slate-200 text-sm">GitHub</span>
                </li>
            </ul>
        </div>

    </>
  )
}
