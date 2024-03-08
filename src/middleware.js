import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export default async function middleware(req) {
    const path =req.nextUrl.pathname
    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET
    })
     
    const isTeacher = token && token.role === 'teacher';
    
    const teacherRoutes = path === '/addCourse' || path === '/editCourse'
    
    const PublicPath = path === '/login' || path ==='/signupTeacher' || path ==='/signupStudent'
    if(PublicPath && token){
        return NextResponse.redirect(new URL("/",req.nextUrl))
    }
    if(!PublicPath &&!token){
        return NextResponse.redirect(new URL("/login",req.nextUrl))
    }
    if (!isTeacher && teacherRoutes) {
        return NextResponse.redirect(new URL("/",req.nextUrl))
     }
 
}
export const config = {
    matcher: ['/','/profile/:path*','/signupStudent','/signupTeacher','/login','/addCourse','/editCourse']
}