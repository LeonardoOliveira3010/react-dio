import React, { useState } from "react";

import { connect } from 'react-redux'

const Counter = (props) =>{
    const [counts, setCounts] = useState(0)

    function adicionar(){
        setCounts(counts + 1) 
    }

    function remover(){
        setCounts(counts - 1)
    }

    // Tentando utilizar o Redux
        // dispatch (ato de enviar a mensagem)
    let increment = () => {
        props.dispatch({ type: 'INCREMENT' })
    }
    
    let decrement = () => {
        props.dispatch({ type: 'DECREMENT' })
    }

    return (
        <>
          
            <p>Countador</p>
            
            {/* <div style={{display:'flex'}}>
                <button onClick={adicionar}>Add Item</button>
                    <p style={{margin: '10px'}}>{counts}</p>  
                <button onClick={remover}>Remove Item</button>
            </div> */}

            <div style={{display:'flex'}}>
                <button onClick={increment}>Add Item</button>
                    <p style={{margin: '10px'}}>{counts}</p>  
                <button onClick={decrement}>Remove Item</button>
            </div>
            
        </>
    )
}

export default Counter;