import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/porta";
import PortaModel from "../model/porta";


export default function Home() {
   const [p1, setP1]  = useState(new PortaModel(1)); 
   const [portas, setPortas] = useState(criarPortas(3,2))

  function renderPortas() {

    return portas.map((porta, index) =>{
      return (
        <Porta value={porta} onChange={novaPorta =>{

            setPortas( atualizarPortas(portas,novaPorta))
        }} key={index}/>
        )
    })
  }

  return (
    <div className="area">
      {/* <Presente></Presente> */}
     {/*  <Porta value={p1} onChange={novaPorta => setP1(novaPorta)}/> */}
      {/* {portas()} */}
      {renderPortas()}
    </div>
  )
}
