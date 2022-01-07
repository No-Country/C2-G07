import './App.css';
import { Login } from './components/Login-Logout/Login';
import { Logout } from './components/Login-Logout/Logout';
import { Header } from './components/Header/Header';
import { CallToAction } from './components/CallToAction/CallToAction';
function App() {
	return (
		<div className='App'>
			<Header />
			<CallToAction />
			<Login /> <Logout />
		</div>
	);
}

export default App;
