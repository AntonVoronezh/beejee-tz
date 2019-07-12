import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './FilterPage.css';
import { Task } from '../../elements';
import { Pagination } from '../../../containers/elements';

const FilterPage = ({ errorMsg, tasks: tasksArr = [], filterTasks, changeSelect }) => {
	const error = errorMsg ? <div className="uk-text-danger">{errorMsg}</div> : null;
	const tasks = tasksArr.map((el, idx) => {
		return <Task key={idx} {...el} />;
	});

	const allButtonHandler = () => {
		filterTasks('All');
	};

	const activeButtonHandler = () => {
		filterTasks('Active');
	};

	const inactiveButtonHandler = () => {
		filterTasks('NonActive');
	};

	const selectHandler = event => {
		changeSelect(Number(event.target.value));
	};

	return (
		<Fragment>
			<h1 className="uk-heading-divider">Страница фильтрации</h1>
			<button className="uk-button uk-button-primary mr" onClick={allButtonHandler}>
				Все
			</button>
			<button className="uk-button uk-button-primary mr" onClick={activeButtonHandler}>
				Активные
			</button>
			<button className="uk-button uk-button-primary mr" onClick={inactiveButtonHandler}>
				Неактивные
			</button>
			<select className="uk-select mr" onChange={selectHandler}>
				<option value="5">Выводить по 5 на странице</option>
				<option value="6">Выводить по 6 на странице</option>
				<option value="7">Выводить по 7 на странице</option>
				<option value="8">Выводить по 8 на странице</option>
				<option value="9">Выводить по 9 на странице</option>
				<option value="10">Выводить по 10 на странице</option>
				<option value="11">Выводить по 11 на странице</option>
				<option value="12">Выводить по 12 на странице</option>
				<option value="13">Выводить по 13 на странице</option>
				<option value="14">Выводить по 14 на странице</option>
				<option value="15">Выводить по 15 на странице</option>
			</select>

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
	changeSelect: PropTypes.func.isRequired,
};
