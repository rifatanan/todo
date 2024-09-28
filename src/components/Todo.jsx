'use client'
import cookieCheck from '@/JS/Cookie';
import DeleteId from '@/JS/DeleteId';
import getAllData from '@/JS/GetAllData';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

function Todo() {

	let [data, setData ] = useState(null);

	useEffect(() => {
        const fetchData = async () => {
            const cookie = await cookieCheck();

            if (cookie.status === 'success') {
                data = await getAllData();
                //console.log('Todo', data.data);
				setData(data.data.result1);
            }
        };
        fetchData();
    }, []);

	const handleDelete = async(id) => {
		
		let response = await DeleteId(id);

		function removeValue(value) {
			if (value.id === id)
				return false;
			return true;
		}

		const x = data.filter(removeValue);

		setData(x);
		
		if(response.status ==='success'){
			toast.success('Item Deleted');
			await new Promise(resolve => setTimeout(resolve, 2000));
		}
	};

	return (
		<div className='bg-slate-200 mt-5 w-4/5 rounded-md p-2'>
			<h1 className='text-xl'>TodoList</h1>
			<div className='p-3'>
				<div className='w-full flex font-semibold text-sm'>
					<h1 className='w-1/4'>User Name</h1>
					<h1 className='w-1/4'>Todo Name</h1>
					<h1 className='w-1/4'>Email</h1>
					<h1 className='w-1/4'>Actions</h1>
				</div>

				{data && data?.map((item,index) =>
					<div key={index} className='w-full flex mt-2'>
						<h1 className='w-1/4'>{item.name}</h1>
						<h1 className='w-1/4'>{item.task}</h1>
						<h1 className='w-1/4'>rifatanan@gamil.com</h1>
						<button onClick={()=>handleDelete(item.id)}>Delete</button>
					</div>
				)}
			</div>
			<Toaster />
		</div>
	)
}

export default Todo