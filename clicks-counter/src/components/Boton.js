import React from 'react';

function Boton ({ texto, botonDeClick, manejarClic}){
    return ( 
        <button className={botonDeClick ? 'boton-clic': 'boton-reiniciar'}
        onClick={manejarClic}>
        {texto}</button>
    )
}

export default Boton;