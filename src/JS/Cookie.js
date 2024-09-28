'use server';
import { cookies } from 'next/headers';

export default async function cookieCheck() {
    try {
        const cookie = cookies();
        const auth = cookie.get('auth');
        const userId = cookie.get('userId');
        const role = cookie.get('role');

        if (auth !== undefined && userId !== undefined)
            return { status: 'success', data: { auth, userId, role } };
        else return { status: 'fail' };
    } catch (e) {
        return { status: 'fail', data: e };
    }
}
