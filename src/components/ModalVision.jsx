import vision from "../assets/images/mission.jpg"

export default function ModalVision() {
  return (
    <dialog id="my_modal_3" className="modal">
        <div className="modal-box text-start  ">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2 bg-blue-500">✕</button>
            </form>
            <div className=" w-full h-55 relative flex flex-col items-center ">
              <img src={vision} alt="vision de flyer" style={{ borderRadius : "30% 70% 70% 30% / 30% 30% 70% 70%" }} className="mt-2 rounded-lg  object-cover max-h-50 h-full " />                
              <div className="w-70  h-80  -z-1 bg-cover bg-center  transform scale-y-[-1] blur-[2px]"  style={{ borderRadius : "54% 46% 68% 32% / 26% 62% 38% 74%" , backgroundImage: `
                              linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)),
                              url(${vision})
                            ` }} ></div>
            </div>
            <h3 className="font-bold text-2xl mt-6 ">Un pas vers le futur!</h3>
            <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non voluptates mollitia deserunt sunt, ratione autem voluptatum, rem itaque, assumenda totam voluptatibus porro ex alias iusto quod impedit aperiam labore rerum.</p>
        </div>
</dialog>
  )
}
