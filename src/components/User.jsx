'use client'
import cookieCheck from '@/JS/Cookie';
import DeleteUser from '@/JS/DeleteUser';
import getAllData from '@/JS/GetAllData';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

function User() {

	let [data, setData ] = useState(null);

	useEffect(() => {
        const fetchData = async () => {
            const cookie = await cookieCheck();

            if (cookie.status === 'success') {
                data = await getAllData();
				setData(data.data.result2);
            }
        };
        fetchData();
    }, []);

	const handleDelete = async(id) => {
		
		let response = await DeleteUser(id);

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
		<div className='bg-slate-200 mt-5  w-4/5 rounded-md p-2 '>
			<h1 className='text-xl'>Users</h1>
			<div className='p-3'>
				<div className='flex font-semibold text-sm'>
					<h1 className='w-1/4'>User Name</h1>
					<h1 className='w-1/4'>Todo Name</h1>
					<h1 className='w-1/4'>Email</h1>
					<h1 className='w-1/4'>Actions</h1>
				</div>
				{data && data?.map((item,index) =>
					<div key={index} className='mt-2 flex hover:bg-slate-300 rounded-md p-1'>
						<h1 className='w-1/4'>{item.name}</h1>
						<h1 className='w-1/4'>Rifad Anan</h1>
						<h1 className='w-1/4'>{item.email}</h1>
						<button onClick={()=> handleDelete(item.id)} className='items-center'>Delete</button>
					</div>
				)}
			</div>
			<Toaster />
		</div>
	)
}

export default User