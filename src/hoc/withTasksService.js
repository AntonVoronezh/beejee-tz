import React from 'react';

import { TasksServiceConsumer } from '../helpers';

const withTasksService = () => Wrapped => {
	return props => {
		return (
			<TasksServiceConsumer>
				{TasksService => {
					return <Wrapped {...props} tasksService={TasksService} />;
				}}
			</TasksServiceConsumer>
		);
	};
};

export default withTasksService;
