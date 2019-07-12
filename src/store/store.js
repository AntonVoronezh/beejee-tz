import { createStore, applyMiddleware } from 'redux';

import rootReducer from './rootReducer';

const myLogger = ({ getState }) => dispatch => action => {
	console.log(action.type);
	console.log(getState());

	return dispatch(action);
};

function createThunkMiddleware(extraArgument) {
	return ({ dispatch, getState }) => next => action => {
		if (typeof action === 'function') {
			return action(dispatch, getState, extraArgument);
		}
		return next(action);
	};
}

const myThunk = createThunkMiddleware();
myThunk.withExtraArgument = createThunkMiddleware;

export default () => createStore(rootReducer, applyMiddleware(myThunk, myLogger));
