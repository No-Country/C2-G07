import { useAuth0 } from '@auth0/auth0-react';
import styles from './LoginLogout.module.css';
import React from 'react';


const LoginBtn = () => {
	const {loginWithRedirect} = useAuth0();
	
	const handleLogin = () =>loginWithRedirect();

	return (
		<button className={styles.loginBtn} onClick={handleLogin}>
			Login / Sign up
		</button>
	);
};

export { LoginBtn };
