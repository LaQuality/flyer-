import Button from "../components/Button"
import Carousel from "../components/Carousel"
import Carousel2 from "../components/Carousel2"
import tchange from "../assets/images/t-change.jpg"
import eba from "../assets/images/eba.jpg"
import opprovi from "../assets/images/portefolio/opprovi.png"
import posto from "../assets/images/postopage.jpg"
import video from "../assets/video/contact.mp4"
import CardPortefolio from "../components/CardPortefolio";
import Video from "../components/Video"
import Bande from "../components/Bande"
import ModalVision from "../components/ModalVision"
import { Search } from "lucide-react";






export default function HomePage() {

    const CardPortefolios = [
      { image : `${tchange}` , titre : "T-Change",texte : "A card component has a figure, a body part, and inside body there are title and actions parts",lien: ""},
      { image : `${eba}` , titre : "EBA",texte : "A card component has a figure, a body part, and inside body there are title and actions parts",lien: ""},
      { image : `${opprovi}` , titre : "OPPROVI",texte : "A card component has a figure, a body part, and inside body there are title and actions parts",lien: ""},

      
    ];


  return (
    <>   
        <Carousel/>
  
         <section className="flex flex-col w-full items-center lg:flex-row justify-around md:mt-15" id="about">

              <div className="w-[85%] text-center mt-8" >
                    <h2 className="text-3xl md:text-4xl font-bold">Qui sommes Nous ?</h2>

                    <p className="mt-2 mb-8">Lorem ipsum adipisicing elit. Eum amet architecto debitis necessitatibus provident saepe eligendi inventore error consequatur tenetur! Delectus corrupti dicta nobis, blanditiis cumque iure! Voluptates, alias aspernatur.</p>

                    <Button color={"bg-blue-500"} fonction ={()=>document.getElementById('my_modal_3').showModal()} >Notre Vision</Button>
                    <ModalVision/>
                      
              </div>

            <Carousel2/>
          
        
         </section>

         
          <section className="w-full flex flex-col items-center " id="services">

                  <h2 className="text-3xl md:text-4xl mb-5 md:mb-15 font-bold -mt-15  ">Nos services</h2>
                  
                  <div className=" w-full flex flex-col items-center md:flex-row md:justify-center gap-4">

                   <div className="bg-blue-50 w-[90%] rounded-sm mb-5 md:max-w-[30%] ">
                        <div className="px-3 py-2">
                             <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop-minimal-check-icon lucide-laptop-minimal-check"><path d="M2 20h20"/><path d="m9 10 2 2 4-4"/><rect x="3" y="4" width="18" height="12" rx="2"/></svg>                    
                             <h2 className="text-xl md:text-2xl my-1 font-bold">Conception de Site Internet</h2>
                             <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                   </div>

                   <div className="bg-blue-50 w-[90%] rounded-sm mb-5 md:max-w-[30%] ">
                        <div className="px-3 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brush-icon lucide-brush"><path d="m11 10 3 3"/><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"/><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"/></svg>
                             <h2 className="text-xl md:text-2xl my-1 font-bold">Design Graphique</h2>
                             <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                   </div>

                   <div className="bg-blue-50 w-[90%] rounded-sm mb-5 md:max-w-[30%] ">
                        <div className="px-3 py-2">
                             <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
                             <h2 className="text-xl md:text-2xl my-1 font-bold">Formation</h2>
                             <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                   </div>
                  </div>


          </section>

          <section className="w-full flex flex-col items-center  " id="portefolio" >

                <div className="w-full text-center mt-15 lg:mt-25">

                  <h2 className="text-3xl md:text-4xl  mb-5 font-bold">Nos Portefolios</h2>
                  <p className=" mb-8 text-center">Lorem Eum amet architecto debitis necessitatibus provident saepe eligendi.</p>
                   

                </div>

                  
                   <div className="w-full flex flex-col items-center gap-5 md:flex-row md:justify-center"> 
                        
                         {CardPortefolios.map((Card,index) => 
                        
                           <CardPortefolio image = {Card.image} texte = {Card.texte} lien = {Card.lien} titre = {Card.titre} key = {index} />
                         
                        )}

                    </div>

                    <a href="" className="mt-10"><Button color={"bg-blue-500"}>Découvrir Plus <Search size={20} strokeWidth={1} /> </Button></a>

              </section>



               <section className="w-full flex flex-col items-center " id="projets">

                  <h2 className="text-3xl md:text-4xl mb-5 md:mb-15 mt-15 md:mt-25 font-bold">Nos Projets</h2>

                  <div className="w-[85%] flex flex-col  md:flex-row gap-8 md:gap-10 ">

                      <img src={posto} alt="Postopage" className="w-full rounded-sm md:w-[45%]" />

                      <div>

                           <h3 className="text-xl md:text-2xl font-bold">Postopage</h3>
                           <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quibusdam laboriosam aliquam reiciendis unde tenetur similique suscipit. Voluptatem libero aliquid rem quisquam voluptatum .</p>
                         
                            <Button color={"bg-blue-500"} >Découvrir</Button>
                           
                      </div>


                  </div>

              </section>



              <div id="contact" className="hero min-h-screen mt-15 lg:mt-25">

                    <Video url = {video} zIndex = "-z-1"/>  

                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center grid grid-cols-1">
                      <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Contactez - nous</h1>
                        <p className="mb-5">
                          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                          quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <Button color={"bg-blue-500"} >Via Whatsapp</Button> &nbsp;
                        <Button color={"bg-blue-500"} >Via Email</Button>


                      </div>

                        
                    </div>
                </div>

              

                    <div className="w-full text-center " id="suivez">

                      <h2 className="text-3xl md:text-4xl mt-15  mb-5 font-bold">Suivez - nous</h2>
                      <p className=" mb-8 text-center">Lorem Eum amet architecto debitis necessitatibus provident saepe eligendi.</p>
                      
                      <div className="w-full flex justify-center gap-1.5">
 
                          

                          
                      </div>

                    </div>
    
          
    
    
    </>
  )
}
