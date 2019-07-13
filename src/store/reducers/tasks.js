import { FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, CHANGE_FILTER } from '../actions';

import { statuses } from '../../helpers';

const initialState = {
	tasks: [],
	pageNum: 1,
	filter: 'id',
	status: statuses.INIT,
	errorMsg: null,
};

const filterRreducer = (state = initialState, action) => {
	const { type, tasks, errorMsg, filter } = action;

	switch (type) {
		case FETCH_TASKS_REQUEST: {
			return {
				...state,
				status: statuses.REQUEST,
				errorMsg: null,
			};
		}
		case FETCH_TASKS_SUCCESS: {
			return {
				...state,
				status: statuses.SUCCESS,
				tasks,
				errorMsg: null,
			};
		}
		case FETCH_TASKS_FAILURE: {
			return {
				...state,
				status: statuses.FAILURE,
				errorMsg,
			};
		}
		case CHANGE_FILTER: {
			return {
				...state,
				filter,
			};
		}

		default:
			return state;
	}
};

export default filterRreducer;
