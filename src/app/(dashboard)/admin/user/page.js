import DashNav from '@/components/DashNav';
import User from '@/components/User';
import React from 'react';

export const metadata = {
    title: 'Users',
};

function page() {
    return (
        <div className="p-2 w-full">
            <DashNav name={'Users'} />
            <User />
        </div>
    );
}

export default page;
