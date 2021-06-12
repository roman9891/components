import React, { useState } from 'react'
import loading from '../Resources/loading.gif'

const Loader = () => {
    const [isLoading, setIsLoading] = useState(false)

    const simulateLoadingTime = loadingTime => new Promise(resolve => setTimeout(resolve, loadingTime))
    
    const buttonHandler = async e => {
        let loadingTime = Math.ceil(Math.random() * 3) * 1000
        
        setIsLoading(true)
        await simulateLoadingTime(loadingTime)
        setIsLoading(false)
    }

    return (
        <div>
            <button onClick={buttonHandler}>Load</button>
            {isLoading && <img src={loading} alt="loading"/>}
        </div>
    )
}

export default Loader