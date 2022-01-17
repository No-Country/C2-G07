import { getObrasArtes } from '../../redux/actions/index';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Cards } from '../../components/card/Card';
import styles from './Home.module.css';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import React from 'react';

export default function Home() {
	const obrasArtes = useSelector((state) => state.obraArtes);
	// console.log(obrasArtes.usuario_name)
	const [order, setOrder] = useState('asc');
	const distpatch = useDispatch();
	useEffect(() => {
		distpatch(getObrasArtes(order));
	}, [distpatch, order]);

	return (
		<div>
			<h1 className={styles.title}>GALERIA</h1>
			<SearchBar />
			<ul className={styles.gridObrasArte}>
				{obrasArtes.length > 0
					? obrasArtes.map((oa, index) => (
							<Cards
								key={index}
								id={oa.oa_id}
								name={oa.oa_name}
								resenia={oa.oa_resenia}
								likes={oa.oa_likes}
								imagen={oa.oa_imagen_obra}
								nameAutor={oa.usuario.usuario_name}
								idUsuario={oa.usuario.usuario_id}
							/>
					  ))
					: null}
			</ul>
		</div>
	);
}
