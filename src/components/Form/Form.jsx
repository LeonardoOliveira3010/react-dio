// import React, {useState} from "react";

const Form = () =>{
    // const [sorvete, setSorvete] = useState([{
    //     sabor: 'uva',
    //     casquinha: true,
    //     gaurdanapos: 'si,'
    // }])

    // const handleInputChange = (e) =>{
    //     let target = e.target
    //     let value = target.type === 'checkbox' ? target.checked : target.value
    // }

    return( 
        <form action="">
            <label htmlFor="/">
                Nome:
                <input type="text" placeholder="Digite seu nome" />
            </label>

            <label htmlFor="/">
                e-mail:
                <input type="text" placeholder="Digite seu e-mail" />
            </label>
        </form>
    )
}

export default Form;