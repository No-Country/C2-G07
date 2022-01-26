import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './views/Home/Home';
import Usuarios from './views/Usuarios/Usuarios';
import { Header } from './components/Header/Header';
import { AboutUs } from './views/AboutUs/AboutUs';
import { Landing } from './views/Landing/Landing';
import { Footer } from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { PerfilUsuario } from './views/PerfilUsuario/PerfilUsuario';
import { InformacionObraArte } from './views/informacionObraArte/InformacionObraArte';
import { AgregarObraArte } from './views/AgregarObraArte/AgregarObraArte';
import { EditarPerfil } from './views/EditarPerfil/EditarPerfil';
import { Loader } from './components/Loader/Loader';


function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3500);
	});

	if (loading) return <Loader />;

	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Landing />} />
				<Route path='/galeria' element={<Home />} />
				<Route path='usuarios' element={<Usuarios />} />
				<Route path='/usuario/:id' element={<PerfilUsuario />} />
				<Route path='/obraArte/:id' element={<InformacionObraArte />} />
				<Route path='/aboutUs' element={<AboutUs />} />
				<Route path='/nuevaObraArte' element={<AgregarObraArte />} />
				<Route path='/editarPerfil/:id' element={<EditarPerfil />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
