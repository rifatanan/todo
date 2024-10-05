'use client'
import AppContext from '@/context/AppContext';
import dataSubmit from '@/JS/AddUpdate';
import Button from '@/utilitys/Button';
import Input from '@/utilitys/Input';
import Label from '@/utilitys/Label';

import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function AddUpdate() {

	const {userId} = useContext(AppContext)
	const router = useRouter();

	const formData = async e => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
		let name = data.get('name'),task = data.get('task');
	
		if(name !="" && task!=""){
			const postData = await dataSubmit({user_id:userId,name,task});
			if(postData.status === 'success'){
				toast.success('Task Added');
				await new Promise(resolve => setTimeout(resolve, 2000));
				router.push('/');
			}
		}
	}

  	return (
		<div className='w-full flex justify-center'>
			<div className="w-3/4 h-full flex justify-center items-center">
				<form 
					className="bg-white shadow-lg mt-10 w-3/4 p-4 rounded-md"
					onSubmit={formData}
				>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
							<Label name={'Name'} ></Label>
							<Input name='name' placeholder={"Enter Name"} />
						</div>
					</div>
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
							<Label name={"Task"} ></Label>
							<Input name='task' placeholder={"Enter Your Task"} />
						</div>
					</div>
					<div className='flex justify-evenly'>
						<Button name={'Add'} />
					</div>
				</form>
			</div>
			<Toaster />
		</div>
  	)
}

export default AddUpdate