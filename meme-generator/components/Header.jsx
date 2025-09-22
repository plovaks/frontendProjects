import React from 'react';
import trollFace from '../images/Trollface.png'
export default function Header(){
 

    // const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    // React.useEffect(() => {
    //     function watchWindowWidth(){
    //         setWindowWidth(window.innerWidth)
    //     }
    //     window.addEventListener('resize',watchWindowWidth )
    //     return function(){
    //         window.removeEventListener('resize', watchWindowWidth)
    //     }
    // }, [])
    return(
        <header className='header'>
            <img
                src={trollFace}
            />
            <h1>Meme Generator</h1>
        </header>
        // <h1>Window width: {windowWidth}</h1>
    )
}