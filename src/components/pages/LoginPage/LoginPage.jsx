import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const LoginPage = ({ userNameText, passwordText, onUsernameChange, onPasswordChange, errorMsg, onLogin }) => {
	const submitFormHandler = () => {
		onLogin();
	};

	const usernameInputHandler = ({ nativeEvent: { data } }) => {
		onUsernameChange(data);
	};

	const passwordInputHandler = ({ nativeEvent: { data } }) => {
		onPasswordChange(data);
	};

	const isDisabled = !(!!userNameText && !!passwordText);

	const error = errorMsg ? <div>{errorMsg}</div> : null;

	return (
		<Fragment>
			<h1 className="uk-heading-divider">Логин</h1>
			<div className="uk-text-danger">{error}</div>
			<form onSubmit={submitFormHandler}>
				<div className="uk-margin">
					<input
						className="uk-input uk-form-width-medium"
						type="text"
						placeholder="Логин: admin"
						onChange={usernameInputHandler}
						value={userNameText}
					/>
				</div>
				<div className="uk-margin">
					<input
						className="uk-input uk-form-width-medium"
						type="text"
						placeholder="Пароль: 123"
						onChange={passwordInputHandler}
						value={passwordText}
					/>
				</div>

				<button className="uk-button uk-button-primary" type="submit" disabled={isDisabled}>
					Попробовать
				</button>
			</form>
		</Fragment>
	);
};

LoginPage.propTypes = {
	userNameText: PropTypes.string.isRequired,
	passwordText: PropTypes.string.isRequired,
	errorMsg: PropTypes.string,
	onUsernameChange: PropTypes.func.isRequired,
	onPasswordChange: PropTypes.func.isRequired,
	onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
