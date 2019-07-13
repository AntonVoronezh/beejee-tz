import {
	FETCH_TASKS_REQUEST,
	FETCH_TASKS_SUCCESS,
	FETCH_TASKS_FAILURE,
	CHANGE_FILTER,
	CHANGE_PAGES_COUNT,
	CHANGE_ACTIVE_PAG
} from '../actions';

import { statuses } from '../../helpers';

const initialState = {
	tasks: [],
	pageNum: 1,
	tasksCount: 0,
	filter: 'id',
	status: statuses.INIT,
	errorMsg: null,
};

const filterRreducer = (state = initialState, action) => {
	const { type, tasks, errorMsg, filter, tasksCount, pageNum } = action;

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
		case CHANGE_PAGES_COUNT: {
			return {
				...state,
				tasksCount,
			};
		}
		case CHANGE_ACTIVE_PAG: {
			return {
				...state,
				pageNum,
			};
		}

		default:
			return state;
	}
};

export default filterRreducer;
