import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { LoginPage } from '../../../components/pages';
import { changeUsernameTextAC, changePasswordTextAC, fetchLogin } from '../../../store/actions';
import { Spinner } from '../../../components/elements';
import { withAuthService } from '../../../hoc';
import { statuses } from '../../../helpers';

class LoginPageContainer extends Component {
	render() {
		const { status, isLoggedIn, ...rest } = this.props;

		if (status === statuses.REQUEST) {
			return <Spinner />;
		}
		if (isLoggedIn) {
			return <Redirect to="/filter" />;
		}

		return <LoginPage {...rest} />;
	}
}

const mapStateToProps = ({ login }) => {
	return {
		...login,
	};
};

	const mapDispatchToProps = (dispatch, { authService }) => {
	return bindActionCreators(
		{
			onUsernameChange: changeUsernameTextAC,
			onPasswordChange: changePasswordTextAC,
			onLogin: fetchLogin(authService),
		},
		dispatch
	);
};

export default withAuthService()(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(LoginPageContainer)
);

