import { RiVipDiamondFill } from 'react-icons/ri';
import { FaHamburger } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { MenuMobile } from '../MenuMobile/MenuMobile';
import { LoginBtn } from '../Login-Logout/LoginBtn';
import { useState } from 'react';

import { Loader } from '../Loader/Loader';
import { ProfilePicture } from '../ProfilePicture/ProfilePicture';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './Header.module.css';


const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { isLoading, isAuthenticated } = useAuth0();

	const toggleMenu = () => setMenuOpen(!menuOpen);

	if (isLoading) return <Loader />;

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
				{isAuthenticated ? <ProfilePicture /> : <LoginBtn />}
			</nav>
			{menuOpen && <MenuMobile toggleMenu={toggleMenu} />}
		</header>
	);
};

export { Header };
