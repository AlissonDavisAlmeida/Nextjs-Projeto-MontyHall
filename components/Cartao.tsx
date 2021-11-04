import styles from '../styles/cartao.module.css';

interface CartaoProps{
    bgColor? : string
    children? : any
}

function Cartao(props : CartaoProps) {
    return (  
        <div className={styles.cartao}
        style={{
            backgroundColor:props.bgColor ?? "white"
          }}>
            {props.children}
        </div>
    );
}

export default Cartao;