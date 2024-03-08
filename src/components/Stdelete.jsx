"use client"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React from 'react'
import { MdDelete } from 'react-icons/md'



export default function Stdelete({data}) {
    const id = data._id
    const router = useRouter()
    
   const handleDelete= async(e)=>{
        e.preventDefault()
    try {
        const res = await axios.delete(`/api/students?id=${id}`)
        
        if(res){
          router.refresh()
      }
    } catch (error) {
        console.log("Error:",error)
    }
}
  return (
    <div>
      <MdDelete onClick={handleDelete}/>
    </div>
  )
}
