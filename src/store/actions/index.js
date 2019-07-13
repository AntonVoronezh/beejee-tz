import { changeActivePageAC, CHANGE_ACTIVE_PAGE } from './menu';

import {
	changeUsernameTextAC,
	CHANGE_USERNAME_TEXT,
	changePasswordTextAC,
	CHANGE_PASSWORD_TEXT,
	fetchLogin,
	autoLogin,
	logout,
	LOGOUT,
} from './login';

import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_FAILURE, ADD_NAME } from './login';

import {
	fetchTasks,
	FETCH_TASKS_REQUEST,
	FETCH_TASKS_SUCCESS,
	FETCH_TASKS_FAILURE,
	CHANGE_FILTER,
	changeFilterAC,
	CHANGE_PAGES_COUNT,
	CHANGE_ACTIVE_PAG,
	changeActivePagAC,
	createTask,
	ADD_TASK,
	addTaskAC
} from './tasks';

export { changeActivePageAC, CHANGE_ACTIVE_PAGE };

export {
	changeUsernameTextAC,
	CHANGE_USERNAME_TEXT,
	changePasswordTextAC,
	CHANGE_PASSWORD_TEXT,
	fetchLogin,
	autoLogin,
	logout,
	LOGOUT,
	FETCH_LOGIN_REQUEST,
	FETCH_LOGIN_SUCCESS,
	FETCH_LOGIN_FAILURE,
	ADD_NAME,
};

export {
	fetchTasks,
	FETCH_TASKS_REQUEST,
	FETCH_TASKS_SUCCESS,
	FETCH_TASKS_FAILURE,
	CHANGE_FILTER,
	changeFilterAC,
	CHANGE_PAGES_COUNT,
	CHANGE_ACTIVE_PAG,
	changeActivePagAC,
	createTask,
	ADD_TASK,
	addTaskAC
};
