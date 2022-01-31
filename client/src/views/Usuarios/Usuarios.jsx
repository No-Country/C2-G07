import React, { useEffect, useState } from 'react';
import { getUsuarios } from '../../redux/actions/index';
import { useSelector, useDispatch } from 'react-redux';
import { BoxUsuario } from '../../components/BoxUsuario/BoxUsuario';
import styles from './Usuarios.module.css';
// import { SearchBar } from '../../components/SearchBar/SearchBar';

export default function Usuarios() {
	const [order, setOrder] = useState('asc');
	const usuarios = useSelector((state) => state.usuarios);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsuarios(order));
	}, [dispatch, order]);

	return (
		<article className={styles.container}>
			{usuarios.length > 0
				? usuarios.map((user, index) => (
						<BoxUsuario
							key={index}
							id={user.usuario_id}
							name={user.usuario_name}
							usuarioImagen={user.usuario_imagen}
						/>
				  ))
				: null}
		</article>
	);
}
