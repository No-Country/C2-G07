import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Profile } from '../Profile/Profile';
import styles from './ProfilePicture.module.css';

const ProfilePicture = () => {
	const [openProfile, setOpenProfile] = useState(false);

	const { user } = useAuth0();
	const { picture } = user;

	console.log(picture)

	const handleOpenProfile = () => setOpenProfile(!openProfile);

	return (
		<>
			<div className={styles.profileContainer} onClick={handleOpenProfile}>
				<img src={picture} alt='profile' />
			</div>
			{openProfile && <Profile />}
		</>
	);
};

export { ProfilePicture };
