import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const bg = { backgroundColor: props.corSecundaria }

    return (
        <section className='time' style={ bg }>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <Colaborador />
        </section>
    )
}

export default Time