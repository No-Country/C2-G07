import './App.css';
import { Login } from './components/Login-Logout/Login';
import { Logout } from './components/Login-Logout/Logout';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { InfoSlider } from './components/InfoSlider/InfoSlider'
function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<InfoSlider />
			<Login /> <Logout />
		</div>
	);
}

export default App;
