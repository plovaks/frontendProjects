import {Link} from "react-router-dom"
export default function Header(){
    return (
        <header>
            <h1>#VANLIFE</h1>
            <ul>
                <li><Link to= "/">Home</Link></li>
                <li><Link to="/about">Vans</Link></li>
            </ul>
        </header>
    )
}