import styles from './ButtonDanger.module.css';

const ButtonDanger = ({name}) =>{
    
    return (
        <div >
            <button className={styles.btnDanger} type="submit">{name}</button>
        </div>
    )
}

export { ButtonDanger };