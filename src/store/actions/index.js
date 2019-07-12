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
	FETCH_FILTER_REQUEST,
	FETCH_FILTER_SUCCESS,
	FETCH_FILTER_FAILURE,
	fetchTasks,
	filterTasks,
	FILTERED_ARR,
	changeSelectCountAC,
	CHANGE_SELECT_COUNT,
	CHANGE_COUNTED,
	changeCount,
	CHANGE_PAGINATION_COUNT,
	CHANGE_ACTIVE_PAGE_PAG,
	changeActivePagePag,
} from './filter';

export {
	changeActivePageAC,
	CHANGE_ACTIVE_PAGE,
	changeUsernameTextAC,
	CHANGE_USERNAME_TEXT,
	changePasswordTextAC,
	CHANGE_PASSWORD_TEXT,
	fetchLogin,
	FETCH_LOGIN_REQUEST,
	FETCH_LOGIN_SUCCESS,
	FETCH_LOGIN_FAILURE,
	autoLogin,
	logout,
	LOGOUT,
	ADD_NAME,
	changeSelectCountAC,
	CHANGE_SELECT_COUNT,
	CHANGE_PAGINATION_COUNT,
	CHANGE_ACTIVE_PAGE_PAG,
	changeActivePagePag,
};

export {
	FETCH_FILTER_REQUEST,
	FETCH_FILTER_SUCCESS,
	FETCH_FILTER_FAILURE,
	fetchTasks,
	filterTasks,
	FILTERED_ARR,
	CHANGE_COUNTED,
	changeCount,
};
