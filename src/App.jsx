import { Route, Routes } from "react-router-dom"
import Structure from "./layouts/Structure"
import HomePage from "./pages/HomePage"
import ErrorPage from "./pages/ErrorPage"

function App() {
 

  return (
    <>
         <Routes>

         <Route element = { <Structure/>}>

         <Route path="/*" element= {<HomePage/>} />
         <Route path="/" element= {<ErrorPage/>} />
        
           
         </Route>
        

         </Routes>
    </>
  )
}

export default App
