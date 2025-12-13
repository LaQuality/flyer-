

export default function Slide({image}) {
  return (
    
             <div id="slide1" className="carousel-item relative w-4/5 sm:w-3/5 md:w-[85%] rounded-box">
                 <div className={`w-full h-[60vh] sm:h-[60vh] md:h-[70vh] bg-center bg-cover rounded-box flex flex-col justify-center items-start `}  style={{
                         backgroundImage: `
                         linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)),
                         url(${image})
                         `
                     }} >  
                     
                     <p className="ml-2.5 text-[14px] md:text-{} md:ml-[60px] text-white mb-2 font-monserrat">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo vero ullam iure officia, hic quas quo voluptates pariatur .</p>
     
                     <button className=" font-monserrat text-[14px] md:text-xl   bg-blue-500 ml-2.5 md:ml-[60px] px-3 py-2 rounded-xl text-white ">Contactez - Nous</button>
     
               </div>
               {/* Navigation */}
     
                 
               <div className="absolute  justify-between transform -translate-y-1/2 left-2 right-2 top-1/2 hidden md:flex " >
                 <a href="#slide3" className="btn btn-circle">❮</a>
                 <a href="#slide2" className="btn btn-circle">❯</a>
               </div>
             </div>
     
  )
}
