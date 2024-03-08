import EditTopic from '@/components/EditTopic'
import axios from 'axios'
import React from 'react'
async function getData(id){
    try {
        const res = await axios.get(`http://localhost:3000/api/course/${id}`)
        
        return res.data
        
    } catch (error) {
        console.log(error)
    }
}

export default async function page({params}) {
    const id = params.id
    const data = await getData(id)
    console.log(data)
  return (
    <div>
      <EditTopic data={data}/>
    </div>
  )
}
