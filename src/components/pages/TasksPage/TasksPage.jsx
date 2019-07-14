import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './TasksPage.css';
import { Task } from '../../elements';
import { Pagination } from '../../../containers/elements';
import { NewTask } from '../../elements/';

const FilterPage = ({
	errorMsg,
	tasks: tasksArr = [],
	changeFilter,
	createTask,
	addTask,
	isLoggedIn,
	editTask,
	onEditTask,
}) => {
	const error = errorMsg ? <div className="uk-text-danger">{errorMsg}</div> : null;
	const tasks = tasksArr.map((el, idx) => {
		return <Task key={idx} {...el} isLoggedIn={isLoggedIn} editTask={editTask} onEditTask={onEditTask} />;
	});

	const changeSortButtonHandler = status => {
		changeFilter(status);
	};

	return (
		<Fragment>
			<h1 className="uk-heading-divider">Страница Задач</h1>
			<button className="uk-button uk-button-default mr" onClick={() => changeSortButtonHandler('username')}>
				Сортировать по имени
			</button>
			<button className="uk-button uk-button-default mr" onClick={() => changeSortButtonHandler('email')}>
				Сортировать по email
			</button>
			<button className="uk-button uk-button-default mr" onClick={() => changeSortButtonHandler('status')}>
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

			<Pagination />
			<NewTask createTask={createTask} addTask={addTask} />
		</Fragment>
	);
};

FilterPage.propTypes = {
	errorMsg: PropTypes.string,
	tasks: PropTypes.array.isRequired,
	changeFilter: PropTypes.func.isRequired,
	createTask: PropTypes.func.isRequired,
	addTask: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
	editTask: PropTypes.func.isRequired,
	onEditTask: PropTypes.func.isRequired,
};

export default FilterPage;
