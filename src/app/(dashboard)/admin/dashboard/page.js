'use client';
import DashNav from '@/components/DashNav';
import Todo from '@/components/Todo';
import User from '@/components/User';
import cookieCheck from '@/JS/Cookie';
import getAllData from '@/JS/GetAllData';
import React, { useEffect, useState } from 'react';

function page() {
    let [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const cookie = await cookieCheck();

            if (cookie.status === 'success') {
                data = await getAllData();
                //console.log('Dashboard', data.data);
                setData(data?.data);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="w-full p-2">
            <DashNav />
            <Todo />
            <User />
        </div>
    );
}

export default page;
