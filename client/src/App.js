import './App.css';
import { Header } from './components/Header/Header';
import { AboutUs } from './views/AboutUs/AboutUs';
import Home from './views/Home/Home';
import { Landing } from './views/Landing/Landing';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Footer } from './components/Footer/Footer';
import { PerfilUsuario } from './views/PerfilUsuario/PerfilUsuario';
<<<<<<< HEAD
import Usuarios from './views/Usuarios/Usuarios';
=======
import { InformacionObraArte } from './views/informacionObraArte/InformacionObraArte';
>>>>>>> 34a169a657fdb2ea2f1636ff233e2ac81b3c8057

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route exact path='/' element={<Landing />} />
				<Route path='/galeria' element={<Home />} />
<<<<<<< HEAD
				<Route path='/usuarios' element={<Usuarios/>}/>
				<Route path='/usuario/:id' element={<PerfilUsuario />} />
=======

				<Route path='/usuario/:id' element={<PerfilUsuario/>}/>
				<Route path='/obraArte/:id' element={<InformacionObraArte/>}/>
>>>>>>> 34a169a657fdb2ea2f1636ff233e2ac81b3c8057
				<Route path='/aboutUs' element={<AboutUs />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
