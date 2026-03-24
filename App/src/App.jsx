import React, { useState } from 'react'

// APENAS UM TREINO
function App(){
  const [texto, setTexto] = useState("olá vivitante");

  return(
    <>
    <div className='card'>
      <h1>Olá {texto}</h1>
      <p>Email:</p>
      <p>Github:</p>
      <p>LInkedin:</p>
      <button onClick={() => setTexto("vini")}>mudar</button>
    </div>
    </>
    
  )
}

export default App