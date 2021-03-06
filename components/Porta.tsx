import styles from '../styles/porta.module.css';
import PortaModel from '../model/porta';
import Presente from './Presente';
interface PortaProps {
    value: PortaModel,
    onChange: (novaPorta : PortaModel)=> void
}

function Porta(props : PortaProps) {

const porta = props.value
  const selecionada=  porta.selecionada && !porta.aberta ? styles.selecionada :""
    
  const alternarSelecao = ev =>{
      console.log(ev);
      props.onChange(porta.alternarSelecao())
  }
  
  const abrir = ev =>{
      ev.stopPropagation()
   props.onChange(porta.abrir())
}
  function renderizarPorta() {
      return (
       
        <div className={styles.porta}>

            <div className={styles.numero}>{porta.numero}</div>
            <div className={styles.macaneta} onClick={abrir}></div>
        </div>
    
      )
  }

  function presente() {
    if(porta.isPresente)  {
        return <Presente/>
    }
    else{
        return false
    }
  }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
            {porta.aberta ? presente() : renderizarPorta()}
            </div>
            <div className={styles.floor}></div>
        </div>
    );
}

export default Porta;