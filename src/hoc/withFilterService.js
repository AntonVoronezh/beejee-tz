import React from 'react';

import { FilterServiceConsumer } from '../helpers';

const withFilterService = () => Wrapped => {
	return props => {
		return (
			<FilterServiceConsumer>
				{FilterService => {
					return <Wrapped {...props} filterService={FilterService} />;
				}}
			</FilterServiceConsumer>
		);
	};
};

export default withFilterService;
