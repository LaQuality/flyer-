import { useEffect, useRef } from "react";

export default function TexteAnimation({ tag, children, stylo, fonction }) {
  const ref = useRef(null);
  const Tag = tag;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // 🔥 stop après la 1ʳᵉ fois
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
    <Tag
      ref={ref}
      className={`reveal ${stylo}`}
      onClick={fonction}
    >
      {children}
    </Tag>
  );
}
