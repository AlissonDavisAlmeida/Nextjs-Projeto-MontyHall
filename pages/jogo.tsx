import { useState } from "react";
import { atualizarPortas, criarPortas } from "../functions/porta";
import PortaModel from "../model/porta";
import Porta from "../components/Porta";
import Link from 'next/link';
import styles  from '../styles/jogo.module.css';

function Jogo() {
    const [p1, setP1] = useState(new PortaModel(1));
    const [portas, setPortas] = useState(criarPortas(20, 4))

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