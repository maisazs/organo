import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    //let valor = 'Guilherme'

    const [valor, setValor] = useState('')

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto