const FETCH_FILTER_REQUEST = 'FETCH_FILTER_REQUEST';
const fetchFilterRequestAC = () => ({
	type: FETCH_FILTER_REQUEST,
});

const FETCH_FILTER_SUCCESS = 'FETCH_FILTER_SUCCESS';
const fetchFilterSuccessAC = tasks => ({
	type: FETCH_FILTER_SUCCESS,
	tasks,
});

const FETCH_FILTER_FAILURE = 'FETCH_FILTER_FAILURE';
const fetchFilterFailureAC = errorMsg => ({
	type: FETCH_FILTER_FAILURE,
	errorMsg,
});

const CHANGE_PAGINATION_COUNT = 'CHANGE_PAGINATION_COUNT';
const changePaginationCountAC = () => ({
	type: CHANGE_PAGINATION_COUNT,
});

const fetchTasks = service => () => dispatch => {
	dispatch(fetchFilterRequestAC());
	service
		.getFilterData()
		.then(data => {
			const { status, tasks, message } = data;

			if (status === 'ok') {
				dispatch(fetchFilterSuccessAC(tasks));
				dispatch(changePaginationCountAC());
			} else if (status === 'err') {
				dispatch(fetchFilterFailureAC(message));
			}
		})

		.catch(err => dispatch(fetchFilterFailureAC(err.message)));
};

const FILTERED_ARR = 'FILTERED_ARR';
const filteredArrAC = tasks => ({
	type: FILTERED_ARR,
	tasks,
});


const CHANGE_SELECT_COUNT = 'CHANGE_SELECT_COUNT';
const changeSelectCountAC = count => ({
	type: CHANGE_SELECT_COUNT,
	count,
});

const CHANGE_COUNTED = 'CHANGE_COUNTED';
const changeCountedAC = () => ({
	type: CHANGE_COUNTED,
});

const changeCount = count => (dispatch, getState) => {
	dispatch(changeSelectCountAC(count));
	dispatch(changePaginationCountAC());
	dispatch(changeCountedAC());
};

const CHANGE_ACTIVE_PAGE_PAG = 'CHANGE_ACTIVE_PAGE_PAG';
const changeActivePagePagAC = page => ({
	type: CHANGE_ACTIVE_PAGE_PAG,
	page,
});

const changeActivePagePag = page => (dispatch) => {
	dispatch(changeActivePagePagAC(page));
	dispatch(changeCountedAC());
};

const filterTasks = value => (dispatch, getState) => {
	const { tasks } = getState().tasks;

	let result;

	switch (value) {
		case 'All':
			result = tasks;
			break;
		case 'Active':
			result = tasks.filter(el => el.active);
			break;
		case 'NonActive':
			result = tasks.filter(el => !el.active);
			break;
		default:
			result = tasks;
	}

	dispatch(changePaginationCountAC())
	dispatch(filteredArrAC(result));
};

export {
	fetchTasks,
	FETCH_FILTER_REQUEST,
	FETCH_FILTER_SUCCESS,
	FETCH_FILTER_FAILURE,
	filterTasks,
	FILTERED_ARR,
	CHANGE_SELECT_COUNT,
	changeSelectCountAC,
	CHANGE_COUNTED,
	changeCount,
	CHANGE_PAGINATION_COUNT,
	CHANGE_ACTIVE_PAGE_PAG,
	changeActivePagePag,
};
