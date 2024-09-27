import DashNav from '@/components/DashNav';
import User from '@/components/User';
import React from 'react';

function page() {
    return (
        <div className="p-2 w-full">
            <DashNav />
            <User />
        </div>
    );
}

export default page;
