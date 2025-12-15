import { useEffect, useRef } from "react";


export default function Intersection({tag,children,stylo,fonction}) {

  const ref = useRef(null);
  const Tag = tag; // La balise dynamique

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active"); // rejouer animation
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
     return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${stylo}`} onClick ={fonction}>
      {children}
    </Tag>
  );
  
}
