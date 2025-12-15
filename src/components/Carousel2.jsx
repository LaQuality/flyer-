import pourquoiNous from "../assets/images/pourquoi.png"
import AnimationCarousel2 from "./AnimationCarousel2"


export default function Carousel2() {
  return (
       <div className="my-8 w-full flex flex-col items-center text-center relative">


                <h2 className="text-3xl md:text-4xl font-bold ">Pourquoi Nous ?</h2>

               <div className="w-full md:w-[90%] flex flex-col items-center md:flex-row md:justify-around ">

               <div className="carousel w-[85%]">


                    <div id="item1" className="carousel-item w-full ">
                          <p className="mt-2 mb-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum amet architecto debitis necessitatibus provident saepe, blanditiis cumque iure! Voluptates, alias aspernatur.</p>
                         
                    </div>
                    <div id="item2" className="carousel-item w-full">
                          <p className="mt-2 mb-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum amet architecto debitis necessitatibus provident saepe, blanditiis cumque iure! Voluptates, alias aspernatur.</p>

                    </div>
                    <div id="item3" className="carousel-item w-full">
                          <p className="mt-2 mb-4 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum amet architecto debitis necessitatibus provident saepe, blanditiis cumque iure! Voluptates, alias aspernatur.</p>

                    </div>
                    <div id="item4" className="carousel-item w-full">
                          <p className="mt-2 mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum amet architecto debitis necessitatibus provident saepe, blanditiis cumque iure! Voluptates, alias aspernatur.</p>
                      
                    </div>
                  </div>

          
                  <AnimationCarousel2 image={pourquoiNous} />

                  </div>

          </div>
  )
}
