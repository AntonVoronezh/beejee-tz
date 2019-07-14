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
const changePagesCountAC = tasksCount => ({
	type: CHANGE_PAGES_COUNT,
	tasksCount,
});

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
				dispatch(changePagesCountAC(Number(total_task_count)));
			} else if (status === 'error') {
				const { message } = data;
				dispatch(fetchTasksFailureAC(message));
			}
		})

		.catch(err => dispatch(fetchTasksFailureAC(err.message)));
};

const ADD_TASK = 'ADD_TASK';
const addTaskAC = newTask => ({
	type: ADD_TASK,
	newTask,
});

const createTask = service => () => (dispatch, getState) => {
	dispatch(fetchTasksRequestAC());

	const {
		tasks: {
			newTask: { username, email, text },
		},
	} = getState();

	service
		.createTask(username, email, text)
		.then(data => {
			const { status } = data;
			if (status === 'ok') {
				const {
					message: { tasks, total_task_count },
				} = data;
				dispatch(fetchTasksSuccessAC(tasks));
				dispatch(changePagesCountAC(Number(total_task_count)));
			} else if (status === 'error') {
				const { message } = data;
				dispatch(fetchTasksFailureAC(message[0]));
			}
		})

		.catch(err => dispatch(fetchTasksFailureAC(err.message[0])));
};

const CHANGE_ACTIVE_PAG = 'CHANGE_ACTIVE_PAG';
const changeActivePagAC = pageNum => ({
	type: CHANGE_ACTIVE_PAG,
	pageNum,
});

const EDIT_TASK = 'EDIT_TASK';
const editTaskAC = editTask => ({
	type: EDIT_TASK,
	editTask,
});

const editTask = service => () => (dispatch, getState) => {
	dispatch(fetchTasksRequestAC());

	const {
		tasks: {
			editTask: { id, status, text },
		},
	} = getState();

	service
		.editTask(id, status, text)
		.then(data => {
			const { status } = data;
			if (status === 'ok') {
				console.log('+');
			} else if (status === 'error') {
				console.log('-');
			}
		})

		.catch(err => dispatch(fetchTasksFailureAC(err.message[0])));
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
	addTaskAC,
	EDIT_TASK,
	editTaskAC,
	editTask
};
