import Header from "./Header"
import Main from "./Main"
import React from "react";
import { useState } from "react";
export default function App(){
    // const [starWarsData, setstarWarsData] = React.useState(null);
    
    // const [count, setCount] = React.useState(1);
    
    // React.useEffect(() => {
    //     fetch(`https://swapi.dev/api/people/${count}`)
    //         .then(responce => responce.json())
    //         .then(data => setuser(data));
    // }, [count])
    /**
     * Challenge:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */
    // const [show, setShow] = useState(true);


    return(
        <>
        <Header/>
        <Main/>


        {/* <main>
            <button onClick={() => setShow((prevShow) => !prevShow)}>
                toggle windowTracker
                
            </button>
            {show === true && <Header/>}
            
        </main> */}
        {/* <div>
            <h2>The count is {count}</h2>
            <button onClick={() =>setCount(prevCount => prevCount + 1)}>Get next character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            
        </div> */}
        </>
        
    )
}