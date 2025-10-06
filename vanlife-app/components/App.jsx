import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer"
export default function App(){
    return(
        <BrowserRouter>
        
        <navbar>
            <Header/>
        </navbar>
        <Routes>
            <Route path="/"  element = {<Home />}/>
            <Route path = "/about" element={<About/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    )
}