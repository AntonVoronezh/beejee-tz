import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './NewTask.css';

const NewTask = ({ createTask, addTask }) => {
	const [name, setName] = useState('');
	const [mail, setMail] = useState('');
	const [text, setText] = useState('');

	const newTaskSubmitHandler = e => {
		e.preventDefault();
		addTask({ name, mail, text });
		createTask();
	};

	return (
		<form onSubmit={newTaskSubmitHandler}>
			<fieldset className="uk-fieldset">
				<legend className="uk-legend">Создать новую задачу</legend>

				<div className="uk-margin">
					<input
						className="uk-input"
						type="text"
						placeholder="Имя пользователя"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>

				<div className="uk-margin">
					<input
						className="uk-input"
						type="text"
						placeholder="E-mail"
						value={mail}
						onChange={e => setMail(e.target.value)}
					/>
				</div>

				<div className="uk-margin">
					<textarea
						className="uk-textarea"
						rows="5"
						placeholder="Текст задачи"
						value={text}
						onChange={e => setText(e.target.value)}
					/>
				</div>
			</fieldset>
			<button className="uk-button uk-button-primary mr" type="submit">
				Добавить
			</button>
		</form>
	);
};

NewTask.propTypes = {
	createTask: PropTypes.func.isRequired,
	addTask: PropTypes.func.isRequired,
};

export default NewTask;
