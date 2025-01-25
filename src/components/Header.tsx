import { useState, useEffect } from 'react';
import { FaLinkedin, FaWhatsapp, FaGithub, FaBars } from 'react-icons/fa'; 

export default function Header() {
    const [menuOpen, SetMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);

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
        <div className="p-3 lg:p-0 xl:max-w-[1200px] m-auto grid grid-cols-1 lg:grid-cols-2 bg-slate-950">
            <div></div>
    
            <div className=" flex justify-between items-center ">
                {/* Menú de navegación principal */}
                <ul className="p-1 flex gap-x-4 md:gap-x-10 text-base font-semibold uppercase">
                    <a 
                        className={`${ activeSection === "inicio" ? "text-slate-100 border-b-2 border-slate-200" : "text-slate-500"
                        } p-2 hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out`}
                        href='#inicio'
                        onClick={(e) => handleSmoothScroll(e, 'inicio', window.innerWidth < 768 ? 100 : 150)}
                    >
                        Inicio
                    </a>
                    <a 
                        className={`${ activeSection === "experiencia" ? "text-slate-100 border-b-2 border-slate-200" : "text-slate-500"
                          } p-2 hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out`}
                        href='#experiencia'
                        onClick={(e) => handleSmoothScroll(e, 'experiencia', 100)}
                    >
                        Experiencia
                    </a>
                    <a 
                        className={`${ activeSection === "proyectos" ? "text-slate-100 border-b-2 border-slate-200" : "text-slate-500"
                        } p-2 hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out`}
                        href='#proyectos'
                        onClick={(e) => handleSmoothScroll(e, 'proyectos', 100)}
                    >
                        Proyectos
                    </a>
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
                    window.open('https://wa.me/970828781?', '_blank')
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
    </>
  )
}
