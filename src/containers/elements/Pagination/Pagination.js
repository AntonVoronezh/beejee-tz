import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Pagination } from '../../../components/elements';
import { changeActivePagAC } from '../../../store/actions';

class PaginationContainer extends Component {
	render() {
		return <Pagination {...this.props} />;
	}
}

const mapStateToProps = ({ tasks }) => {
	return {
		...tasks,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeActivePage: page => dispatch(changeActivePagAC(page)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PaginationContainer);
