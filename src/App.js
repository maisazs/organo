import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#8ED4EF',
      corSecundaria: '#E7FBFF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#ABDE59',
      corSecundaria: '#EFFAE1'
    },
    {
      nome: 'Devops',
      corPrimaria: '#D56366',
      corSecundaria: '#F5EAEC'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#CF63BB',
      corSecundaria: '#F8E6F6'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#F0BE00',
      corSecundaria: '#FAF6D7'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#EA8431',
      corSecundaria: '#FBF1E1'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>)}
    </div>
  );
}

export default App;
