import styles from './ButtonPrimaryLink.module.css';

const ButtonPrimaryLink = ({name}) => {
    return(
        <div className={styles.btnLink}>
            <p >{name}</p>
        </div>
    )
}

export { ButtonPrimaryLink };