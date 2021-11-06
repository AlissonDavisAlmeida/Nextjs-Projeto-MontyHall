import styles from '../styles/formulario.module.css';


import Cartao from "../components/Cartao";
import Link from 'next/link';
import EntradaNumerica from '../components/EntradaNumerica';
import { useState } from 'react';


export default function Form() {
  
  const [qtdPortas, setqtdPortas] = useState(4);
  const [isPresent, setisPresent] = useState(2);
  
  return (
    <div className={styles.formulario}>
      <div>
      <Cartao bgColor="#c0392c">
        <h1>Monty Hall</h1>
      </Cartao>
      <Cartao >
        <EntradaNumerica text="Porta com Presente" value={isPresent} onChange={novaPortaComPresente => setisPresent(novaPortaComPresente)}/>
      </Cartao>

      </div>
      <div>
      <Cartao>
      <EntradaNumerica  value={qtdPortas} onChange={novaQuantidade=> setqtdPortas(novaQuantidade)} text={"Quantidade de Portas"}/>
      </Cartao>
      <Cartao bgColor="#28a085">
    <Link href={`/jogo/${qtdPortas}/${isPresent}`} passHref>
      <h2 className={styles.link}>Iniciar Jogo</h2>
      </Link>
      </Cartao>

      </div>
    </div>
  )
}
