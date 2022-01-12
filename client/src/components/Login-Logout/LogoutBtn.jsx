import { useAuth0 } from '@auth0/auth0-react';
import styles from './LoginLogout.module.css';
import React from 'react';
import ReactDOM from 'react-dom';
const LogoutBtn = () => {
	const { logout } = useAuth0();

	const handleLogout = () => logout({ returnTo: window.location.origin });

	return (
		<button className={styles.logoutBtn} onClick={handleLogout}>
			Log out
		</button>
	);
};

export { LogoutBtn };
