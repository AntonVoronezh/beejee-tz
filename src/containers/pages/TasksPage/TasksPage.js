import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TasksPage } from '../../../components/pages';
import { fetchTasks, changeFilterAC, createTask, addTaskAC, editTaskAC, editTask } from '../../../store/actions';
import { withTasksService } from '../../../hoc';
import { statuses } from '../../../helpers';
import { Spinner } from '../../../components/elements';

class TasksPageContainer extends Component {
	componentDidMount() {
		const {
			tasks: { tasks },
			getTasks,
		} = this.props;

		if (tasks.length === 0) {
			getTasks();
		}
	}

	componentDidUpdate(prevProps) {
		const {
			tasks: {
				filter,
				pageNum,
				newTask: { username },
			},
		} = this.props;
		if (
			filter !== prevProps.tasks.filter ||
			pageNum !== prevProps.tasks.pageNum ||
			username !== prevProps.tasks.newTask.username
		) {
			this.props.getTasks();
		}
	}

	render() {
		const {
			tasks: { status, ...rest },
			isLoggedIn,
			changeFilter,
			createTask,
			addTask,
			editTask,
			onEditTask
		} = this.props;

		if (status === statuses.REQUEST) {
			return <Spinner />;
		}

		return (
			<TasksPage
				{...rest}
				isLoggedIn={isLoggedIn}
				changeFilter={changeFilter}
				createTask={createTask}
				addTask={addTask}
				editTask={editTask}
				onEditTask={onEditTask}
			/>
		);
	}
}

const mapStateToProps = ({ login: { isLoggedIn }, tasks }) => {
	return {
		isLoggedIn,
		tasks,
	};
};

const mapDispatchToProps = (dispatch, { tasksService }) => {
	return bindActionCreators(
		{
			getTasks: fetchTasks(tasksService),
			changeFilter: changeFilterAC,
			createTask: createTask(tasksService),
			addTask: addTaskAC,
			editTask: editTaskAC,
			onEditTask: editTask(tasksService),
		},
		dispatch
	);
};

export default withTasksService()(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(TasksPageContainer)
);
