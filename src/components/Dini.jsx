"use client"
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function Dini() {
    const {data:session} = useSession()
    
  return (
    <div>
      {session?(
        <Link href={`/dashboard/${session.user.email}`}>
         <div>
          hello 
        </div>
        </Link>
       
      ):(
        <div>

        </div>
      )}
    </div>
  )
}
