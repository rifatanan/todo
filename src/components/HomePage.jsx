'use client';
import React, { useContext, useEffect, useState } from 'react';
import EditDelete from './EditDelete';
import getData from '@/JS/HomePage';
import cookieCheck from '@/JS/Cookie';
import Pagination from './Pagination';
import toast, { Toaster } from 'react-hot-toast';
import AppContext from '@/context/AppContext';
import DeleteId from '@/JS/DeleteId';

const HomePage = () => {
	
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(5);

	const { value, setValue} = useContext(AppContext);

	useEffect(() => {
		const fetchData = async () => {
			const cookie = await cookieCheck();
			let data;
			if (cookie.status === 'success') {
				data = await getData(parseInt(cookie.data.userId.value));
            }
			setValue(data?.data);
		};
		fetchData();
	}, []);

	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;

	const handleDelete = async(id) => {

		let response = await DeleteId(id);

		function removeValue(value) {
			if (value.id === id)
				return false;
			return true;
		}

		const x = value.filter(removeValue);
		
		setValue(x);
		
		if(response.status ==='success'){
			toast.success('Item Deleted');
			await new Promise(resolve => setTimeout(resolve, 2000));
		}
	};

	if (!value) {
		return(
			<div className="flex justify-center">
				<div className="mt-5 w-3/4 flex justify-center">
					<button type="button" disabled>
						Loading...
					</button>
				</div>
			</div>
		)
	}
	else if(value.length === 0){
		return (
			<div className="flex justify-center">
				<div className="mt-5 w-3/4 flex justify-center">
					<button type="button" disabled>
						Empty Data
					</button>
				</div>
			</div>
		)
	}

	const currentPosts = value.slice(firstPostIndex,lastPostIndex);
	const totalPage = Math.ceil(value.length / postsPerPage);

	return (
		<div>
			<div className='flex justify-center mt-10'>
				<div className="h-full w-3/4 bg-white shadow-md divide-y divide-gray-400 rounded-md">
					<div className='w-full h-14 flex items-center text-xl font-bold'>
						<div className='w-2/3 flex pl-4'>
							<label className='w-1/12'></label>
							<div className='flex w-11/12'>
								<label className='w-1/2'>Name</label>
								<label className='w-1/2'>Email</label>
							</div>
						</div>
						<div className='w-1/3 pr-10 flex justify-end'>Actions
						</div>
					</div>
					{
						currentPosts && currentPosts.map((item) => (
						<div key={item.id} className='w-full h-14 flex items-center'>
							<div className='w-2/3 flex pl-4'>
								<label className='w-1/12'></label>
								<div className='flex w-11/12'>
									<label className='w-1/2'>{item.name}</label>
									<label className='w-1/2'>{item.task}</label>
								</div>
							</div>
							<EditDelete
								handleDelete={handleDelete}
								id={item.id} 
								name={item.name} 
								task={item.task} 
							/>
						</div>
					))}
				</div>
			</div>
			<Pagination
				totalPage={totalPage}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
			<Toaster />
		</div>
	);
};

export default HomePage;
