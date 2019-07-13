import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, username, email, text, status }) => {
	return (
		<tr>
			<td>{username}</td>
			<td>{email}</td>
			<td>{text}</td>
			<td>{status === 0 ? 'выполнено' : 'не выполнено'}</td>
		</tr>
	);
};

export default Task;

Task.propTypes = {
	// name: PropTypes.string.isRequired,
};
