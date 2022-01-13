import styles from './ButtonSuccess.module.css';
import React from 'react';

export const ButtonSuccess = ({ name }) => {
	return (
		<div>
			<button className={styles.btnSuccess} type='submit'>
				{name}
			</button>
		</div>
	);
};


