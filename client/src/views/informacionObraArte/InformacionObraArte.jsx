import { useParams } from 'react-router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getPerfilUsuario, getInformacionObraArte } from '../../redux/actions';
import styles from './InformacionObraArte.module.css';
import { Avatar } from '@mui/material';

export const InformacionObraArte = () => {
	const obra = useSelector((state) => state.obraArte);
	const usuario = useSelector((state) => state.usuario);
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		dispatch(getInformacionObraArte(id));
		dispatch(getPerfilUsuario(usuario.usuario_id));
	}, [dispatch, id, usuario]);

	console.log(usuario);
	console.log(obra);

	var date = new Date(obra.oa_fechaCreacion);
	const formatDate = (date) => {
		let formatted_date =
			date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
		return formatted_date;
	};
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.containerImagen}>
					<img src={obra.oa_imagen_obra} alt='obra' className={styles.imagen} />
				</div>
				<div className={styles.container}>
					<div className={styles.containerHeader}>
						<Link to={`/usuario/${obra.usuario_id}`} className={styles.link}>
							<Avatar 
							alt={'Foto de perfil de '+ usuario.usuario_name}
							src={usuario.usuario_imagen}
							sx={{ width: 50, height: 50 }}></Avatar>
						</Link>
						<h2>{obra.oa_name}</h2>
						<h4>{formatDate(date)}</h4>
					</div>
				</div>
				<div className={styles.containerInfo}>
					<p className={styles.titles}>Descripción:</p>
					<p className={styles.description}>{obra.oa_descripcion}</p>
					<p>Categoria: prueba </p>
				</div>
			</div>
		</div>
	);
};
