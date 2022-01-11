import styles from './ButtonSuccess.module.css';

const ButtonSuccess = ({name}) =>{
    return (
        <div >
            <button className={styles.btnSuccess} type="submit">{name}</button>
        </div>
    )
}

export { ButtonSuccess };