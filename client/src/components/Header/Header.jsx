import { RiVipDiamondFill } from 'react-icons/ri';
import { BiDownArrow } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import { MenuMobile } from '../MenuMobile/MenuMobile';
import { LoginBtn } from '../Login-Logout/LoginBtn';
import React, { useState } from 'react';

import { Loader } from '../Loader/Loader';
import { ProfilePicture } from '../ProfilePicture/ProfilePicture';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { isLoading, isAuthenticated } = useAuth0();

	const toggleMenu = () => setMenuOpen(!menuOpen);

	if (isLoading) return <Loader />;

	return (
		<header className={styles.header}>
			<IconContext.Provider value={{ color: 'orange' }}>
				<h2>
					<Link to='/' className={styles.link}>
						{' '}
						ConectARTE <RiVipDiamondFill />{' '}
					</Link>
				</h2>
			</IconContext.Provider>
			<div className={styles.burgerIcon} onClick={toggleMenu}>
				<BiDownArrow />
			</div>
			<nav>
				<ul className={styles.menuDesktop}>
					<li>
						<Link to='/galeria' className={styles.link}>
							Galería
						</Link>
					</li>
					<li>
						<Link to='/usuarios' className={styles.link}>
							Artistas
						</Link>
					</li>
					<li>
						<Link to='/nuevaObraArte' className={styles.link}>
							Nueva Obra de Arte
						</Link>
					</li>
					<li>Eventos</li>
				</ul>
				{isAuthenticated ? <ProfilePicture /> : <LoginBtn />}
			</nav>
			{menuOpen && <MenuMobile toggleMenu={toggleMenu} />}
		</header>
	);
};

export { Header };
