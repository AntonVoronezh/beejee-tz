import {
	FETCH_TASKS_REQUEST,
	FETCH_TASKS_SUCCESS,
	FETCH_TASKS_FAILURE,
	CHANGE_FILTER,
	CHANGE_PAGES_COUNT,
	CHANGE_ACTIVE_PAG,
	ADD_TASK,
	EDIT_TASK,
	CHANGE_STATUS,
} from '../actions';

import { statuses } from '../../helpers';

const initialState = {
	tasks: [],
	pageNum: 1,
	tasksCount: 0,
	filter: 'id',
	status: statuses.INIT,
	errorMsg: null,
	newTask: {
		username: null,
		email: null,
		text: null,
	},
	editTask: {
		id: null,
		text: null,
		status: null,
	},
};

const filterRreducer = (state = initialState, action) => {
	const { type, tasks, errorMsg, filter, tasksCount, pageNum, newTask, editTask } = action;

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
				pageNum: 1,
				tasksCount: 0,
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
		case ADD_TASK: {
			const { name: username, mail: email, text } = newTask;
			return {
				...state,
				newTask: {
					username,
					email,
					text,
				},
			};
		}
		case EDIT_TASK: {
			const { id, status } = editTask;
			return {
				...state,
				editTask: {
					id,
					status,
					text: editTask.text,
				},
			};
		}
		case CHANGE_STATUS: {
			debugger
			return {
				...state,
				status: statuses.SUCCESS,
				errorMsg: null,
			};
		}

		default:
			return state;
	}
};

export default filterRreducer;
