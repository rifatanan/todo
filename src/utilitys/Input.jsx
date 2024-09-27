'use client'
import React from 'react'

function Input({name,placeholder,value,handleChange}) {
	
	return (
		<input
			name={name}
			type= 'text'
			className='appearance-none w-full text-gray-700 ring-1 border-gray-100 rounded p-2 py-3 mb-3 outline-none focus:outline-none'
			placeholder={placeholder}
			value={value}
			onChange={handleChange}
			required
		/>
  	)
}

export default Input
