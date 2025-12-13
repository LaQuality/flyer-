import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Structure() {
  return (
    <>      
        <Header/>
    
        <main className="w-full flex flex-col items-center">
             <Outlet/>   
        </main>

        <Footer/>
        
    
    </>
  )
}
