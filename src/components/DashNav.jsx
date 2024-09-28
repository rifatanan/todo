'use client'
import React from 'react'

function DashNav({name}) {
	return (
		<div className='w-full'>
			<div className='bg-slate-200 w-full rounded-md p-3 flex justify-between'>
				<p className='font-bold'>{name}</p>
				<input placeholder='Search Users' className='p-1 rounded-md outline-none focus'></input>
			</div>
			<div className='w-4/5 mt-5 flex justify-between gap-x-2 h-20'>
				<div className='bg-slate-200 rounded-md w-1/3 flex p-2 gap-1'>
					<div>T-I</div>
					<div>Total User</div>
				</div>
				<div className='bg-slate-200 rounded-md w-1/3 flex p-2 gap-1'>
					<div>T-T</div>
					<div>Total Todo</div>
				</div><div className='bg-slate-200 rounded-md w-1/3 flex p-2 gap-1'>
					<div>T-A</div>
					<div>Another</div>
				</div>
			</div>
		</div>
	)
}

export default DashNav