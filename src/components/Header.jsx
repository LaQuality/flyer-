import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
import { useState } from "react";



export default function Header() {
  const [open, setOpen] = useState(false);

    // Nos Liens

  const liens = [{href : "#", text:"Acceuil"},
    {href : "#about", text:"Qui sommes - Nous"},
    {href : "#services", text:"Services"},
    {href : "#portefolio", text:"Portefolio"},
    {href : "#projets", text:"Projets"},
    { href : "#contact", text:"Contact"},
    {href : "#suivez", text:"Suivez - Nous"}];

  return (
    <>
      {/* HEADER */}
      <header className="w-full fixed top-0 left-0 bg-white/90 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">

          {/* Logo */}
          <div className="text-2xl font-bold flex gap-3">
            {/* Hamburger version mobile */}
            <button 
               className="md:hidden text-xl"
               onClick={() => setOpen(true)}
            >
               ☰
            </button>

            <img className=" w-17" src={logo} alt="logo de flyer" />
            
            </div>

          {/* Liens version ordinateur */}
          <nav className="hidden md:flex gap-8 text-md font-medium">
            
             {liens.map((lien,index) => (

                <a className="hover:text-blue-600 transition" key={index} href={lien.href}>{lien.text}</a>

             ))}

          </nav>

         

        </div>
      </header>

      {/* SIDEBAR MOBILE */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-xs bg-white opacity-95 shadow-lg z-50 transform
          transition-transform duration-300 
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo dans la sidebar */}
        <div className="w-full flex justify-center mt-5"><img className=" w-17" src={logo} alt="logo de flyer" /></div>

        {/* Liens */}
        <nav className="flex flex-col gap-6 text-lg p-4">
          {liens.map((lien,index) => (

                <a className="hover:text-blue-600 transition" key ={index} href={lien.href}>{lien.text}</a>

             ))}
          
        </nav>

        {/* Bouton fermer */}
        <button
          className="absolute top-4 right-4 text-3xl"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
      </div>

      {/* OVERLAY (fond flou derrière la sidebar) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}

  

