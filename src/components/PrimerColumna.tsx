import { FaReact } from 'react-icons/fa';
import { DiJavascript1, DiCss3, DiHtml5 } from 'react-icons/di';
import { SiTypescript, SiPython, SiFlask, SiTailwindcss, SiMysql } from 'react-icons/si';

export default function PrimerColumna() {
  return (
    <>
        {/* Primera columna (Fija) */}
        <div 
            className="pr-6 pl-3 bg-slate-900 rounded-lg lg:fixed top-24 lg:h-5/6 flex flex-col justify-between"
        >
            <div className='max-w-[600px]'>
                <h1 className='text-5xl font-bold text-slate-300 hover:cursor-pointer hover:text-slate-200 pl-2'>
                    Mauricio Palomino
                </h1>

                <h3 className='mt-2 mb-5 text-xl font-semibold text-slate-200 pl-2'>
                    Ingeniero de Software con Inteligencia Artificial
                </h3>

                <p className='max-w-[400px] text-slate-300 pl-2 text-base font-light'>
                    Mi compromiso es colaborar de manera eficiente y ademas de tener una gran capacidad de Aprendizaje.
                </p>

                <div className='mt-8'>
                    <ul className='space-y-2'>
                        <li className='max-w-[330px] space-y-1 p-2 border border-slate-900 hover:border-slate-800 hover:shadow-lg hover:shadow-slate-700 hover:transition-shadow duration-500 ease-in-out rounded-md'>
                            <span className='block text-base text-slate-400'>Número de Celular:</span>
                            <span className='block text-lg font-extralight text-slate-200'>+51 970828781 </span>
                        </li>
                        <li className='max-w-[330px] space-y-1 p-2 text-lg border border-slate-900 hover:border-slate-800 hover:shadow-lg hover:shadow-slate-700 hover:transition-shadow duration-500 ease-in-out rounded-md'>
                            <span className='block text-base text-slate-400'>Correo Electronico:</span>
                            <span className='block font-extralight text-slate-200'> mauriciopalomino39@gmail.com </span>
                        </li>
                        <li
                            className='group max-w-[330px] space-y-1 p-2 hover:cursor-pointer border border-slate-900 hover:border-slate-800 hover:shadow-lg hover:shadow-slate-700 hover:transition-shadow duration-500 ease-in-out rounded-md'
                            onClick={() => window.open("https://drive.google.com/file/d/1ITXIYkclUI8WavJLfF96C2BcU_LzXG1v/view?usp=sharing", "_blank")}
                        >
                            <span
                                className="text-lg font-extralight text-slate-300 group-hover:text-slate-100 group-hover:underline transition-all duration-1500 ease-in-out"
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
    </>
  )
}
