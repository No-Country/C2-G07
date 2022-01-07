import { RiVipDiamondFill } from 'react-icons/ri';
import { FaHamburger } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { MenuMobile } from '../MenuMobile/MenuMobile';
import styles from './Header.module.css';
import { useState } from 'react';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<header className={styles.header}>
			<IconContext.Provider value={{ color: 'orange' }}>
				<h2>
					conectARTE <RiVipDiamondFill />
				</h2>
			</IconContext.Provider>
			<div className={styles.burgerIcon} onClick={toggleMenu}>
				<FaHamburger />
			</div>
			<nav>
				<ul className={styles.menuDesktop}>
					<li>Galería</li>
					<li>Artistas</li>
					<li>Eventos</li>
				</ul>
				<a href='/' className={styles.loginBtn}>
					Login / Sign up
				</a>
			</nav>
			{menuOpen && <MenuMobile toggleMenu={toggleMenu} />}
		</header>
	);
};

export { Header };
