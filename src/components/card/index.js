import { useState } from "react"
import Button from "../button"

const Card = () => {

    const [valor, setValor] = useState(0)

    function Adicionar(){
        setValor(valor + 1)
    }

    function Remover(){
        setValor(valor - 1)
    }

    return (
        <div className="card">
            <div className="card-header">
                Meu primeiro card
            </div>
            <div className="card-body">
                <Button acao={Adicionar} classe="btn btn-success" texto="Adicionar" />
                <Button acao={Remover} classe="btn btn-danger" texto="Remover" />
                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card