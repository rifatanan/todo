import DashNav from '@/components/DashNav';
import User from '@/components/User';
import React from 'react';

const pageName = 'Users';

export const metadata = {
    title: pageName,
};

function page() {
    return (
        <div className="p-2 w-full">
            <DashNav pageName={pageName} />
            <User />
        </div>
    );
}

export default page;
