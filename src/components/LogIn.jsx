'use client'
import React, { useContext } from 'react'
import Button from '@/utilitys/Button'
import Input from '@/utilitys/Input'
import Label from '@/utilitys/Label'
import Link from 'next/link'
import checkUser from '@/JS/Login'
import { useRouter } from 'next/navigation'
import bcrypt from 'bcryptjs';
import AppContext from '@/context/AppContext'
import toast, { Toaster } from 'react-hot-toast';
import cookieCheck from '@/JS/Cookie'

function LogIn() {
	const router = useRouter();
	
	const {cookie, setCookie, setUserId} = useContext(AppContext)
	
	const handleSubmit = async(e) =>{
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		let email = data.get('email'),password = data.get('password');

		const login = await checkUser({email})
		const coo = await cookieCheck();
		
		if(login.status === 'success'){
			const check = await bcrypt.compare(password,login.data.password)
			
			if(check){
				setCookie(login.data.auth);
				setUserId(login.data.id);
    			toast.success('Login Success');
				await new Promise(resolve => setTimeout(resolve, 2000));
				if(coo.data.role.value === 'admin')
					router.push('/admin/dashboard');
				else
					router.push('/')
			}
			else
			toast.error('Passsword Wrong!');
		}
		else toast.error('Login Fail');
	}
	return (
		<div className="h-[665px] w-full flex justify-center items-center shadow-md">
			<div className='p-10 h-5/6 lg:w-5/12 md:w-9/12 sm:w-9/12 bg-white shadow-md rounded-md'>
				<div className='h-full'>
					<h1 className='flex font-bold text-3xl justify-center'>Welcome Back!</h1>
					<h1 className='flex font-bold text-3xl justify-center'>Login to your account</h1>
					<form
						className='w-full h-5/6 pt-3 gap-2'
						onSubmit={handleSubmit}>
						<div className='grid grid-flow-row gap-2'>
							<Label name={"Email"} />
							<Input name={'email'} placeholder={"Enter Your Email"} />
							<Label name={"Password"} />
							<Input name={"password"} placeholder={"Enter Your Password"} />
							<p>Don't have an account?
								<Link href={'/registation'} className='text-blue-500'> Registation</Link>
							</p>
						</div>
						<Button name={"LogIn"} />
					</form>
				</div>
			</div>
			<Toaster />
		</div>
  	)
}

export default LogIn