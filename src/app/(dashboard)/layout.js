import '../globals.css';
import Sidebar from '@/components/Sidebar';
import cookieCheck from '@/JS/Cookie';
import NoData from '@/components/NoData';

export default async function RootLayout({ children }) {
    const cookie = await cookieCheck();

    if (cookie?.data.role.value === 'admin') {
        return (
            <html lang="en">
                <body className="h-screen w-screen flex ">
                    <Sidebar />
                    {children}
                </body>
            </html>
        );
    } else {
        return (
            <html lang="en">
                <body className="">
                    <NoData />
                    {children}
                </body>
            </html>
        );
    }
}
