import DashNav from '@/components/DashNav';
import Todo from '@/components/Todo';
import User from '@/components/User';

export const metadata = {
    title: 'Dashboard',
};

function page() {
    return (
        <div className="w-full p-2">
            <DashNav name={'Dashboard'} />
            <Todo />
            <User />
        </div>
    );
}

export default page;
