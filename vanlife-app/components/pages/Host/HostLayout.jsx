import {Outlet} from "react-router-dom"
import { Link, NavLink } from "react-router-dom"
export default function HostLayout(){
    const activeLink ={
        "font-weight": "bold",
      "text-decoration": "underline",
       "color": "#161616",
    }
    return (
        <>
            <nav className="host-nav">
                <NavLink to="." style = {({isActive}) => isActive ? activeLink : null} end>Dashboard</NavLink>
                <NavLink to="income" style = {({isActive}) => isActive ? activeLink : null}>Income</NavLink>
                <NavLink to="vans" style={({isActive}) => isActive ? activeLink :null}>Vans</NavLink>
                <NavLink to="reviews" style = {({isActive}) => isActive ? activeLink : null}>Reviews</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}