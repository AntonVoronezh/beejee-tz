import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.css';

const PaginationE = ({ onChange, activePage, pagesTotal }) => {
	const handlePageChange = i => {
		onChange(i);
	};

	const arr = [];
	for (let i = 1; i <= pagesTotal; i += 1) {
		arr.push(i);
	}

	const pagination = arr.map(i => {
		return (
			<li key={i} onClick={() => handlePageChange(i)}>
				<span className={activePage === i ? 'uk-background-primary href' : 'uk-disabled href'}>{i}</span>
			</li>
		);
	});

	return <ul className="uk-pagination">{pagination}</ul>;
};

export default PaginationE;

PaginationE.propTypes = {
	activePage: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired,
};

