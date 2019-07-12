import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from './components/App';
import store from './store/store';
import { AuthServiceProvider, TasksServiceProvider } from './helpers';
import { AuthService, BeeJeeService } from './services';

const storeService = store();
const authService = new AuthService();
const tasksService = new BeeJeeService();

ReactDOM.render(
	<Provider store={storeService}>
		<BrowserRouter>
			<AuthServiceProvider value={authService}>
				<TasksServiceProvider value={tasksService}>
					<App />
				</TasksServiceProvider>
			</AuthServiceProvider>
		</BrowserRouter>
	</Provider>,

	document.getElementById('root')
);
serviceWorker.unregister();
