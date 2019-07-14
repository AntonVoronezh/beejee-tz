import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, username, email, text, status, isLoggedIn, editTask, onEditTask }) => {
	const [newText, setNewText] = useState(text);
	const [newStatus, setnewStatus] = useState(status);

	const changeClickHandle = () => {
		editTask({ id, status: newStatus, text: newText });
		onEditTask();
	};

	const statusRes = isLoggedIn ? (
		<input
			type="checkbox"
			className="uk-checkbox"
			checked={newStatus === 10}
			onChange={() => setnewStatus(newStatus === 10 ? 0 : 10)}
		/>
	) : status === 0 ? (
		'выполнено'
	) : (
		'не выполнено'
	);

	const textRes = isLoggedIn ? (
		<input type="text" className="uk-input" value={newText} onChange={e => setNewText(e.target.value)} />
	) : (
		text
	);

	const btn = isLoggedIn ? (
		<button className="uk-button uk-button-primary mr" type="submit" onClick={changeClickHandle}>
			Изменить
		</button>
	) : null;

	return (
		<tr>
			<td>{username}</td>
			<td>{email}</td>
			<td>{textRes}</td>
			<td>{statusRes}</td>
			<td>{btn}</td>
		</tr>
	);
};

export default Task;

Task.propTypes = {
	id: PropTypes.number.isRequired,
	username: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	status: PropTypes.number.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
	editTask: PropTypes.func.isRequired,
	onEditTask: PropTypes.func.isRequired,
};
