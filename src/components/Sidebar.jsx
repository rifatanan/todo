'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import profile from '../../public/Image/profile.webp'
import Link from 'next/link'
import cookieCheck from '@/JS/Cookie'
import getAllData from '@/JS/GetAllData'
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation'


 function Sidebar() {

	let data;
	const router = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			const cookie = await cookieCheck();
			//console.log('Side ',cookie);
			
			if (cookie.status === 'success') {
				data = await getAllData();
				console.log('data1 ',data.data);
            }
		};
		fetchData();
	}, []);

	const handleLogOut = async() => {
		const sendingMethod = {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
    	}
		
		console.log('logout clicked');

		let val = await fetch('/api/deletecookie',sendingMethod)

		if(val.status === 200 ){
			toast.success('Log Out');
			await new Promise(resolve => setTimeout(resolve, 1000));
			router.push('/login');
		}
	};
	
 	return (
		<div className='w-1/5 flex'>
			<div className=' w-full bg-slate-200 p-3'>
				<div className='rounded-md flex gap-2 hover:bg-slate-300 mb-5'>
					<Image
						src={profile}
						height={50}
						width={50}
						alt='Profile'
						className='rounded-full'
						priority='true'
					></Image>
					<div>
						<h1 className='font-semibold capitalize'>Admin</h1>
						<p>User</p>
					</div>
				</div>
				<div className='font-semibold'>
					<p className='text-sm'>Pages</p>
					<Link href={'/admin/dashboard'} className='block p-2 hover:bg-slate-300 rounded-md'>Dashboard</Link>
					<Link href={'/admin/user'} className='block p-2 hover:bg-slate-300 rounded-md'>Users</Link>
					<Link href={'/admin/todo'} className='block p-2 hover:bg-slate-300 rounded-md'>All Todo</Link>
				</div>
				<div className='font-semibold mt-5'>
					<p  className='text-sm'>User</p>
					<Link href="" onClick={handleLogOut} className='block p-2 hover:bg-slate-300 rounded-md'>Logout</Link>
				</div>
			</div>
			<Toaster />
		</div>
  	)
}

export default Sidebar