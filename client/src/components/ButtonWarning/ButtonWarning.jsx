import styles from './ButtonWarning.module.css';

const ButtonWarning = ({name}) =>{
    return (
        <div >
            <button className={styles.btnWarning} type="submit">{name}</button>
        </div>
    )
}

export { ButtonWarning };