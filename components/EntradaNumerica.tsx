import styles from "../styles/entrada.module.css"

interface EntradaNumericaProps{
    text : string
    value : number
    onChange : (newValue : number) => void
}


function EntradaNumerica(props) {

    const dec = () =>{
       return props.onChange(props.value-1)
    }

    const inc = () =>{
       return props.onChange(props.value+1)
    }

    return (  
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <button className={styles.btn} onClick={dec}>-</button>
                <button className={styles.btn} onClick={inc}>+</button>
            </div>
        </div>
    );
}

export default EntradaNumerica;