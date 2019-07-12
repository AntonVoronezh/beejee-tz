import React from 'react';

import { AuthServiceConsumer } from '../helpers';

const withAuthService = () => Wrapped => {
	return props => {
		return (
			<AuthServiceConsumer>
				{AuthService => {
					return <Wrapped {...props} authService={AuthService} />;
				}}
			</AuthServiceConsumer>
		);
	};
};

export default withAuthService;
