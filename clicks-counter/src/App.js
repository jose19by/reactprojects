import logo from './images/React_logo.png'
import './App.css';
import Boton from './components/Boton';
import Counter from './components/Counter';
import {useState} from 'react';

function App() {
  const [clicsCounter, setclicsCounter] = useState (0);
  const manejarClic = () =>{
    setclicsCounter(clicsCounter + 1)
  }
  const reiniciarContador = () =>{
    setclicsCounter(0);
  }

  return(
    <div className='App'>
      <div className='logo-container'>
      <img className='logo' 
      src={logo}
      alt='logo' />
      </div>
      <div className='count-container'>
        <Counter clicsCounter={clicsCounter} />
        <Boton
        texto='Clic'
        botonDeClick={true}
        manejarClic={manejarClic} />
        <Boton
        texto='Reiniciar'
        botonDeClick={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}


export default App;
