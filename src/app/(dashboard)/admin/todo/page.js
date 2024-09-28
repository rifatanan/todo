import DashNav from '@/components/DashNav';
import Todo from '@/components/Todo';
import React from 'react';

export const metadata = {
    title: 'All Todo',
};

function page() {
    return (
        <div className="p-2 w-full">
            <DashNav name={'All Todo'} />
            <Todo />
        </div>
    );
}

export default page;
