'use client';
import NavBar from '@/components/NavBar';
import '../globals.css';
import cookieCheck from '@/JS/Cookie';
import { useEffect, useState } from 'react';
import AppContext from '@/context/AppContext';
import getData from '@/JS/HomePage';

export default function RootLayout({ children }) {
    const [value, setValue] = useState(null);
    const [cookie, setCookie] = useState(null);
    const [userId, setUserId] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const cookie = await cookieCheck();
            console.log('cookie: ', cookie);

            let data;
            if (cookie.status === 'success') {
                setCookie(cookie.data.auth.value);
                setUserId(cookie.data.userId.value);
                data = await getData(parseInt(cookie.data.userId.value));
                setValue(data.data);
            }
        };
        fetchData();
    }, []);

    //if (cookie?.data?.role.value === 'user') {
    return (
        <html lang="en">
            <body className="bg-slate-100">
                <AppContext.Provider
                    value={{
                        cookie,
                        setCookie,
                        userId,
                        setUserId,
                        value,
                        setValue,
                        role,
                    }}
                >
                    <NavBar />
                    {children}
                </AppContext.Provider>
            </body>
        </html>
    );
}
