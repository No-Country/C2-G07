import { BiUpArrow } from 'react-icons/bi';
import styles from './MenuMobile.module.css';
import React from 'react';

const MenuMobile = ({ toggleMenu }) => {
	return (
		<div className={styles.menuMobile}>
			<div className={styles.closeIcon} onClick={toggleMenu}>
				<BiUpArrow />
			</div>
			<ul>
				<li>Galería</li>
				<li>Artistas</li>
				<li>Eventos</li>
			</ul>
		</div>
	);
};

export { MenuMobile };
