"use client"
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoonLoader from "react-spinners/MoonLoader";


export const revalidate = 40
export const dynamic = 'force-dynamic'

export default function AddTopic() {

    const {data:session} =useSession()
    const [course,setcourse] =useState({title:"",email:"",description:"",chapters:[{title:"",content:""}]})

    const router = useRouter();

    // add chapters functionality
    const addChapter=()=>{
        setcourse({...course,chapters:[...course.chapters,{title:"",content:""}]})
    }

    // Delete chapter functionality
     const handleChapterDelete = (index) =>{
        const updatedcourse =[...course.chapters]
        updatedcourse.splice(index,1)
        setcourse({...course,chapters:updatedcourse})
     }  

     const handleSubmit =async(e)=>{
        e.preventDefault()
       console.log(course)
        try {
            if (!course.title || !course.description ||!course.email ) {
                toast.error('Please fill all the fields!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    
                    })
                
            }
            const res = await axios.post("/api/course",course,{cache:false})
            console.log(res)
            router.push("/")


        } catch (error) {
            console.log('Error',error)
        }
     }
    return (
       
    <div> 
        <ToastContainer
         position="bottom-right"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="light"
         
        />
        {session?(
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center mt-7 border shdaow-md py-3 border-indigo-600'>
            <h1 className='text-3xl font-sans font-semibold text-indigo-600 mb-6 border-b-2 border-black'>Create A Course</h1>
         <div className=' ml-5'>
           
            <label htmlFor="name" className=' text-sm block font-medium leading-6'>Title of the Course:</label>
            <div className=' border-indigo-800 border-t w-96'>
                <input id='name' name='name' type="text" placeholder="Topic Name" value={course.title} onChange={(e)=>setcourse({...course,title:e.target.value})} className='block w-full rounded-md border-b border-indigo-700 py-1.5 ring-inset ring-indigo-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  outline-none'/>
            </div>
         </div>
         <div className=' ml-5 mt-3'>
            <label htmlFor="description" className=' text-sm block font-medium leading-6'>Description of the Course:</label>
            <div className=' border-indigo-800 border-t w-96'>
                <input id='description' name='description' type="text" placeholder="Topic Name" value={course.description} onChange={(e)=>setcourse({...course,description:e.target.value})} className='block w-full rounded-md border-b border-indigo-700 py-1.5 ring-inset ring-indigo-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  outline-none'/>
            </div>
         </div>
         <div className=' ml-5 mt-3 '>
           
            <div className=' '>
                <input id='description' name='description' type='hidden' placeholder="Topic Name" value={course.email}   className='block w-full rounded-md border-b border-indigo-700 py-1.5 ring-inset ring-indigo-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  outline-none'/>
            </div>
         </div>
         <h2 className='mt-5 text-xl font-serif ml-5'>Chapters</h2>
          {course.chapters.map((chapter,index)=>(
            <div className=' ml-5 mt-3' key={index}>
                <label htmlFor="Chapter Description" className=' text-sm block font-medium leading-6'>Chapter Title:</label>
                <div className=' w-96 '>
                    <input id='Chapter Description' name='Chapter Description' placeholder="Topic Name" value={chapter.title} onChange={(e)=>setcourse({...course,chapters:course.chapters.map((chap,idx)=>idx === index?{...chap,title:e.target.value}:chap)})}  className='block w-full rounded-md border-b border-indigo-700 py-1.5 ring-inset ring-indigo-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  outline-none'/>
                </div>
                <label htmlFor="Chapter Content" className=' text-sm block font-medium leading-6'>Chapter Content:</label>
                <div className='w-96 '>
                    <input id='Chapter Content' name='Chapter Content' placeholder="Chapter Content" value={chapter.content} onChange={(e)=>setcourse({...course,chapters:course.chapters.map((chap,idx)=>idx === index?{...chap,content:e.target.value}:chap)})}  className='block w-full rounded-md border-b border-indigo-700 py-1.5 ring-inset ring-indigo-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  outline-none'/>
                </div>
                <button onClick={handleChapterDelete} className='py-2 px-3 ml-5 mt-2 bg-indigo-600 rounded-md hover:bg-indigo-800'>Delete</button>
             </div>
          ))}
          <div className=' mt-5 border-t-2 border-black flex justify-center items-center'>
                <button type='button' onClick={addChapter} className='py-2 px-3 ml-5 mt-2 bg-indigo-600 rounded-md hover:bg-indigo-800' >Add chapter</button>
         <button type='submit' className='py-2 px-3 ml-2 mr-5 mt-2 bg-indigo-600 rounded-md hover:bg-indigo-800' onClick={()=>setcourse({...course,email:session.user.email})}>Submit</button>
          </div>
      
        </form>
        ):(
            <div className=' flex flex-col items-center justify-center mt-12'>
                <div>
                   <MoonLoader
                  color="#37056a"
                  loading
                  size={60}
                /> 
                </div>
                
                <span>Please wait while we get everything ready</span>
            </div>
        )}
        
    </div>
  )
}