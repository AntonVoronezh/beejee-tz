import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { autoLogin } from '../../store/actions';
import { LoginPage, MainPage, FilterPage, LogoutPage } from '../../containers/pages';
import { TopMenu } from '../../containers/elements';

class App extends Component {
	componentDidMount() {
		this.props.autoLogin();
	}

	render() {
		return (
			<Fragment>
				<div className="uk-container uk-container-small">
					<header>
						<TopMenu />
					</header>
					<main>
						<Switch>
							<Route path="/" exact render={() => <MainPage />} />
							<Route path="/filter" exact render={() => <FilterPage />} />
							<Route path="/login" exact render={() => <LoginPage />} />
							<Route path="/logout" exact render={() => <LogoutPage />} />
							<Route render={() => <h2>Page not found</h2>} />
						</Switch>
					</main>
				</div>
			</Fragment>
		);
	}
}

const mapDispatchToProps = {
	autoLogin,
};

export default connect(
	null,
	mapDispatchToProps
)(App);

