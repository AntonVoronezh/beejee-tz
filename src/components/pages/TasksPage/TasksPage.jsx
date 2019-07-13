import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './TasksPage.css';
import { Task } from '../../elements';
import { Pagination } from '../../../containers/elements';
import { NewTask } from '../../elements/';

// const FilterPage = ({ errorMsg, tasks: tasksArr = [], filterTasks, changeSelect }) => {
const FilterPage = ({ errorMsg, tasks: tasksArr = [] }) => {
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
			{error}
			<table className="uk-table">
				<caption>Список задач</caption>
				<thead>
					<tr>
						<th>Имя</th>
						<th>Почта</th>
						<th>Задача</th>
						<th>Выполнено</th>
					</tr>
				</thead>
				<tbody>{tasks}</tbody>
			</table>

			{/* <NewTask /> */}
			{/* <Pagination /> */}
		</Fragment>
	);
};

export default FilterPage;

FilterPage.propTypes = {
	errorMsg: PropTypes.string,
	tasks: PropTypes.array,
};
