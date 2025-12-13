

export default function Video({url,zIndex}) {
  return (
        <video src={url} loop autoPlay muted className={`w-full ${zIndex} object-cover h-full`}></video>       
  )
}
