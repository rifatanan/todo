
import Link from 'next/link';
import React from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';

const EditDelete = ({ handleDelete, id, name, task}) => {

	return (
		<div className='w-1/3 pr-10 flex justify-end'>
			<Link
				href={{
					pathname: '/edit',
					query: {
						id: id, name:name, task:task
					}
				}} 
			><MdEdit size={24} /></Link>
			<MdDelete onClick={() => handleDelete(id)} className='ml-4 cursor-pointer text-red-400' size={24} />
		</div>
	);
};

export default EditDelete;
