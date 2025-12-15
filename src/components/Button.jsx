import Intersection from "./Intersection";


export default function Button({color,children,fonction}) {
  return (
    
    // <button onClick={fonction} className={`font-monserrat inline-flex items-center gap-2 text-[15px]   self-start  font-black  px-9 py-2 rounded-2xl text-white ${color}  cursor-pointer `}> {children} </button>
    
    <Intersection fonction={fonction} tag={"button"} stylo ={`font-monserrat inline-flex items-center gap-2 text-[15px]   self-start  font-black  px-9 py-2 rounded-2xl text-white ${color}  cursor-pointer `}>{children}</Intersection>

  )
}
