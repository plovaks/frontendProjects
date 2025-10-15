import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VansDetailed from "./pages/VansDetailed";
import Layout from "./layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./pages/Host/HostLayout";
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
export default function App(){
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/"  element = {<Home />}/>
                <Route path = "about" element={<About/>} />
                <Route path="vans" element={<Vans/>}/>
                <Route path="vans/:id" element ={<VansDetailed/>} />

                <Route path="host" element={<HostLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="income" element={<Income/>}/>
                    <Route path="reviews" element={<Reviews/>}/>
                    <Route path="vans" element={<HostVans/>}/>
                    <Route path="vans/:id" element={<HostVanDetail/>}>
                        <Route index element={<HostVanInfo/>}/>
                        <Route path="photos" element={<HostVanPhotos/>}/>
                        <Route path="pricing" element={<HostVanPricing/>}/>
                    </Route>
                </Route>
                
            </Route>
        </Routes>
    </BrowserRouter>
    )
}