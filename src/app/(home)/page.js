'use client';
import HomePage from '@/components/HomePage';
import NoData from '@/components/NoData';
import AppContext from '@/context/AppContext';
import React, { useContext } from 'react';

const page = () => {
    const { cookie } = useContext(AppContext);
    let user;

    if (cookie === undefined) {
        user = <NoData />;
    } else {
        user = <HomePage />;
    }
    return <div>{user}</div>;
};

export default page;
