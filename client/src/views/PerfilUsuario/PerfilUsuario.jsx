import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Cards } from '../../components/card/Card';
import { getPerfilUsuario, getObrasArtesUsuario } from '../../redux/actions';
import { ContactInfo } from '../../components/ContactInfo/ContactInfo';
import styles from './PerfilUsuario.module.css';
import { ButtonPrimaryLink } from '../../components/ButtonPrimaryLink/ButoonPrimaryLink';

export const PerfilUsuario = () => {
	const [openContact, setOpenContact] = useState(false);
	const usuario = useSelector((state) => state.usuario);
	const obrasArtes = useSelector((state) => state.obrasUsuario);
	const dispatch = useDispatch();
	const { id } = useParams();

	const handleContact = () => setOpenContact(!openContact);

	useEffect(() => {
		dispatch(getPerfilUsuario(id));
		dispatch(getObrasArtesUsuario(id));
	}, [dispatch, id]);

	return (
		<div className={styles.container}>
			<span className={styles.containerInfo}>
				<div className={styles.containerUsuario}>
					<img
						src={usuario.usuario_imagen}
						alt='usuario'
						className={styles.imagenPerfil}
					/>
				</div>
				<div className={styles.contacto}>
					<div className={styles.editPerfil}>
						<h1>{usuario.usuario_name}</h1>
						<Link to={'/editarPerfil/' + id} className={styles.button}>
							Editar Perfil
						</Link>
					</div>
					<h3>{obrasArtes.length} Publicaciones</h3>
					<div onClick={handleContact}>
						<ButtonPrimaryLink name='Contacto' />
					</div>
					{openContact && (
						<ContactInfo userInfo={usuario} handleContact={handleContact} />
					)}
				</div>
			</span>
			<span>
				<h2 className={styles.title}>OBRAS REALIZADAS</h2>
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
			</span>
		</div>
	);
};
