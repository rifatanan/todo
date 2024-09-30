import DashNav from '@/components/DashNav';
import Todo from '@/components/Todo';
import User from '@/components/User';
import React from 'react';

const pageName = 'DashBoard';

export const metadata = {
    title: pageName,
};

function page() {
    return (
        <div className="w-full p-2">
            <DashNav pageName={pageName} />
            <Todo />
            <User />
        </div>
    );
}

export default page;
