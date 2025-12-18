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

  return (
    <section className="w-full mx-auto p-4 mt-[10vh]">

      {/* CAROUSEL */}
      <div
        ref={carouselRef}
        className="carousel carousel-center w-full space-x-4 rounded-box"
      >

        {/* SLIDE 1 */}
        <div id="slide1" className="carousel-item relative w-[85%] rounded-box">
          <div
            className="w-full h-[70vh] md:h-[80vh] rounded-box flex flex-col justify-center items-start bg-cover bg-center"
            style={{
              backgroundImage: `
                linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)),
                url(${imageCarousel1})
              `,
            }}
          >
            <div className="ml-2.5 md:ml-[60px] max-w-[80%]">
              <Intersection tag="h2" stylo="font-bold text-4xl md:text-5xl text-white mb-2">
                Un design personnalisé
              </Intersection>
              <Intersection tag="p" stylo="text-[15px] md:text-[16px] text-white mb-2 font-monserrat">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo vero ullam iure officia.
              </Intersection>
              <Button color="bg-blue-500">Contactez - Nous</Button>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div id="slide2" className="carousel-item relative w-[85%] rounded-box">
          <div
            className="w-full h-[70vh] md:h-[80vh] rounded-box flex flex-col justify-center items-center text-center bg-cover bg-center"
            style={{
              backgroundImage: `
                linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)),
                url(${imageCarousel2})
              `,
            }}
          >
            <div className="max-w-[80%]">
              <Intersection tag="h2" stylo="font-bold text-4xl md:text-5xl text-white mb-2">
                Un design personnalisé
              </Intersection>
              <Intersection tag="p" stylo="text-[15px] md:text-[16px] text-white mb-2 font-monserrat">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo vero ullam iure officia.
              </Intersection>
              <Button color="bg-blue-500">Contactez - Nous</Button>
            </div>
          </div>
        </div>

        {/* SLIDE 3 */}
        <div id="slide3" className="carousel-item relative w-[85%] rounded-box">
          <div
            className="w-full h-[70vh] md:h-[80vh] rounded-box flex flex-col justify-center items-end text-end bg-cover bg-center"
            style={{
              backgroundImage: `
                linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5)),
                url(${imageCarousel3})
              `,
            }}
          >
            <div className="mr-2.5 md:mr-[60px] max-w-[80%]">
              <Intersection tag="h2" stylo="font-bold text-4xl md:text-5xl text-white mb-2">
                Un design personnalisé
              </Intersection>
              <Intersection tag="p" stylo="text-[15px] md:text-[16px] text-white mb-2 font-monserrat">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo vero ullam iure officia.
              </Intersection>
              <Button color="bg-blue-500">Contactez - Nous</Button>
            </div>
          </div>
        </div>

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
