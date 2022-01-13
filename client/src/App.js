import './App.css';
import { Header } from './components/Header/Header';
import Home from './views/Home/Home';
import { Landing } from './views/Landing/Landing';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Footer } from './components/Footer/Footer';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route exact path='/' element={<Landing />} />
				<Route path='/galeria' element={<Home />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
