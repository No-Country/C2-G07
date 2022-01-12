import { Hero } from '../../components/Hero/Hero';
import { InfoSlider } from '../../components/InfoSlider/InfoSlider';
import { Footer } from '../../components/Footer/Footer';
import React from 'react';
import ReactDOM from 'react-dom';
const Landing = () => {
	return (
		<>
			<Hero />
			<InfoSlider />
		</>
	);
};

export { Landing };
