import React, { useState  } from 'react'
import './App.css';
import  { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'

const App = () => {
    
    const [counter, setState] = useState(0)

    const handleIncrement = () => {
        setState(counter + 1)
    }

    const handleDecrement = () => {
        setState(counter - 1)
    }


    return (
        <div>
            <h3>counter app</h3>
            <button onClick={handleIncrement}><FaRegThumbsUp style={{fontSize: '20px'}}/></button>
            <p>{counter}</p>
            <button onClick={handleDecrement}><FaRegThumbsDown style={{fontSize: '20px'}}/></button>
        </div>
    )

}

export default App;
