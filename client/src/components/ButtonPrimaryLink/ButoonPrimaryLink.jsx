import styles from './ButtonPrimaryLink.module.css';
import React from 'react';

const ButtonPrimaryLink = ({ name }) => {
	return (
		<div className={styles.btnLink}>
			<p>{name}</p>
		</div>
	);
};

export { ButtonPrimaryLink };
