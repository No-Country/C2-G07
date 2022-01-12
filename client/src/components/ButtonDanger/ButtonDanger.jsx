import styles from './ButtonDanger.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
const ButtonDanger = ({name}) =>{
    
    return (
        <div >
            <button className={styles.btnDanger} type="submit">{name}</button>
        </div>
    )
}

export { ButtonDanger };