import React from 'react';
import styles from './Contactinfo.module.css';
import { IoCloseOutline } from 'react-icons/io5'
import { Avatar } from '@mui/material'; 
const ContactInfo = ( { userInfo , handleContact} ) =>{

    const {usuario_name, usuario_email, usuario_imagen, redes_sociales, telefono } = userInfo; 
    // TODO poner en el medio de la pantalla con css
    return(
        <div className={styles.modal}>
            <div className={styles.container}>
                <button className={styles.btnClose} onClick={handleContact}><IoCloseOutline /></button>
                <Avatar 
                    alt={"Foto de perfil de "+ usuario_name}
                    src={usuario_imagen}
                    sx={{ width: 70, height: 70 }} />
                <h3>{usuario_name}</h3>
                <p className={styles.containerInfo}>Email: {usuario_email}</p>
                <p className={styles.containerInfo}>Redes Sociales: </p>
                <p className={styles.containerInfo}>Telefono: +5438889999999 </p>
            </div>
        </div>
    )
};

export { ContactInfo };