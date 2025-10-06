import Header from "./Header"
import { Link } from "react-router-dom"
import abtImg from "../images/AboutImg.png"
export default function About (){
    return (
        <>
            
            <main className="aboutPage-main">
               <img className="abtImg" src={abtImg} alt="top van img" />
               <div className="aboutPage-content">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉) Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <article>
                    <h2>Your destination is waiting. Your van is ready.</h2>
                    <Link to="/vans" className="link-button">Explore our vans</Link>
                </article>
               </div>
            </main>
            
        </>
    )
}