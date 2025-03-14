import { useState, useEffect, Dispatch } from 'react';
import { IoSunny, IoMoon } from "react-icons/io5";

type HeaderProps = {
    isDark : boolean
    setIsDark : Dispatch<React.SetStateAction<boolean>>
}

export default function Header({isDark, setIsDark}: HeaderProps) {
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
          const elements = document.querySelectorAll("#sobremi, #experiencia, #proyectos");
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
        <div className='bg-gray-800/50 dark:bg-slate-950/50 lg: dark:lg:bg-slate-950/40 backdrop-blur-md z-50 relative transition-colors'>
        <div className="px-2 pt-2 pb-1 lg:p-0 xl:max-w-[1200px] m-auto grid grid-cols-1 lg:grid-cols-2">
            <div></div>
    
            <div className=" flex justify-between items-center">
                {/* Menú de navegación principal */}
                <ul className="p-1 flex gap-x-1 md:gap-x-5 lg:gap-x-10 text-sm lg:text-base font-semibold uppercase">
                    <a 
                        className={`${ activeSection === "sobremi" ? "text-slate-100 border-b-2 border-slate-200 scale-105" : "text-slate-500"
                        } p-2 hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out`}
                        href='#inicio'
                        onClick={(e) => handleSmoothScroll(e,'sobremi', 100)}
                    >
                        Sobre Mí
                    </a>
                    <a 
                        className={`${ activeSection === "experiencia" ? "text-slate-100 border-b-2 border-slate-200 scale-105" : "text-slate-500"
                          } p-2 hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out`}
                        href='#experiencia'
                        onClick={(e) => handleSmoothScroll(e,'experiencia', 100)}
                    >
                        Experiencia
                    </a>
                    <a 
                        className={`${ activeSection === "proyectos" ? "text-slate-100 border-b-2 border-slate-200 scale-105" : "text-slate-500"
                        } p-2 hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out`}
                        href='#proyectos'
                        onClick={(e) => handleSmoothScroll(e,'proyectos', 100)}
                    >
                        Proyectos
                    </a>
                </ul>
                <div className="w-[69px] md:w-[89px] h-10 bg-white dark:bg-slate-400/30 rounded-full flex items-center transition-all duration-500">
                    <button 
                        className={`flex h-9 w-9 rounded-full ml-0.5 ${ isDark === true ? "bg-slate-950": 'bg-gray-200 translate-x-7 md:translate-x-12'} transition-all duration-500 justify-center items-center cursor-pointer`}
                        onClick={() => setIsDark(!isDark)}
                    >
                        {isDark ? (
                            <IoMoon
                                className="text-white"
                                size={28}
                            />
                        ):(
                            <IoSunny
                                className="text-yellow-500"
                                size={30}
                        />
                        )}
                        
                    </button>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}
