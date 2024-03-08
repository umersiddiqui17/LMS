import axios from 'axios'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Stdelete from '@/components/Stdelete'
import StudentEdite from '@/components/StudentEdite'
  
async function getData() {
    try {
        const res = await axios.get("http://localhost:3000/api/students")
        
        return res.data.students
    } catch (error) {
        console.log("Error:",error)
    }
}
export default async function page() {
    const data = await getData()
    
  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-10'>
        <div className='flex justify-center items-center mt-5'>
            {/* list heading */}
            <h1 className='text-3xl font-serif text-indigo-400 font-semibold  underline  border-indigo-700'>Student List</h1>
        </div>
        <div>
            {/* Student list content */}
            {data.map((item,index)=>(
                <div key={index} className='w-96'>
                   <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{item.name}</AccordionTrigger>
                  <AccordionContent>
                    <div className='m-1 leading-relaxed p-1 '>
                        email: {item.email}
                    </div>
                    <div className='m-1 leading-relaxed p-1 '>
                        phone number: {item.phonenumber}
                    </div>
                    <div className='m-1 leading-relaxed p-1 text-sm'>
                        address: {item.address}
                    </div>
                    <div className='m-1 leading-relaxed p-1 '>
                        region: {item.region}
                    </div>
                    <div className='m-1 leading-relaxed p-1 '>
                        qualification: {item.qualification}
                    </div>
                    <div>
                      <Stdelete data ={item}/>
                    </div>
                    <div>
                      <StudentEdite data={item}/>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion> 
                </div>
                
              
            ))}
        </div>
      </div>
    </div>
  )
}
