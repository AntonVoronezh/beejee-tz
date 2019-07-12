import { combineReducers } from 'redux';

import { menuRreducer, loginRreducer, tasksRreducer } from './reducers';

const rootReducer = combineReducers({
	menu: menuRreducer,
	login: loginRreducer,
	tasks: tasksRreducer,
});

export default rootReducer;
