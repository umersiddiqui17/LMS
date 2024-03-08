"use client"
import { useSession } from 'next-auth/react'
import { MdDelete } from "react-icons/md";
import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Delete({data}) {
  const router = useRouter()
    const email = data.email
    const id = data._id
  
    const {data:session} = useSession()
    
    const isOwner = session && session.user && session.user.email === email
    const handleDelete= async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.delete(`/api/course?id=${id}`)
            console.log(res.data)
            if(res){
              router.refresh()
          }
        } catch (error) {
            console.log("Error:",error)
        }
    }
  return (
    <div>
      {isOwner?(
        <div>
            <MdDelete className=' w-8 h-8' onClick={handleDelete}/>
        </div>
      ):(
      <div>

      </div>
      )}
    </div>
  )
}
