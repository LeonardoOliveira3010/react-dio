import { useState } from "react"

const ListaItem = () =>{
    const [itens, setItens] = useState(['Alface', 'tomate', 'melancia'])
    const addItens = (item) => {
        setItens ([...itens, item])
    }

    const removeItem = () =>{
        setItens([...itens.slice(1)])
    }

    return (
        <>
            <div className='bloco-lista'>
                <p>minha lista</p>
            </div>
            
            <ul className='lista-estilizada'>
                {itens.map(item => <li> {item} </li>)}
            </ul>

            <button onClick={addItens}>Add Item</button>
            <button onClick={removeItem}>Remove Item</button>
        </>
    )
}

export default ListaItem;