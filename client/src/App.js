import './App.css';
import { Header } from './components/Header/Header';
import Home from './views/Home/Home';
import { Landing } from './views/Landing/Landing';

function App() {
	return (
		<div className='App'>
			<Header />
			<Landing />
			<Home/>
			
		</div>
	);
}

export default App;
