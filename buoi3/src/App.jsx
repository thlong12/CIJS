import { useState } from "react";

import React from 'react'

export const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="container">
            <button onClick={function () {
                setCount(count === 2 ? 0 : count + 1)
            }}>Next</button>
             <div className="traffic-light">
                <span>{count === 0 ? <div className="red"></div> : <div className="dot"></div>}</span>
                <span>{count === 1 ? <div className="yellow"></div> : <div className="dot"></div>}</span>
                <span>{count === 2 ? <div className="green"></div> : <div className="dot"></div>}</span>
            </div>

        </div>
    )
}
