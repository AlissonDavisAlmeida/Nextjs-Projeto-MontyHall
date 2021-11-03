import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/porta";
import PortaModel from "../model/porta";


export default function Home() {
  
  return (
    <div className="area" style={{display:"flex", flexWrap:"wrap"}}>
      <h1>Inicio do Jogo</h1>
    </div>
  )
}
