import { useState } from "react";
import Button from "../Button/Button";

const Card = () =>{
    const [valor, setValor] = useState(0)

    function adicionar(){
        setValor(valor + 1) 
    }

    function remover(){
        setValor(valor - 1)
    }    

    return (
        <>
            <div className="card">
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <p>{valor}</p>  
                    
                    <Button className="btn btn-danger" onClick={remover}>
                        Remover
                    </Button>

                    <Button className="btn btn-success" onClick={adicionar}>
                        Adicionar
                    </Button>
                </div>
            </div>
        </>
    )
}


export default Card;