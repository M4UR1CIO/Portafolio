import { useState } from 'react';
import styles from './styles/Gradient.module.css';
import Header from './components/Header';
import PrimerColumna from './components/PrimerColumna';
import SegundaColumna from './components/SegundaColumna';
import { proyectos } from './data/Proyectos';

function App() {

  const[ position, setPosition ] = useState({x:0 , y:0})

  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({
      x: e.pageX - 450, 
      y: e.pageY - 500,
    })
  }

  return (
    <>
      <header className="z-50 sticky top-0">
        <Header />
      </header>

      <section
        className={`pt-5 md:pt-10 bg-slate-900 min-h-screen flex justify-center overflow-hidden relative`}
        onMouseMove={handleMouseMove}
      >
        {/* Efecto de iluminación en la esquina superior izquierda */}
        <div
          className="lg:hidden pointer-events-none fixed inset-0 z-50 transition duration-300"
          style={{
            background: "radial-gradient(700px circle at 0px 0px, rgba(29, 78, 216, 0.15), transparent 80%)"
          }}
        ></div>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-[1200px]`}>
          
          

          <div
            className={`z-10 absolute w-[900px] h-[900px] rounded-full pointer-events-none blur-3xl ease-in-out ${styles.gradientRadial} hidden lg:block`}
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