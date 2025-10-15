import React from "react"
import { useParams, Link, Outlet , NavLink} from "react-router-dom"

export default function HostVanDetail() {
    const activeStyle ={
        color:"#161616",
        fontWeight:"600",
        textDecoration:"underline"
    }
    const { id } = useParams()
    const [currentVan, setCurrentVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    }, [])

    if (!currentVan) {
        return <h1>Loading...</h1>
    }

    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <nav className="host-van-detail-nav">
                    <NavLink to="." style={({isActive}) => isActive? activeStyle : null} end>Details</NavLink>
                    <NavLink to="pricing" style={({isActive}) => isActive? activeStyle : null}>Pricing</NavLink>
                    <NavLink to="photos" style={({isActive}) => isActive? activeStyle : null}>Photos</NavLink>
                </nav>
                {<Outlet context={{currentVan}}/>}
            </div>
        </section>
    )
}
/**
 * Challenge: Add the links for the navbar! Check the 
 * Figma design slide to see what the text is.
 * 
 * Make it so the link style changes to more clearly
 * indicate which route we're currently on.
 * 
 * Remember, "Details" leads to /host/vans/:id, not
 * /host/vans/:id/details, so you'll need to employ a
 * trick we recently learned for that to work.
 */