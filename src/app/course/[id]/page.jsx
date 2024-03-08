import axios from 'axios'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

async function getData(id) {
    try {
        const res = await axios.get(`http://localhost:3000/api/course/${id}`)
        return res.data

    } catch (error) {
        console.log("Error:",error)
    }
}
export default async function page({params}) {
  const id = params.id
  const data = await getData(id)
  return (
    <div>
      <div className='flex justify-center items-center flex-col mt-5 mb-5 py-4'>
        <div className=' flex justify-center items-center flex-col mt-7 mb-3 py-4 border-b border-indigo-700 w-full'>
            {/* Heading part */}
            <h1 className='text-3xl font-serif font-semibold text-indigo-400'>{data.course.title}</h1>
        </div>
        <div className='flex justify-center items-center flex-col mt-3 mb-3 py-4  '>
            {/* Description */}
            <h3 className='font-medium text-xl text-indigo-400'>{data.course.description}</h3>
        </div>
        <div className='flex justify-center items-center flex-col border-t border-indigo-700 w-full'>
            {/* Chapters */}
            <h3 className='font-medium text-2xl mt-4 text-indigo-400  flex justify-center items-center'>Chapters</h3>
            {data.course.chapters.map((item,index)=>(
                <div key={index} className='max-w-prose'>
                         <Accordion  type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                     {item.content}
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
