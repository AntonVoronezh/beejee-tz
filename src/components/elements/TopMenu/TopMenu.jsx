import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './TopMenu.css';

const TopMenu = ({ onChange, location, menuList, name }) => {
	const { pathname } = location;

	const onClickHandler = pathname => {
		onChange(pathname);
	};

	const menuItems = menuList.map(({ id, to, content }) => {
		const isActivePage = pathname === to ? 'uk-active' : null;

		return (
			<li key={id} className={isActivePage} content={content}>
				<Link to={to} onClick={() => onClickHandler(pathname)}>
					{content}
				</Link>
			</li>
		);
	});

	return (
		<nav className="uk-navbar-container" uk-navbar="true">
			<div className="uk-navbar-left">
				<ul className="uk-navbar-nav aaa">{menuItems}</ul>
				<span className="uk-text-primary">{name}</span>
			</div>
		</nav>
	);
};

export default TopMenu;

TopMenu.propTypes = {
	onChange: PropTypes.func.isRequired,
	menuList: PropTypes.array.isRequired,
};
