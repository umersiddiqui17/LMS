import axios from 'axios'
import React from 'react'
import Delete from './Delete'
import Edit from './Edit'
import Link from 'next/link'

async function getData (){
    try {
       const res = await axios.get("http://localhost:3000/api/course") 
       
       return res.data.posts
    } catch (error) {
        console.log("Error:",error)
    }
}

export default async function List() {
    const data = await getData()
  return (
    <div>
      <div className='text-3xl text-indigo-600 flex justify-center items-center border-b-2 border-indigo-700 mb-4 '>Topic List </div>
      {data.map((item,index)=>(
        <div key={index} className='w-96 border border-indigo-600 px-3 py-3 rounded-lg  bg-indigo-50 flex'> 
            <div className=' w-full '>
              <Link href={`/course/${item._id}`}>
                  <h2 className=' pt-3 border-b border-black'>Title: <span className='font-serif  text-indigo-700'>{item.title}</span> </h2>
                  <p className='pt-3 border-b border-black line-clamp-2 '>Description: <span className='font-serif text-indigo-700'>{item.description}</span></p>
                  <p className='pt-3 border-b border-black  pb-3'>Created By: <span className='font-serif text-indigo-700'>{item.email}</span></p>
              </Link>
     
        </div>
        <div className=' flex justify-center items-center ml-10'>
             <Edit data={item}/>
            <Delete data={item}/>
        </div>
        </div>
       
      ))}
    </div>
  )
}
