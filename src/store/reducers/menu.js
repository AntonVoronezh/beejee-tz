import { CHANGE_ACTIVE_PAGE } from '../actions';

const initialState = {
	activePage: '/',
};

const menuRreducer = (state = initialState, action) => {
	const { type, page } = action;
	switch (type) {
		case CHANGE_ACTIVE_PAGE: {
			return {
				...state,
				activePage: page,
			};
		}
		default:
			return state;
	}
};

export default menuRreducer;
