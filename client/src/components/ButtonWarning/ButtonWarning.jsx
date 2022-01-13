import styles from './ButtonWarning.module.css';
import React from 'react';

const ButtonWarning = ({ name }) => {
	return (
		<div>
			<button className={styles.btnWarning} type='submit'>
				{name}
			</button>
		</div>
	);
};

export { ButtonWarning };
