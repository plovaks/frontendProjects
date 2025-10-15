
import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
           
            <main className="homePage-main">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link className="btn findVan-btn" to="/vans">Find your van</Link>
            </main>
            
        </>
        
    )
}