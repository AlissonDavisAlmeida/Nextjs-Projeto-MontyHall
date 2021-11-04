import { useEffect, useState } from "react";
import { atualizarPortas, criarPortas } from "../../../functions/porta";

import Porta from "../../../components/Porta";
import Link from 'next/link';
import styles  from '../../../styles/jogo.module.css';
import { useRouter } from "next/router";

function Jogo() {
    const router = useRouter()
    const [portas, setPortas] = useState([])

    const numPortas = +router.query.portas
    const isPresente = +router.query.presente

    useEffect(()=>{
       setPortas(criarPortas(numPortas, isPresente))
    },[router?.query])
   
    function renderPortas() {

        return portas.map((porta, index) => {
            return (
                <Porta value={porta} onChange={novaPorta => {

                    setPortas(atualizarPortas(portas, novaPorta))
                }} key={index} />
            )
        })
    }
  
    return (
        <div className={styles.jogo} >
           <div className={styles.portas}>
            {renderPortas()}

           </div>
           <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
           </div>
        </div>
    );
}

export default Jogo;