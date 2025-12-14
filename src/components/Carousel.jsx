import imageCarousel1 from "../assets/images/carousel1.jpg"
import imageCarousel2 from "../assets/images/carousel2.jpg"
import imageCarousel3 from "../assets/images/carousel3.jpg"
import Button from "./Button"

export default function Carousel() {
  return (


     <section className="w-full  mx-auto p-4">
      {/* --- CAROUSEL --- */}
      <div className="carousel carousel-center w-full space-x-4 rounded-box mt-[10vh]">

              <div id="slide1" className="carousel-item relative w-4/5 sm:w-3/5 md:w-[85%] rounded-box">
                      <div className={`w-full h-[60vh] sm:h-[60vh] md:h-[70vh] rounded-box flex flex-col justify-center bg-center bg-cover items-start`} style={{
                          backgroundImage: `
                          linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)),
                          url(${imageCarousel1})
                          `
                      }}  >  
                          <div className="ml-2.5 md:ml-[60px] max-w-[80%] ">
                              <h2 className="font-bold text-3xl md:text-5xl text-white">Un design personnalisé</h2>
                              <p className=" text-[15px] md:text-[16px] text-white mb-2 font-monserrat">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo vero ullam iure officia, hic quas quo voluptates pariatur .</p>         
                              <a href=""><Button color={"bg-blue-500"}>Contactez - Nous</Button></a>
                          </div>    
                    </div>
                    {/* Navigation */}
          
                      
                    <div className="absolute  justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 hidden md:flex " >
                      <a href="#slide3" className="btn btn-circle">❮</a>
                      <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                  </div>




              {/* Slide 2 */}
              <div id="slide2" className="carousel-item relative w-4/5 sm:w-3/5 md:w-[85%] rounded-box">
                <div className="w-full h-[60vh] sm:h-[60vh] md:h-[70vh] rounded-box bg-cover bg-center flex flex-col justify-center items-center text-center" style={{
                          backgroundImage: `
                          linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)),
                          url(${imageCarousel2})
                          `
                      }}>
                          <div className="max-w-[80%] ">
                            <h2 className="font-bold text-3xl md:text-5xl text-white">Un design personnalisé</h2>
                            <p className=" text-[15px] md:text-[16px] text-white mb-2 font-monserrat">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo vero ullam iure officia, hic quas quo voluptates pariatur .</p>         
                            <a href=""><Button color={"bg-blue-500"}>Contactez - Nous</Button></a>

                          </div>
                      </div>
                <div className="absolute  justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 hidden md:flex ">
                  <a href="#slide1" className="btn btn-circle">❮</a>
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div>




              {/* Slide 3 */}
              <div id="slide3" className="carousel-item relative w-4/5 sm:w-3/5 md:w-[85%] rounded-box">
                <div className="w-full h-[60vh] sm:h-[60vh] md:h-[70vh] rounded-box bg-cover bg-center flex flex-col justify-center items-end text-end" style={{
                          backgroundImage: `
                          linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)),
                          url(${imageCarousel3})
                          `
                      }}>

                         <div className="mr-2.5 md:mr-[60px] max-w-[80%] ">
                              <h2 className="font-bold text-3xl md:text-5xl text-white">Un design personnalisé</h2>
                              <p className=" text-[15px] md:text-[16px]  text-white mb-2 font-monserrat">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo vero ullam iure officia, hic quas quo voluptates pariatur .</p>         
                              <a href=""><Button color={"bg-blue-500"}>Contactez - Nous</Button></a>
                 
                         </div>      
                    
                      </div>
                <div className="absolute justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 hidden md:flex ">
                  <a href="#slide2" className="btn btn-circle">❮</a>
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div>

      </div>
    </section>
  )
}
