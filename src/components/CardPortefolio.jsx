import Button from "./Button";


export default function CardPortefolio({image,lien,texte,titre}) {
  return (
       <div className="card min-h-95  w-[85%] md:w-[30%] mb-5 md:mb-0  shadow-sm relative ">
                                   <figure className="absolute h-full w-full top-0 left-0 -z-1 rounded-lg  ">
                                     <img
                                       src={image}
                                       className="w-full h-full overflow-hidden object-cover animate-zoom "
                                       alt="t-change image" />
                                   </figure>
                                   <div className=" bg-black/40 rounded-lg text-white min-h-95 h-full w-full flex flex-col items-center gap-2 text-center justify-end ">
                                     <h2 className="text-2xl font-bold">{titre}</h2>   
                                      <p className="text-sm w-[80%]"> {texte} </p>                         
                                     <div className="card-actions mb-5">
                                       <Button color={"bg-blue-500"}> <a href={lien} target="_blank">Visualiser</a> </Button>
                                       

                                     </div>
                                    
                                   </div>
        </div>
  )
}
