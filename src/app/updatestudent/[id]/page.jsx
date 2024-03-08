import Editstudent from '@/components/Editstudent'
import axios from 'axios'
import React from 'react'
async function getData(id){
    try {
        const res = await axios.get(`http://localhost:3000/api/students/${id}`)
        
        return res.data.student
    } catch (error) {
        console.log("Error:",error)
    }
}
export default async function page({params}) {
    const id = params.id
    const data = await getData(id)
    
  return (
    <div>
      <Editstudent data ={data}/>
    </div>
  )
}
