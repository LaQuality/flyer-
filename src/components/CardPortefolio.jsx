import Button from "./Button";


export default function CardPortefolio({image,lien,texte,titre}) {
  return (
       <div className="card bg-base-100 w-[85%] md:w-[30%] mb-5 md:mb-0  shadow-sm">
                                   <figure>
                                     <img
                                       src={image}
                                       className="w-full h-55 object-cover"
                                       alt="t-change image" />
                                   </figure>
                                   <div className="card-body">
                                     <h2 className="card-title">{titre}</h2>
                                     <p> {texte} </p>
                                     <div className="card-actions justify-end">
                                       <Button color={"bg-blue-500"}> <a href={lien}>Visualiser</a> </Button>
                                     </div>
                                   </div>
        </div>
  )
}
