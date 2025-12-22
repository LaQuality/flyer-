import { useEffect, useRef, useState } from "react"
import imageCarousel1 from "../assets/images/carousel1.jpg"
import imageCarousel2 from "../assets/images/carousel2.jpg"
import imageCarousel3 from "../assets/images/carousel3.jpg"
import Button from "./Button"
import Intersection from "./Intersection"

export default function Carousel() {
  const carouselRef = useRef(null)
  const [active, setActive] = useState(2)

  // Démarrer sur le slide 2
  useEffect(() => {
    document.getElementById("slide2")?.scrollIntoView({
      behavior: "auto",
      inline: "center",
    })
  }, [])

  // Détection du slide actif
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const onScroll = () => {
      const slides = [...carousel.children]
      const center = carousel.scrollLeft + carousel.offsetWidth / 2

      let closest = 0
      let minDist = Infinity

      slides.forEach((slide, index) => {
        const slideCenter =
          slide.offsetLeft + slide.offsetWidth / 2
        const dist = Math.abs(center - slideCenter)

        if (dist < minDist) {
          minDist = dist
          closest = index
        }
      })

      setActive(closest + 1)
    }

    carousel.addEventListener("scroll", onScroll)
    return () => carousel.removeEventListener("scroll", onScroll)
  }, [])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    })
  }

  const items = [
    { titre : "Conception de sites web", texte : "Création de sites web innovants, adaptés à tous les écrans, valorisant l’activité et le secteur de chacun de nos clients et partenaires.", image: imageCarousel1, clas : "items-start ", id:"slide1", classDiv : "ml-2.5 md:ml-[60px]" },
    { titre : "Flyer For the Future ", texte : "Des services performants et uniques, pensés pour répondre efficacement aux besoins de nos clients et partenaires . ", image: imageCarousel2, clas : "items-center text-center", id:"slide2", classDiv:"" },
    { titre : "Conception graphique", texte : "Conception d'affiche, flyer, logo ... personnalisée, offrant une image de marque forte, élégante et une beauté visuelle durable. ", image: imageCarousel3, clas : "items-end text-end",id:"slide3", classDiv:"mr-2.5 md:mr-[60px]" },


  ]

  return (
    <section className="w-full mx-auto p-4 mt-[10vh]">

      {/* CAROUSEL */}
      <div
        ref={carouselRef}
        className="carousel carousel-center w-full space-x-4 rounded-box"
      >
  
      {items.map((item,index) => (
                   

          <div id={item.id} key={index} className="carousel-item relative w-[85%] rounded-box">
              <div
                className={`w-full h-[70vh] md:h-[80vh] rounded-box flex flex-col justify-center ${item.clas} bg-cover bg-center`}
                style={{
                  backgroundImage: `
                    linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)),
                    url(${item.image})
                  `,
                }}
              >
                <div className={ `${item.classDiv} max-w-[80%]`}>
                  <Intersection tag="h2" stylo="font-bold text-4xl md:text-5xl text-white mb-2">
                    {item.titre}
                  </Intersection>
                  <Intersection tag="p" stylo="text-[15px] md:text-[16px] text-white mb-2 font-monserrat">
                      {item.texte}
                  </Intersection>
                  <Button color="bg-blue-500">Contactez - Nous</Button>
                </div>
              </div>
        </div>
          

      ))}
        
 
       
      </div>

      {/* PAGINATION (points bleus) */}
      <div className="flex justify-center gap-3 mt-6">
        {[1, 2, 3].map((i) => (
          <button
            key={i}
            onClick={() => goTo(`slide${i}`)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              active === i
                ? "bg-blue-500 scale-125"
                : "bg-blue-300"
            }`}
          />
        ))}
      </div>

    </section>
  )
}
