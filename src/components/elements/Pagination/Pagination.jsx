import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ totalCount, length, changePagPage, fetchPersonList, pagPage }) => {
	const pageCount = Math.ceil(totalCount / length);
	
	const onPageChange = ({ selected }) => {
		changePagPage(selected + 1);
		fetchPersonList();
	};

	const pag =
		totalCount !== 0 ? (
			<ReactPaginate
				previousLabel={'previous'}
				nextLabel={'next'}
				breakLabel={'...'}
				breakClassName={'page-item'}
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				containerClassName={'pagination'}
				pageClassName={'page-item'}
				previousClassName={'page-item'}
				nextClassName={'page-item'}
				pageLinkClassName={'page-link'}
				previousLinkClassName={'page-link'}
				nextLinkClassName={'page-link'}
				activeClassName={'active'}
				onPageChange={onPageChange}
				forcePage={pagPage - 1}
			/>
		) : null;

	return <div>{pag}</div>;
};

export default Pagination;
