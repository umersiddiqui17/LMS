"use client"
import { MdDelete } from "react-icons/md";
import React from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Del({item,data}) {
  const router = useRouter()
  const teacherid = data._id
    const id = item._id
    console.log(id)
  
    

    const handleDelete= async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.delete(`/api/slot?id=${id}&teacherid=${teacherid}`)
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
     
        <div>
            <MdDelete className=' w-8 h-8' onClick={handleDelete}/>
        </div>
      
      <div>

      </div>
      
    </div>
  )
}
