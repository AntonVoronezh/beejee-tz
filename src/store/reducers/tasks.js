import {
	FETCH_FILTER_REQUEST,
	FETCH_FILTER_SUCCESS,
	FETCH_FILTER_FAILURE,
	FILTERED_ARR,
	CHANGE_SELECT_COUNT,
	CHANGE_COUNTED,
	CHANGE_PAGINATION_COUNT,
	CHANGE_ACTIVE_PAGE_PAG,
} from '../actions';

import { statuses } from '../../helpers';

const initialState = {
	tasks: [],
	filtered: [],
	counted: [],
	status: statuses.INIT,
	errorMsg: null,
	pagination: {
		count: 5,
		activePage: 1,
		pagesTotal: null,
		// arrLength: null
	},
};

const chunk = (coll, size) => {
	const iter = (iterColl, acc = []) => {
		if (iterColl.length === 0) {
			return acc;
		}
		return iter(iterColl.slice(size), [...acc, iterColl.slice(0, size)]);
	};

	return iter(coll);
};

const getPaginationCount = (length, count) => {
	if (length < count) {
		return 1;
	}

	return Math.ceil(length / count);
};

const filterRreducer = (state = initialState, action) => {
	const { type, tasks, errorMsg, count, page } = action;
	const {
		pagination: { activePage, count: total },
	} = state;

	switch (type) {
		case FETCH_FILTER_REQUEST: {
			return {
				...state,
				status: statuses.REQUEST,
				errorMsg: null,
			};
		}
		case FETCH_FILTER_SUCCESS: {
			return {
				...state,
				status: statuses.SUCCESS,
				tasks,
				filtered: tasks,
				counted: chunk(tasks, total)[activePage - 1],
				errorMsg: null,
			};
		}
		case FETCH_FILTER_FAILURE: {
			return {
				...state,
				status: statuses.FAILURE,
				errorMsg,
			};
		}
		case FILTERED_ARR: {
			return {
				...state,
				filtered: tasks,
				counted: chunk(tasks, total)[activePage - 1],
				pagination: {
					...state.pagination,
					activePage: 1,
					// pagesTotal: getPaginationCount(state.filtered.length, total),
				},
			};
		}
		case CHANGE_SELECT_COUNT: {
			return {
				...state,
				pagination: {
					...state.pagination,
					count,
				},
			};
		}
		case CHANGE_PAGINATION_COUNT: {
			return {
				...state,
				pagination: {
					...state.pagination,
					pagesTotal: getPaginationCount(state.filtered.length, total),
					activePage: 1,
				},
			};
		}
		case CHANGE_COUNTED: {
			return {
				...state,
				counted: chunk(state.filtered, total)[activePage - 1],
			};
		}
		case CHANGE_ACTIVE_PAGE_PAG: {
			return {
				...state,
				pagination: {
					...state.pagination,
					activePage: page,
				},
			};
		}
		default:
			return state;
	}
};

export default filterRreducer;
