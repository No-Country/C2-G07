import './App.css';
import { Login } from './components/Login-Logout/Login';
import { Logout } from './components/Login-Logout/Logout';
import { Header } from './components/Header/Header';

function App() {
	return (
		<div className='App'>
			<Header />
			<Login /> <Logout />
		</div>
	);
}

export default App;
