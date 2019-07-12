import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Pagination } from '../../../components/elements';
import { changeActivePagePag } from '../../../store/actions';

class PaginationContainer extends Component {
	render() {
		return <Pagination {...this.props} />;
	}
}

const mapStateToProps = ({ tasks: { pagination } }) => {
	return {
		...pagination,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onChange: page => dispatch(changeActivePagePag(page)),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PaginationContainer);
