import DashNav from '@/components/DashNav';
import Todo from '@/components/Todo';
import React from 'react';

const pageName = 'Todo';

export const metadata = {
    title: pageName,
};

function page() {
    return (
        <div className="p-2 w-full">
            <DashNav pageName={pageName} />
            <Todo />
        </div>
    );
}

export default page;
