import { getObrasArtes } from '../../redux/actions/index';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Cards } from '../../components/card/Card';
import styles from './Home.module.css';

export default function Home() {
	const obrasArtes = useSelector((state) => state.obraArtes);
	const [order, setOrder] = useState('asc');
	const distpatch = useDispatch();
	useEffect(() => {
		distpatch(getObrasArtes(order));
	}, [distpatch, order]);

	console.log(obrasArtes);

	return (
		<div>
			<ul className={styles.gridObrasArte}>
				{obrasArtes.length > 0
					? obrasArtes.map((oa, index) => (
							<Cards
								key={index}
								name={oa.oa_name}
								descripcion={oa.oa_descripcion}
								fecha={oa.oa_fechaCreacion}
								likes={oa.oa_likes}
								imagen={oa.oa_imagen_obra}
								imagenUsuario={oa.usuario.usuario_imagen}
								nameAutor={oa.usuario.usuario_name}
								idUsuario={oa.usuario.usuario_id}
							/>
					  ))
					: null}
			</ul>
		</div>
	);
}
