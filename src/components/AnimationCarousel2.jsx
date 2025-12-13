import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimationCarousel2({ image }) {
  const ref = useRef(null);

  // On récupère la progression du scroll sur ce conteneur
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Déplacement horizontal uniquement
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0,500]);

  return (
    // Wrapper relatif pour le calcul du scroll
    <div ref={ref} className="relative  w-full h-[300px] overflow-hidden">
      <motion.div
        style={{ x }}
        className="absolute top-0 left-0  w-full"
      >
        {/* DIV des boutons */}
        <div className="flex mt-2 w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs bg-blue-500 text-white">
            1
          </a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
        </div>

        {/* IMAGE */}
        <img
          src={image}
          className="absolute right-0 -bottom-33 h-77 object-cover -z-10 md:hidden"
          alt="image animée"
        />
      </motion.div>
    </div>
  );
}
