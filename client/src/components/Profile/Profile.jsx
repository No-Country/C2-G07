import { useAuth0 } from '@auth0/auth0-react';
import { LogoutBtn } from '../Login-Logout/LogoutBtn';
import styles from './Profile.module.css';
import React from 'react';

const Profile = () => {
	const { user } = useAuth0();
	const {
		picture,
		email,
		name,
		nickname,
		given_name,
		family_name,
		middle_name,
	} = user;
	console.log(name, nickname, given_name, family_name, middle_name);

	return (
		<div className={styles.container}>
			<div className={styles.profileInfo}>
				<div className={styles.profileContainer}>
					<img src={picture} alt={name} />
				</div>
				<div className={styles.userInfo}>
					<h3>{name}</h3>
					<p>{email}</p>
				</div>
			</div>
			<hr className={styles.divider} />
			<button>Tu perfil</button>
			<hr />
			<LogoutBtn />
		</div>
	);
};

export { Profile };
