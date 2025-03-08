import { FaPhone } from 'react-icons/fa';
import { MdEmail } from "react-icons/md"; 
import { BsFileEarmarkPdf } from "react-icons/bs"; 
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function PrimerColumna() {
  return (
    <>
        {/* Primera columna (Fija) */}
        <div 
            className="pr-3 pl-3 bg-slate-900 rounded-lg lg:fixed top-24 lg:h-5/6 flex flex-col justify-between"
        >
            <div className='max-w-[600px]'>
                <h1 
                    className='text-5xl font-black text-slate-100 hover:cursor-pointer pl-2'
                >
                    <span>
                    <Typewriter
                    words={['Mauricio Palomino']}
                    loop={1} // 0 significa infinito
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={1000}
                  />
                    </span>
                    
                </h1>

                <motion.h3
                    initial={{ opacity: 0, x: -50 }} // Inicia invisible y desplazado a la izquierda
                    animate={{ opacity: 1, x: 0 }} // Se hace visible y se mueve a su posición
                    transition={{ duration: 1, ease: 'easeOut' }} // Duración y tipo de animación
                    className="mt-4 md:mt-2 mb-5 text-xl font-medium text-slate-200 pl-2"
                    >
                    Ingeniero de Software con Inteligencia Artificial
                </motion.h3>
                
                <motion.p
                    initial={{ opacity: 0, x: -50 }} // Inicia invisible y desplazado a la izquierda
                    animate={{ opacity: 1, x: 0 }} // Se hace visible y se mueve a su posición
                    transition={{ duration: 1, ease: 'easeOut' }} // Duración y tipo de animación
                    className='max-w-[400px] text-slate-400 pl-2 text-base font-light'
                >
                    Apasionado por la tecnología, el aprendizaje continuo y la optimización de procesos.
                </motion.p>

                <p className='max-w-[400px] text-slate-400 pl-2 text-base font-light'>
                    
                </p>

                <div className='mt-12 md:mt-20'>
                    <ul className='space-y-3'>
                        <li className='flex items-center gap-x-3 p-2'>
                            <FaPhone size={19} className='text-slate-300'/>
                            <span className='text-[17px] text-slate-200'>+51 970828781 </span>
                        </li>
                        <li className='flex items-center gap-x-3 max-w-[400px] p-2 '>

                            <MdEmail size={23} className='text-slate-300'/>
                            <span className='text-[17px] text-slate-200'> mauriciopalomino39@gmail.com </span>
                        </li>
                        <li
                            className='flex items-center gap-x-3 group max-w-[330px] p-2 hover:cursor-pointer border border-slate-900 hover:border-slate-800 hover:shadow-lg hover:shadow-slate-700 hover:transition-shadow duration-500 ease-in-out rounded-md text-slate-300 hover:text-slate-100 ' 
                            onClick={() => window.open("https://drive.google.com/file/d/1IMSP4gDMxa-DUwpgOMqaLlIKMf0dXcNb/view?usp=sharing", "_blank")}
                        >
                            <BsFileEarmarkPdf size={23}/>
                            <span
                                className="text-[17px] group-hover:underline transition-all duration-1500 ease-in-out"
                            >
                                Ver CV-MauricioPalomino
                            </span>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}
