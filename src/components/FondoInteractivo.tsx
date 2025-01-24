import { useState } from "react"


export default function FondoInteractivo() {

    const [position, setPosition] = useState({x: 0, y: 0});

    const handleMouseMove = (e: React.MouseEvent) => {
        setPosition({
            x: e.clientX - 300,
            y: e.clientY - 350,
        });
    };

  return (
    <>
        <div
            className="relative w-screen h-screen bg-blue-800 overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <div
                className="absolute w-[500px] h-[500px] rounded-full pointer-events-none bg-blue-700 opacity-30 blur-3xl"
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            >
            </div>
        </div>
    </>
  )
}
