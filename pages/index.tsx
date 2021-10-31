import { useState } from "react";
import Porta from "../components/Porta";
import PortaModel from "../model/porta";

export default function Home() {
   const [p1, setP1]  = useState(new PortaModel(1)); 
  
  return (
    <div className="area">
      {/* <Presente></Presente> */}
      <Porta value={p1} onChange={novaPorta => setP1(novaPorta)}/>
     
      
    </div>
  )
}
