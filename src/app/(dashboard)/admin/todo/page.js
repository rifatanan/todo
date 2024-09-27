import DashNav from '@/components/DashNav'
import Todo from '@/components/Todo'
import React from 'react'

function page() {
  return (
	<div className='p-2 w-full'>
		<DashNav/>
		<Todo />
	</div>
  )
}

export default page