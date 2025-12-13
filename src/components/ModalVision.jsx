import vision from "../assets/images/mission.jpg"

export default function ModalVision() {
  return (
    <dialog id="my_modal_3" className="modal">
        <div className="modal-box text-start  ">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-blue-100">✕</button>
            </form>
            <div className=" w-full h-55 relative flex flex-col items-center">
              <img src={vision} alt="vision de flyer" style={{ borderRadius : "30% 70% 70% 30% / 30% 30% 70% 70%" }} className="mt-2 rounded-lg  object-cover max-h-50 h-full " />                
              <div className="w-70  h-80 bg-blue-500  -z-1" style={{ borderRadius : "54% 46% 68% 32% / 26% 62% 38% 74%" }} ></div>
            </div>
            <h3 className="font-bold text-xl mt-6 ">Faire un pas vers le futur!</h3>
            <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non voluptates mollitia deserunt sunt, ratione autem voluptatum, rem itaque, assumenda totam voluptatibus porro ex alias iusto quod impedit aperiam labore rerum.</p>
        </div>
</dialog>
  )
}
