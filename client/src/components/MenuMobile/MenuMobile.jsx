import { MdOutlineCloseFullscreen } from 'react-icons/md';
import styles from './MenuMobile.module.css';

const MenuMobile = ({ toggleMenu }) => {
	return (
		<div className={styles.menuMobile}>
			<div className={styles.closeIcon} onClick={toggleMenu}>
				<MdOutlineCloseFullscreen />
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
