import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    const cookie = cookies();
    const show = cookie.get('userId');
    const userRole = cookie.get('role');
    console.log('role', userRole.value, ' ', pathname);

    if (show !== undefined) {
        return NextResponse.next();
    } else return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
    matcher: ['/addtodo', '/edit', '/admin', '/admin/dashboard'],
};
