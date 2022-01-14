import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";
import styles from './BoxUsuario.module.css';

export const BoxUsuario = ({
    name,
    usuarioImagen,
    id
  }) => {
  
    return (
      <div className={styles.container}>
          <Link to={`/usuarios/${id}`} className={styles.link}>
            <div className={styles.imagen}>
                <Avatar 
                    alt={"Foto de perfil de "+name}
                    src={usuarioImagen}
                    sx={{ width: 90, height: 90 }} />
                <h3>{name}</h3>
            </div>
          </Link>
      </div>
    );
  };