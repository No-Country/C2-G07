import { BrowserRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import store from "./redux/store/index"
import {Provider} from "react-redux"
const { REACT_APP_AUTH0_CLIENT_ID, REACT_APP_AUTH0_DOMAIN } = process.env;

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
		<Auth0Provider
			domain={REACT_APP_AUTH0_DOMAIN}
			clientId={REACT_APP_AUTH0_CLIENT_ID}
			redirectUri={window.location.origin}
		>
			<BrowserRouter>
				
				<App />
			</BrowserRouter>
		</Auth0Provider>
	</React.StrictMode>
	</Provider>,document.getElementById('root')

);
