'use client'
import AppContext from '@/context/AppContext'
import Button from '@/utilitys/Button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { MdClose, MdMenu } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation'

const NavBar = () => {

	const { cookie, setCookie, value, setValue } = useContext(AppContext);

	const [isOpen, setIsOpen] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [query, setQuery] = useState('');

	const router = useRouter();

	const handleChange = (event) =>{
		setQuery(event.target.value)
		setSearchValue( 
			value.filter( (val) => val.name.toLowerCase().includes(event.target.value.toLowerCase()) )
		)
	}

	const handleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleLogOut = async() => {
		const sendingMethod = {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
    	}
		
		let val = await fetch('api/deletecookie',sendingMethod)

		if(val.status === 200 ){
			setCookie(undefined)
			setValue(null);
			toast.success('Log Out');
			await new Promise(resolve => setTimeout(resolve, 1000));
		}
	};

	const handleClear = (id,name,task) => {
		setSearchValue('');
		router.push(`/edit?id=${id}&name=${name}&task=${task}`)
	}
	
  	return (
		<div className='w-full flex justify-center'>
			<nav className="p-5 bg-white shadow-lg rounded-b-md w-3/4 md:flex md:items-center md:justify-between">
				<div className='flex justify-between items-center'>
					<Link href={'/'} className="text-3xl font-['Poppins'] cursor-pointer">
						<Image
							src='/Image/todo_image.png'
							alt='todoLogo'
							className='inline mr-1' 
							width={26}
							height={26}
						/>
						Todo
					</Link>
					<span className='text-3xl block md:hidden'>
						<button onClick={handleMenu}>
							{isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
						</button>
					</span>
				</div>
				<ul
					className={`md:flex md:items-center md:static absolute bg-white w-auto left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all duration-100 ease-in ${
						isOpen ? 'top-[80px] opacity-100 z-50' : 'top-[-400px] opacity-0 md:opacity-100 md:top-0'
						}`}>
					<li className={`${cookie === undefined || cookie ===null ? 'invisible' :'visible'} mx-4 my-6 md:my-0`}>
						<div className='pt-1'>
							<input 
								type="text" 
								className=' p-2 rounded outline-none border-gray-200 ring-1' 
								placeholder='Search Name'
								onChange={handleChange}
							/>
						</div>
						<div className='absolute z-10'>
						{   query !== '' && searchValue.length>0 && (
							searchValue.map( (product, index) => (
								<div
									className='bg-slate-100 cursor-pointer hover:bg-slate-300 py-1 rounded p-1'
									key={index}
									onClick={() => handleClear(product.id, product.name, product.task)}
								>{product.name} {product.task}
								</div>
							))
						)}
						</div>
					</li>
					
					<li className={`mx-4 my-6 md:my-0 ${ cookie === undefined || cookie ===null ? 'invisible' :'visible'}`}>
						<Link href={'/addtodo'}>
							<Button name={"Add"}/>
						</Link>
					</li>
					<li className='mx-4 my-6 md:my-0'>
						{
							cookie === undefined || cookie ===null ?
							<Link href={'/login'}>
								<Button name={"LogIn"}/>
							</Link>:
							<Link href={'/login'} onClick={handleLogOut}>
								<Button name={"LogOut"}/>
							</Link>
						}
					</li>
				</ul>
			</nav>
			<Toaster />
		</div>
	)
}

export default NavBar;
