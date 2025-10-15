import {NavLink,Link} from "react-router-dom"
export default function Header(){
    return (
        <header>
            <ul>
                <li ><Link id="site-logo" to= "/">#VANLIFE</Link></li>
                <li><NavLink to="/host" className={({isActive}) => isActive ? "my-link": ""}>Host</NavLink></li>
                <li><NavLink to="/about" className={({isActive}) => isActive ? "my-link": ""}>About</NavLink></li>
                <li><NavLink to="/vans" className={({isActive}) => isActive ? "my-link": ""}>Vans</NavLink></li>
            </ul>
        </header>
    )
}