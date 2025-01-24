import { FaLinkedin, FaWhatsapp  } from 'react-icons/fa';

export default function Header() {
  return (
    <>
        <header className="bg-black">
            <div className="p-3 lg:p-0 lg:max-w-[1200px] m-auto grid grid-cols-1 lg:grid-cols-2 bg-black text-white">
                <div>
                    
                </div>

                <div className='flex justify-between items-center '>
                    <ul className="flex gap-x-3 lg:gap-x-5 text-lg font-semibold uppercase">
                        <li className='hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'>
                            Inicio
                        </li>
                        <li className='hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'>
                            Servicios
                        </li>
                        <li className='hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out'>
                            Portafolio
                        </li>
                    </ul>

                    <div 
                        className='hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out'
                        onClick={() => window.open("https://www.linkedin.com/in/mauricio-palomino-ayala-16a24a274/", "_blank")}
                    >
                        <FaLinkedin className='text-emerald-400' size={30} />
                    </div>

                    <div 
                        className=' hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out'
                        onClick={() => window.open("https://wa.me/970828781?text=Hola%20me%20interesa%20tu%20servicio", "_blank")}
                    >
                        <FaWhatsapp className='text-emerald-400' size={30} />
                    </div>
                    <div className="hidden md:block m-2">
                        <button
                            className="w-[9rem] h-10 bg-emerald-400 text-black text-lg font-medium rounded-md hover:scale-105 transition-transform duration-300 ease-in-out "
                        >
                            Contactame
                        </button>
                    </div>
                </div>
            </div>
        </header>
        
        <section className='py-20 bg-black '>
            <div className='bg-black lg:max-w-[1200px]'>
            </div>
        </section>
    </>
  )
}
