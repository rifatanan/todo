import React from 'react'
import ReactPaginate from 'react-paginate';

function Pagination({totalPage, currentPage, setCurrentPage}) {

	const handlePageClick = ({selected}) =>{
		setCurrentPage(selected+1)
	}

	const showPrevButton = currentPage !== 1;
	const showNextButton = currentPage !== totalPage;

	return (
		<div>
			<ReactPaginate 
				className='flex items-center justify-center gap-2 mt-14'
				breakLabel={<span className='bg-green-300 hover:bg-cyan-400 p-2.5 rounded-md shadow-md'>...</span>}
				nextLabel={
					showNextButton?(<span className='hover:bg-cyan-400 px-3 py-3 ring-1 ring-slate-300 rounded-md shadow-md'>&rsaquo;</span>
					):null
				}
				onPageChange={handlePageClick}
				pageRangeDisplayed={2}
				pageCount={totalPage}
				previousLabel={
					showPrevButton?(<span className='hover:bg-cyan-400 px-3 py-3 ring-1 ring-slate-300 rounded-md shadow-md'>&lsaquo;</span>
					):null
				}
				renderOnZeroPageCount={null}
				containerClassName="flex items-center justify-center mt-8 mb-4"
				pageClassName='block ring-1 ring-slate-300 p-2.5 flex items-center justify-center cursor-pointer rounded-md shadow-md'
				activeClassName='bg-cyan-400'
			/>
		</div>
	)
}

export default Pagination