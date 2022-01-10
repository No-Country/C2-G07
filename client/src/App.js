import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { InfoSlider } from './components/InfoSlider/InfoSlider'
function App() {
	return (
		<div className='App'>
			<Header />
			<Hero />
			<InfoSlider />	
		</div>
	);
}

export default App;
