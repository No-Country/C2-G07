import './App.css';
import { Login } from './components/Login-Logout/Login';
import { Logout } from './components/Login-Logout/Logout';
import { Header } from './components/Header/Header';
import { Heading } from './components/Heading/Heading';
import { HeadingInfo } from './components/HeadingInfo/HeadingInfo'
function App() {
	return (
		<div className='App'>
			<Header />
			<Heading />
			<HeadingInfo />
			<Login /> <Logout />
		</div>
	);
}

export default App;
