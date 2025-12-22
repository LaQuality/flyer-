import pourquoiNous from "../assets/images/pourquoi.png"
import AnimationCarousel2 from "./AnimationCarousel2"


export default function Carousel2() {
  return (
       <div className="my-8 w-full flex flex-col items-center text-center relative">


                <h2 className="text-3xl md:text-4xl font-bold ">Pourquoi Nous ?</h2>

               <div className="w-full md:w-[90%] flex flex-col items-center md:flex-row md:justify-around ">

               <div className="carousel w-[85%] overflow-x-hidden">


                    <div id="item1" className="carousel-item w-full ">
                          <p className="mt-2 mb-4 ">Nous disposons de développeurs certifiés par <span className="font-bold">Meta</span>, garantissant des solutions digitales fiables, innovantes et performantes, adaptées à vos besoins et à votre secteur d’activité.</p>
                         
                    </div>
                    <div id="item2" className="carousel-item w-full">
                          <p className="mt-2 mb-4 ">Des designers <span className="font-bold">expérimentés</span> pour vos besoins, capables de valoriser votre image de marque avec créativité, impact et professionnalisme, tout en proposant des solutions esthétiques et efficaces.</p>

                    </div>
                    <div id="item3" className="carousel-item w-full">
                          <p className="mt-2 mb-4 ">Nous avons accompagné diverses entreprises et particuliers. <span className="font-bold"> Forts de nos réussites et de nos erreurs</span>, nous savons ce qui fonctionne et ce qui ne fonctionne pas, afin de vous proposer des solutions digitales efficaces et adaptées à vos besoins.</p>

                    </div>
                    <div id="item4" className="carousel-item w-full">
                          <p className="mt-2 mb-4">Car nous sommes comme vous : des <span className="font-bold">humains</span>  pleins d’ambition et d’audace, et nous savons mieux que quiconque à quel point la réalisation de vos idées vous tient à cœur.</p>
                      
                    </div>
                  </div>

          
                  <AnimationCarousel2 image={pourquoiNous} />

                  </div>

          </div>
  )
}
