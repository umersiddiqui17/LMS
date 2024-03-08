"use client"
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function StudentEdite({data}) {
  const {data:session} = useSession()
  console.log(data._id)
  const id = data._id
  
  const isOwner = session && session.user && session.user.role === "teacher"
  return (
    <div>
     {isOwner?(
     <Link href={`/updatestudent/${id}`}>
      <div >
       update
     </div>
     </Link>
    
     ):(
     <div>

     </div>)} 
    </div>
  )
}
