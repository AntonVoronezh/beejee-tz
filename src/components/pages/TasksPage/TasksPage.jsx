import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './TasksPage.css';
import { Task } from '../../elements';
import { Pagination } from '../../../containers/elements';

// const FilterPage = ({ errorMsg, tasks: tasksArr = [], filterTasks, changeSelect }) => {
const FilterPage = ({ errorMsg, tasks: tasksArr = [], filterTasks, changeSelect }) => {
	// return <div>FilterPage</div>

	const error = errorMsg ? <div className="uk-text-danger">{errorMsg}</div> : null;
	const tasks = tasksArr.map((el, idx) => {
		return <Task key={idx} {...el} />;
	});

	// const allButtonHandler = () => {
	// 	filterTasks('All');
	// };

	// const activeButtonHandler = () => {
	// 	filterTasks('Active');
	// };

	// const inactiveButtonHandler = () => {
	// 	filterTasks('NonActive');
	// };

	// const selectHandler = event => {
	// 	changeSelect(Number(event.target.value));
	// };

	const nameSortButtonHandler = () => {};
	const emailSortButtonHandler = () => {};
	const statusSortButtonHandler = () => {};

	return (
		<Fragment>
			<h1 className="uk-heading-divider">Страница Задач</h1>
			<button className="uk-button uk-button-default mr" onClick={nameSortButtonHandler}>
				Сортировать по имени
			</button>
			<button className="uk-button uk-button-default mr" onClick={emailSortButtonHandler}>
				Сортировать по email
			</button>
			<button className="uk-button uk-button-default mr" onClick={statusSortButtonHandler}>
				Сортировать по статусу
			</button>

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
				<button className="uk-button uk-button-primary mr" onClick={statusSortButtonHandler} type="submit">
					Добавить
				</button>
			</form>
			{error}
			{tasks}
			<Pagination />
		</Fragment>
	);
};

export default FilterPage;

FilterPage.propTypes = {
	errorMsg: PropTypes.string,
	tasks: PropTypes.array,
};
