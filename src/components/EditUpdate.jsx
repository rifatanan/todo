'use client'
import Button from '@/utilitys/Button';
import dataSendId from '@/JS/Id';
import Input from '@/utilitys/Input';
import Label from '@/utilitys/Label';
import {useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function Edit() {
	const searchParams = useSearchParams();
	const Id = searchParams.get('id');
	const previousName = searchParams.get('name');
	const previousTask = searchParams.get('task');

	const router = useRouter();

	const [formValues, setFormValues] = useState({
        name: previousName,
        task: previousTask,
    });

    const handleChange = e => {
		
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit =async e => {
        e.preventDefault();
		const data = new FormData(e.currentTarget);
		let newName = data.get('name'), newTask = data.get('task')

		if(formValues.name !== previousName || formValues.task !== previousTask){
			const postData = await dataSendId({newName,newTask,Id});
			if(postData.status === 'success')
				console.log('home ',postData.status);
				
				toast.success('Task Updated');
				postData.status='';
				await new Promise(resolve => setTimeout(resolve, 2000));
				router.push('/')
		}
		else
		toast.error('Same Value!');
    };


  	return (
		<div className='w-full flex justify-center'>
			<Toaster />
 			<div className="w-3/4 h-full flex justify-center items-center">
 				<form 
					className="bg-white shadow-lg mt-10 w-3/4 p-4 rounded-md"
 					onSubmit={handleSubmit}
 				>
 					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full px-3">
 							<Label name={'Name'}></Label>
							<Input
								name='name'
								placeholder="Enter Name"
								value={formValues.name}
								handleChange={handleChange} 
 							/>
 						</div>
 					</div>
 					<div className="flex flex-wrap -mx-3 mb-6">
 						<div className="w-full px-3">
 							<Label name={"Task"}></Label>
							<Input
 								name='task'
 								placeholder={"Enter Your Task"}
								value={formValues.task}
								handleChange={handleChange} 
 							/>
 						</div>
 					</div>
 					<div className='flex justify-evenly'>
 						<Button name={'Update'} />
 					</div>
 				</form>
 			</div>
 		</div>
   	)
}

 export default Edit
