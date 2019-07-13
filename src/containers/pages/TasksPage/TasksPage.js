import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { TasksPage } from '../../../components/pages';
import { fetchTasks, changeFilterAC, changeActivePagAC } from '../../../store/actions';
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
			tasks: { filter, pageNum },
		} = this.props;
		if (filter !== prevProps.tasks.filter || pageNum !== prevProps.tasks.pageNum) {
			this.props.getTasks();
		}
	}

	render() {
		const {
			tasks: { status, ...rest },
			isLoggedIn,
			changeFilter,
		} = this.props;

		if (status === statuses.REQUEST) {
			return <Spinner />;
		}

		if (isLoggedIn) {
			return <TasksPage {...rest} changeFilter={changeFilter} />;
		}

		return <Redirect to="/login" />;
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
