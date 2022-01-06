import './App.css';
import { Login } from './components/Login-Logout/Login';
import { Logout } from './components/Login-Logout/Logout';

function App() {
  let a = false
  return (
    <div className="App">
      <h1>Obras de Arte</h1>
     <Login/>  <Logout/>
     
     
    </div>
  );
}

export default App;
