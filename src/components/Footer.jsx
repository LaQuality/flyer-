import logo from "../assets/images/logo.png"


export default function Footer() {
  return (

        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 mt-20">
        <aside>
            <img className=" w-22" src={logo} alt="logo de flyer" />

            <p>
            Flyer For the Future
            <br />
            Tous droits reservés
            </p>
        </aside>
        <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Site Internet</a>
            <a className="link link-hover">Marketing</a>
        </nav>
        <nav>
            <h6 className="footer-title">Company</h6>
            <a href="#about" className="link link-hover">About us</a>
            <a href="#contact" className="link link-hover">Contact</a>
            <a href="#portefolio" className="link link-hover">Portefolio</a>
            <a href="#services" className="link link-hover">Services</a>
            <a href="#projets" className="link link-hover">Projets</a>


        </nav>
        <nav>
            <h6 className="footer-title">Credits</h6>
            <a href="https://www.freepik.com/free-photo/hiking-shoes-action-mountain-desert-trail-path_4351633.htm#fromView=search&page=1&position=6&uuid=1a3aaa9c-de50-4795-9e73-9d4cf3f296fa&query=un+pas">Image by jcomp on Freepik</a>
            <a href="https://www.freepik.com/free-photo/happy-pretty-female-engineer-sitting-office-interior-having-documents_10273027.htm#fromView=search&page=1&position=16&uuid=6d68d3ac-c9f0-44cd-8add-e2907f0d69d7&query=travail?log-in=google">Image by wayhomestudio on Freepik</a>
            <a href="https://www.freepik.com/free-photo/cupped-hand-showing-hologram-technology_12196940.htm#fromView=search&page=2&position=23&uuid=3a65e6f6-ea01-4285-9158-ba8c2422d72a&query=main+presentant+quelque+chose">Image by rawpixel.com on Freepik</a>
            <a href="https://www.freepik.com/free-photo/teenager-with-basketball-ball_11735816.htm#fromView=search&page=1&position=11&uuid=57a00c65-8ae9-4b33-8c3a-8a84a26c6d3a&query=basket+ball">Image by freepik</a>
            <a href="https://www.freepik.com/free-photo/side-view-tired-nurse-work_32486261.htm#fromView=search&page=1&position=13&uuid=6bcc7abe-69ef-4a2f-9fac-f61778f96c15&query=travail+violence">Image by freepik</a>
            <a href="https://www.freepik.com/free-photo/front-view-business-people-meeting_7031359.htm#fromView=search&page=1&position=11&uuid=8396717b-18e8-4025-af67-da8f0e066447&query=formation">Image by freepik</a>
            <a href="https://www.freepik.com/free-video/businesswoman-taking-smartphone-female-executive-having-phone-call_1451604#fromView=search&page=1&position=10&uuid=937ac1fe-7b04-497e-92f9-c702ae4148c2">Video by Stockbusters</a>
            <a href="https://www.freepik.com/free-video/african-american-girl-talking-mobile-phone_2829936#fromView=resource_detail&position=2&from_element=cross_selling__video">Video by freepik</a>
            <a href="https://www.freepik.com/free-photo/amateur-couple-dancing-salsa-together_94670492.htm#fromView=search&page=1&position=10&uuid=ad9a257d-425a-43b9-a48e-fa254d4667ac&query=personnes+passant+un+bon+moment+ensemble">Image by freepik</a>
            <a href="https://www.freepik.com/free-photo/woman-with-tablet-device-illustrating_36305562.htm">Image by pikisuperstar on Freepik</a>
            <a href="https://www.freepik.com/free-photo/man-looking-through-binoculars_4149144.htm#fromView=search&page=1&position=48&uuid=8ec066ce-4158-456f-a2e1-05e9ba43a33a&query=notre+vision+">Image by freepik</a>
        </nav>
    </footer>

  )
}
