import styles from '../styles/porta.module.css';

function Porta() {
    return (
        <div className={styles.area}>
            <div className={styles.estrutura}>
                <div className={styles.porta}>
                    <div className={styles.numero}>3</div>
                </div>
            </div>
            <div className={styles.floor}></div>
        </div>
    );
}

export default Porta;