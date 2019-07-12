import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from './components/App';
import store from './store/store';
import { AuthServiceProvider, FilterServiceProvider } from './helpers';
import { AuthService, FilterService } from './services';

const storeService = store();
const authService = new AuthService();
const tasksService = new FilterService();

ReactDOM.render(
	<Provider store={storeService}>
		<BrowserRouter>
			<AuthServiceProvider value={authService}>
				<FilterServiceProvider value={tasksService}>
					<App />
				</FilterServiceProvider>
			</AuthServiceProvider>
		</BrowserRouter>
	</Provider>,

	document.getElementById('root')
);
serviceWorker.unregister();
