import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { FilterPage } from '../../../components/pages';
import { fetchTasks, filterTasks, changeCount } from '../../../store/actions';
import { withFilterService } from '../../../hoc';
import { statuses } from '../../../helpers';
import { Spinner } from '../../../components/elements';

class FilterPageContainer extends Component {
	componentDidMount() {
		const {
			tasks: { tasks },
			getTasks,
		} = this.props;

		if (tasks.length === 0) {
			getTasks();
		}
	}

	render() {
		const {
			tasks: { status, counted, errorMsg },
			filterTasks,
			changeCount,
			isLoggedIn,
		} = this.props;

		if (status === statuses.REQUEST) {
			return <Spinner />;
		}

		if (isLoggedIn) {
			return (
				<FilterPage tasks={counted} errorMsg={errorMsg} filterTasks={filterTasks} changeSelect={changeCount} />
			);
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

const mapDispatchToProps = (dispatch, { filterService }) => {
	return bindActionCreators(
		{
			getTasks: fetchTasks(filterService),
			filterTasks,
			changeCount,
		},
		dispatch
	);
};

export default withFilterService()(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(FilterPageContainer)
);
