import { Route, Routes } from "react-router-dom"
import Structure from "./layouts/Structure"
import HomePage from "./pages/HomePage"
import ErrorPage from "./pages/ErrorPage"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
 

  return (
    <>
        

            <Header/>
         

            <HomePage/>
        
           
            <Footer/>
           
        

        
    </>
  )
}

export default App
