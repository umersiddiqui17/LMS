"use client"
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import React from 'react'
import { FaEdit } from "react-icons/fa";


export default function Edit({data}) {
    const {data:session} = useSession()
    const id = data._id
    const email = data.email
    const isOwner = session && session.user && session.user.email === email
  return (
    <div>
      {isOwner?(
        <div>
            <Link href={`/editCourse/${id}`}>
            <FaEdit className='w-8 h-8 mr-3' />    
            </Link>
        
        </div>
      ):(
        <div>

        </div>
      )}
    </div>
  )
}
