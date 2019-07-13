import React from 'react';
import ReactPaginate from 'react-paginate';

import './Pagination.css'

const Pagination = ({ tasksCount, pageNum, changeActivePage }) => {
	const pageCount = Math.ceil(tasksCount / 3);
	
	const onPageChange = ({ selected }) => {
		changeActivePage(selected + 1);
	};

	const pag =
		tasksCount !== 0 ? (
			<ReactPaginate
				previousLabel={'previous'}
				nextLabel={'next'}
				breakLabel={'...'}
				breakClassName={'page-item'}
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				containerClassName={'uk-pagination'}
				pageClassName={'page-item'}
				previousClassName={'uk-pagination-previous'}
				nextClassName={'uk-pagination-next'}
				pageLinkClassName={'page-link'}
				previousLinkClassName={'page-link'}
				nextLinkClassName={'page-link'}
				activeClassName={'uk-active-pag'}
				onPageChange={onPageChange}
				forcePage={pageNum - 1}
			/>
		) : null;

	return <div>{pag}</div>;
};

export default Pagination;
