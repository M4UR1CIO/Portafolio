import { useState, useEffect } from 'react';
import styles from './styles/Gradient.module.css';
import Header from './components/Header';
import PrimerColumna from './components/PrimerColumna';
import SegundaColumna from './components/SegundaColumna';
import { proyectos } from './data/Proyectos';

function App() {
  const[ isDark, setIsDark ] = useState(true)
  const[ position, setPosition ] = useState({x:0 , y:0})

  useEffect(() => {
          const savedTheme = localStorage.getItem('theme')
          setIsDark(savedTheme === 'dark')
      }, []);
  
      useEffect(() => {
          if(isDark) {
              document.documentElement.classList.add("dark"); // Agrega "dark" a <html>
              localStorage.setItem("theme", "dark"); // Guarda "dark" en localStorage
          } else {
              document.documentElement.classList.remove("dark"); // Quita "dark" de <html>
              localStorage.setItem("theme", "light"); // Guarda "light" en localStorage
          }
      }, [isDark]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({
      x: e.pageX - 450, 
      y: e.pageY - 500,
    })
  }

  return (
    <>
      <header className="z-50 sticky top-0">
        <Header isDark={isDark} setIsDark={setIsDark}/>
      </header>

      <section
        className={`pt-5 md:pt-10 bg-white dark:bg-slate-900 min-h-screen flex justify-center overflow-hidden relative transition-colors`}
        onMouseMove={handleMouseMove}
      >
        {/* Efecto de iluminación en la esquina superior izquierda */}
        <div
          className="lg:hidden pointer-events-none fixed inset-0 z-50 transition duration-300"
          style={{
            background:isDark ? 
              "radial-gradient(700px circle at 0% 0%, rgba(29, 78, 216, 0.15), transparent 80%)":
              "radial-gradient(700px circle at 0% 0%, rgba(0, 0, 0, 0.20), transparent 80%)"

          }}
        ></div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-[1200px]`}>  
          <div
            className={`z-10 absolute w-[900px] h-[900px] rounded-full pointer-events-none blur-3xl ease-in-out hidden lg:block ${isDark ? styles.gradientRadialDark : styles.gradientRadialLight}`}
            style={{ left: `${position.x}px`, top: `${position.y}px` }}
          ></div>

          <div></div>
          
          <PrimerColumna/>
          
          <SegundaColumna 
            proyectos={proyectos}
          />
          
        </div>
      </section>
    </>
  )
}

export default App