import React from 'react';
import PropTypes from 'prop-types';

import './NewTask.css';

const NewTask = () => {
	const newTaskButtonHandler = () => {};
	
	return (
		<form>
			<fieldset className="uk-fieldset">
				<legend className="uk-legend">Создать новую задачу</legend>

				<div className="uk-margin">
					<input className="uk-input" type="text" placeholder="Имя пользователя" />
				</div>

				<div className="uk-margin">
					<input className="uk-input" type="text" placeholder="E-mail" />
				</div>

				<div className="uk-margin">
					<textarea className="uk-textarea" rows="5" placeholder="Текст задачи" />
				</div>
			</fieldset>
			<button className="uk-button uk-button-primary mr" onClick={newTaskButtonHandler} type="submit">
				Добавить
			</button>
		</form>
	);
};

export default NewTask;

NewTask.propTypes = {
	// activePage: PropTypes.number.isRequired,
	// onChange: PropTypes.func.isRequired,
};
