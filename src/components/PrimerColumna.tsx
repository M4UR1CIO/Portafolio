import { FaPhone, FaLinkedin, FaWhatsapp, FaGithub} from 'react-icons/fa';
import { MdEmail } from "react-icons/md"; 
import { BsFileEarmarkPdf } from "react-icons/bs"; 
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion'; 
import { Tooltip } from 'react-tooltip'; 

export default function PrimerColumna() {
  return (
    <>
        {/* Primera columna (Fija) */}
        <div className="pr-3 pl-3 bg-white dark:bg-slate-900 lg:fixed top-24 lg:h-5/6 flex flex-col justify-between transition-colors">
            <div className='max-w-[600px]'>
                <h1 
                    className='text-5xl font-black text-cyan-950 dark:text-slate-100 hover:cursor-pointer pl-2 transition-colors'
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
                    className="mt-4 md:mt-2 mb-5 text-xl font-medium text-cyan-900 dark:text-slate-200 pl-2 transition-colors"
                    >
                    Ingeniero de Software con Inteligencia Artificial
                </motion.h3>
                
                <motion.p
                    initial={{ opacity: 0, x: -50 }} // Inicia invisible y desplazado a la izquierda
                    animate={{ opacity: 1, x: 0 }} // Se hace visible y se mueve a su posición
                    transition={{ duration: 1, ease: 'easeOut' }} // Duración y tipo de animación
                    className='max-w-[400px] text-gray-600 dark:text-slate-400 pl-2 text-base font-light transition-colors'
                >
                    Apasionado por la tecnología, el aprendizaje continuo y la optimización de procesos.
                </motion.p>

                <p className='max-w-[400px] text-slate-400 pl-2 text-base font-light'>
                    
                </p>

                <div className='mt-12 md:mt-20'>
                    <motion.ul
                        initial={{ opacity: 0, x: -50 }} // Inicia invisible y desplazado a la izquierda
                        animate={{ opacity: 1, x: 0 }} // Se hace visible y se mueve a su posición
                        transition={{ duration: 1, ease: 'easeOut' }} // Duración y tipo de animación
                        className='space-y-3 text-gray-700 dark:text-slate-300 transition-colors'
                    >
                        <li className='flex items-center gap-x-3 p-2'>
                            <FaPhone size={19}/>
                            <span className='text-[17px]'>+51 970828781 </span>
                        </li>
                        <li className='flex items-center gap-x-3 max-w-[400px] p-2 '>

                            <MdEmail size={23}/>
                            <span className='text-[17px]'> mauriciopalomino39@gmail.com </span>
                        </li>
                        <li
                            className='flex items-center gap-x-3 group max-w-[330px] p-2 cursor-pointer border border-transparent dark:hover:border-slate-800 hover:shadow-lg hover:shadow-slate-700 transition-shadow duration-500 ease-in-out rounded-md hover:text-gray-900 dark:hover:text-slate-100' 
                            onClick={() => window.open("https://drive.google.com/file/d/1IMSP4gDMxa-DUwpgOMqaLlIKMf0dXcNb/view?usp=sharing", "_blank")}
                        >
                            <BsFileEarmarkPdf size={23}/>
                            <span
                                className="text-[17px] group-hover:underline"
                            >
                                Ver CV-MauricioPalomino
                            </span>
                            
                        </li>
                    </motion.ul>
                    
                </div>
            </div>
                
            <motion.ul
                initial={{ opacity: 0, y: 50 }} // Inicia invisible y desplazado a la izquierda
                animate={{ opacity: 1, y: 0 }} // Se hace visible y se mueve a su posición
                transition={{ duration: 1, ease: 'easeOut' }} // Duración y tipo de animación
                className='flex gap-x-3 md:gap-x-5 pl-2 mt-20 lg:mt-auto text-cyan-800 dark:text-slate-300'
            >
                <li
                    className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
                    onClick={() => window.open('https://www.linkedin.com/in/mauricio-palomino-ayala-16a24a274/', '_blank')}
                    data-tooltip-id='linkedin-tooltip'
                >
                    <FaLinkedin className="hover:text-cyan-950 dark:hover:text-emerald-100" size={32} />
                    <Tooltip 
                        id="linkedin-tooltip" 
                        place="top" 
                        style={{backgroundColor: "#CBC3CD", color: "#000", padding: 2, fontSize: 12}}
                    >
                        Linkedin
                    </Tooltip>
                </li>
                <li
                    className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
                    onClick={() => window.open('https://wa.me/970828781?', '_blank')}
                    data-tooltip-id='whatsapp-tooltip'
                >
                    <FaWhatsapp className=" hover:text-cyan-950  dark:hover:text-emerald-100" size={32} />
                    <Tooltip
                        id='whatsapp-tooltip'
                        place='top'
                        style={{backgroundColor: "#CBC3CD", color: "#000", padding: 2, fontSize: 12}}
                    >
                        Whatsapp
                    </Tooltip>
                </li>
                <li
                    className="hover:cursor-pointer hover:scale-110 transition-transform duration-500 ease-in-out"
                    onClick={() => window.open('https://github.com/M4UR1CIO', '_blank')}
                    data-tooltip-id='github-tooltip'
                >
                    <FaGithub className=" hover:text-cyan-950  dark:hover:text-emerald-100" size={32} />
                    <Tooltip
                        id='github-tooltip'
                        place='top'
                        style={{backgroundColor: "#CBC3CD", color: "#000", padding: 2, fontSize: 12}}
                    >
                        GitHub
                    </Tooltip>
                </li>
            </motion.ul>
            
        </div>
    </>
  )
}
