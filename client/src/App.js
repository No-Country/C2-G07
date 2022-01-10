import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { InfoSlider } from './components/InfoSlider/InfoSlider';
import { Footer } from './components/Footer/Footer';
function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<InfoSlider />
			<Footer />
		</div>
	);
}

export default App;
