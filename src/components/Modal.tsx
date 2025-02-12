type ModalProps = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

export default function Modal({isOpen, setIsOpen} : ModalProps) {
    if(!isOpen) return null;
  return (
    <div className="fixed inset-0 top-0 left-0 flex items-center justify-center bg-black/95 z-50">
        <div className="bg-slate-900 p-6 rounded-2xl shadow-md shadow-cyan-900 max-w-2xl max-h-[80vh] overflow-y-auto transform transition-all duration-300">
          <h2 className="text-xl font-bold text-slate-300 uppercase text-center">Plataforma de Métricas de Meta</h2>
          <div className="mt-4 space-y-2 ">

          <div className="group grid grid-cols-8 gap-x-4 items-center hover:bg-slate-600/40 border border-slate-900 hover:border-steal-800  rounded-lg hover:shadow-md hover:shadow-slate-950 transition-all duration-500 ease-in-out p-3">
                <div className="col-span-4">
                    <p className="text-slate-200 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti assumenda alias repellendus enim quaerat voluptate libero, ab doloribus ratione sint ullam doloremque at eaque dolorum vel sapiente velit magnam veritatis?</p>
                </div>
                <div className="col-span-4">
                    <img 
                        src="/images/Plataforma-Meta/Login.png" alt="Guia de Uso"
                        className="border-4 border-double border-transparent group-hover:border-slate-200 rounded-lg transition-all duration-500 ease-in-out"
                    />
                </div>
            </div>

            <div className="group grid grid-cols-8 gap-x-4 items-center hover:bg-slate-600/40 border border-slate-900 hover:border-steal-800  rounded-lg hover:shadow-md hover:shadow-slate-950 transition-all duration-500 ease-in-out p-3">
                <div className="col-span-4">
                    <img 
                        src="/images/Plataforma-Meta/Metricas-1.png" alt="Guia de Uso"
                        className="border-4 border-double border-transparent group-hover:border-slate-200 rounded-lg transition-all duration-500 ease-in-out"
                    />
                </div>
                <div className="col-span-4">
                    <p className="text-slate-200 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti assumenda alias repellendus enim quaerat voluptate libero, ab doloribus ratione sint ullam doloremque at eaque dolorum vel sapiente velit magnam veritatis?</p>
                </div>
                
            </div>

            <div className="group grid grid-cols-8 gap-x-4 items-center hover:bg-slate-600/40 border border-slate-900 hover:border-steal-800  rounded-lg hover:shadow-md hover:shadow-slate-950 transition-all duration-500 ease-in-out p-3">
                <div className="col-span-4">
                    <p className="text-slate-200 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti assumenda alias repellendus enim quaerat voluptate libero, ab doloribus ratione sint ullam doloremque at eaque dolorum vel sapiente velit magnam veritatis?</p>
                </div>
                <div className="col-span-4">
                    <img 
                        src="/images/Plataforma-Meta/Metricas-2.png" alt="Guia de Uso"
                        className="border-4 border-double border-transparent group-hover:border-slate-200 rounded-lg transition-all duration-500 ease-in-out"
                    />
                </div>
            </div>

            <div className="group grid grid-cols-8 gap-x-4 items-center hover:bg-slate-600/40 border border-slate-900 hover:border-steal-800  rounded-lg hover:shadow-md hover:shadow-slate-950 transition-all duration-500 ease-in-out p-3">
                <div className="col-span-4">
                    <img 
                        src="/images/Plataforma-Meta/Metricas-3.png" alt="Guia de Uso"
                        className="border-4 border-double border-transparent group-hover:border-slate-200 rounded-lg transition-all duration-500 ease-in-out"
                    />
                </div>
                <div className="col-span-4">
                    <p className="text-slate-200 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti assumenda alias repellendus enim quaerat voluptate libero, ab doloribus ratione sint ullam doloremque at eaque dolorum vel sapiente velit magnam veritatis?</p>
                </div>
            </div>

            <div className="group grid grid-cols-8 gap-x-4 items-center hover:bg-slate-600/40 border border-slate-900 hover:border-steal-800  rounded-lg hover:shadow-md hover:shadow-slate-950 transition-all duration-300 ease-in-out p-3">
                <div className="col-span-4">
                    <p className="text-slate-200 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti assumenda alias repellendus enim quaerat voluptate libero, ab doloribus ratione sint ullam doloremque at eaque dolorum vel sapiente velit magnam veritatis?</p>
                </div>
                <div className="col-span-4">
                    <img 
                        src="/images/Plataforma-Meta/Metricas-4.png" alt="Guia de Uso"
                        className="border-4 border-double border-transparent group-hover:border-slate-200 rounded-lg transition-all duration-500 ease-in-out"
                    />
                </div>
            </div>
              
            <div className="group grid grid-cols-8 gap-x-4 items-center hover:bg-slate-600/40 border border-slate-900 hover:border-steal-800  rounded-lg hover:shadow-md hover:shadow-slate-950 transition-all duration-300 ease-in-out p-3">
                <div className="col-span-3">
                    <img 
                        src="/images/Plataforma-Meta/ChatBot.png" alt="Guia de Uso"
                        className="border-4 border-double border-transparent group-hover:border-slate-200 rounded-lg transition-all duration-500 ease-in-out"
                    />
                </div>
                <div className="col-span-5">
                    <p className="text-slate-200 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti assumenda alias repellendus enim quaerat voluptate libero, ab doloribus ratione sint ullam doloremque at eaque dolorum vel sapiente velit magnam veritatis?</p>
                </div>
            </div>
          </div>
  
          <button
            className="mt-4 px-3 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-500 hover:scale-105 transition-all duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            Cerrar
          </button>
        </div>
      </div>
  )
}
