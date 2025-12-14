

export default function Button({color,children,fonction}) {
  return (
    
    <button onClick={fonction} className={`font-monserrat inline-flex items-center gap-2 text-[14px]  self-start ${color} font-bold  px-3.5 py-2 rounded-2xl text-white  cursor-pointer `}> {children} </button>
    
  )
}
