import { BiUpArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styles from './MenuMobile.module.css';
import React from 'react';

const MenuMobile = ({ toggleMenu }) => {
	return (
		<div className={styles.menuMobile}>
			<div className={styles.closeIcon} onClick={toggleMenu}>
				<BiUpArrow />
			</div>
			<ul>
				<li onClick={toggleMenu}>
					<Link to='/galeria' className={styles.link}>
						Galería
					</Link>
				</li>
				<li onClick={toggleMenu}>
					<Link to='/usuarios' className={styles.link}>
						Artistas
					</Link>
				</li>
				<li onClick={toggleMenu}>
					<Link to='/nuevaObraArte' className={styles.link}>
						Nueva Obra de Arte
					</Link>
				</li>
				<li onClick={toggleMenu}>
					<Link to='/aboutUs' className={styles.link}>
						Nosotros
					</Link>
				</li>
			</ul>
		</div>
	);
};

export { MenuMobile };
