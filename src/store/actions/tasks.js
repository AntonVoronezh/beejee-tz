const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST';
const fetchTasksRequestAC = () => ({
	type: FETCH_TASKS_REQUEST,
});

const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
const fetchTasksSuccessAC = tasks => ({
	type: FETCH_TASKS_SUCCESS,
	tasks,
});

const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';
const fetchTasksFailureAC = errorMsg => ({
	type: FETCH_TASKS_FAILURE,
	errorMsg,
});

const CHANGE_FILTER = 'CHANGE_FILTER';
const changeFilterAC = filter => ({
	type: CHANGE_FILTER,
	filter,
});

const CHANGE_PAGES_COUNT = 'CHANGE_PAGES_COUNT';
const changePagesCountAC = pagesCount => ({
	type: CHANGE_PAGES_COUNT,
	pagesCount,
});

// const CHANGE_PAGINATION_COUNT = 'CHANGE_PAGINATION_COUNT';
// const changePaginationCountAC = () => ({
// 	type: CHANGE_PAGINATION_COUNT,
// });

const fetchTasks = service => () => (dispatch, getState) => {
	dispatch(fetchTasksRequestAC());

	const {
		tasks: { pageNum, filter },
	} = getState();

	service
		.getTasks(pageNum, filter)
		.then(data => {
			const { status } = data;
			if (status === 'ok') {
				const {
					message: { tasks, total_task_count },
				} = data;
				dispatch(fetchTasksSuccessAC(tasks));
				// dispatch(changePaginationCountAC());
			} else if (status === 'error') {
				const { message } = data;
				dispatch(fetchTasksFailureAC(message));
			}
		})

		.catch(err => dispatch(fetchTasksFailureAC(err.message)));
};

// const FILTERED_ARR = 'FILTERED_ARR';
// const filteredArrAC = tasks => ({
// 	type: FILTERED_ARR,
// 	tasks,
// });

// const CHANGE_SELECT_COUNT = 'CHANGE_SELECT_COUNT';
// const changeSelectCountAC = count => ({
// 	type: CHANGE_SELECT_COUNT,
// 	count,
// });

// const CHANGE_COUNTED = 'CHANGE_COUNTED';
// const changeCountedAC = () => ({
// 	type: CHANGE_COUNTED,
// });

// const changeCount = count => (dispatch, getState) => {
// 	dispatch(changeSelectCountAC(count));
// 	dispatch(changePaginationCountAC());
// 	dispatch(changeCountedAC());
// };

// const CHANGE_ACTIVE_PAGE_PAG = 'CHANGE_ACTIVE_PAGE_PAG';
// const changeActivePagePagAC = page => ({
// 	type: CHANGE_ACTIVE_PAGE_PAG,
// 	page,
// });

// const changeActivePagePag = page => dispatch => {
// 	dispatch(changeActivePagePagAC(page));
// 	dispatch(changeCountedAC());
// };

export { fetchTasks, FETCH_TASKS_REQUEST, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, CHANGE_FILTER, changeFilterAC };
