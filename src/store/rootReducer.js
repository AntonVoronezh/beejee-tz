import { combineReducers } from 'redux';

import { menuRreducer, loginRreducer, filterRreducer } from './reducers';

const rootReducer = combineReducers({
	menu: menuRreducer,
	login: loginRreducer,
	tasks: filterRreducer,
});

export default rootReducer;
