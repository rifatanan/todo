'use client'
import React, { useState } from 'react'
import Button from '@/utilitys/Button'
import Input from '@/utilitys/Input'
import Label from '@/utilitys/Label'
import Link from 'next/link'
import createUser from '@/JS/Registation'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast';

function Registation() {
	const [name, setName] =  useState(null);
	const [email, setEmail] =  useState(null);
	const [password, setPassword] =  useState(null);
	const router = useRouter();
	let result;

	const handleSubmit = async (e) =>{
		setName(null)
		setEmail(null)
		setPassword(null)
		e.preventDefault();
		const data = new FormData(e.currentTarget);

		const newTodo= {
			name  : data.get('name'),
			email : data.get('email'),
			password :data.get('password')
		}
		result = await createUser(newTodo)
		
		const entriesArray = [result];

		if (Array.isArray(entriesArray[0])) {
			entriesArray[0]?.forEach((issue) =>{
				if(issue.path[0] === 'name')
					setName(issue.message)
				if(issue.path[0] === 'email')
					setEmail(issue.message)
				if(issue.path[0] === 'password')
					setPassword(issue.message)
			})
		}
		if(result.status === 'success'){
			toast.success("Registation Successfull")
			await new Promise(resolve => setTimeout(resolve, 1000));
			router.push('/login');
		}
	}
	
  	return (
		<div className="h-[665px] w-full flex justify-center items-center">
			<div className='p-10 h-5/6 lg:w-5/12 md:w-9/12 sm:w-9/12 bg-white shadow-md rounded-md'>
				<div className='h-full'>
					<h1 className='flex font-bold text-3xl justify-center'>Registation</h1>
					<form 
						className='w-full h-5/6 pt-3 gap-2'
						onSubmit={handleSubmit}>
						<div className='grid grid-flow-row gap-2'>
							<Label name={"Name"} className={"pl-1 font-bold"} />
							<Input name='name' placeholder={"Enter Your Name"} />
							<p className='text-red-500'>{name}</p>
							<Label name={"Email"} className={"pl-1 font-bold"} />
							<Input name='email' placeholder={"Enter Your Email"} />
							<p className='text-red-500'>{email}</p>
							<Label name={"Password"} className={"pl-1 font-bold"} />
							<Input name='password' placeholder={"Enter Your Password"} />
							<p className='text-red-500'>{password}</p>
							<p>Already have an account?	<Link href={'/login'} className='text-blue-500'>LogIn</Link></p>
						</div>
						<Button name={"Submit"} />
					</form>
				</div>
			</div>
			<Toaster />
		</div>
  	)
}

export default Registation