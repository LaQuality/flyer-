

export default function Button({color,children,fonction}) {
  return (
    
    <button onClick={fonction} className={`font-monserrat inline-flex items-center gap-2 text-[14px]  self-start ${color}  px-3 py-2 rounded-lg text-white  cursor-pointer `}> {children} </button>
    
  )
}
