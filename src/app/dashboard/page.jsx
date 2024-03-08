import Link from 'next/link'
import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { PiStudent } from "react-icons/pi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"




export default function page() {
  return (
    <>
    <div className=' w-full flex items-center justify-center h-20 bg-gray-700 text-white overflow-x-hidden'>
           <h1>Dashboard</h1>
    </div>
    <div className='flex overflow-x-hidden '>
      <div className='w-1/3 '>
        {/* Sidebar */}
        <div className='w-full h-screen bg-gray-400'>
          <div className='flex flex-col items-start lg:ml-7 md:ml-4 ml-1 '>
                <div className=' flex justify-center items-center mt-7'>
                <FaPlus className='md:mr-3 sm:mr-1 md:w-5 md:h-5 w-3 h-3'/>

                 <h1 className='md:text-xl lg:text-2xl sm:text-sm text-xs font-medium hover:underline underline-black cursor-pointer'>Add Course</h1>
                </div>
                <div className='flex justify-center items-center mt-3'>
                <CgProfile className='md:mr-3 sm:mr-1 md:w-5 md:h-5 w-3 h-3' />
                  <h1 className='md:text-xl lg:text-2xl sm:text-sm text-xs font-medium hover:underline underline-black cursor pointer'>My Courses</h1>
                </div>
                <div className='flex justify-center items-center mt-3'>
                <PiStudent className='md:mr-3 sm:mr-1 md:w-5 md:h-5 w-3 h-3'/>
                 <h1 className='md:text-xl lg:text-2xl sm:text-sm text-xs font-medium hover:underline underline-black cursor pointer'>My students</h1>

                </div>
          </div>
        </div>
      </div>
      <div>
        {/* content */}
        <div className=' mt-7  flex justify-center items-center'>
        <Table className="">
  <TableCaption>Time slots.</TableCaption>
  <TableHeader>
    <TableRow className="">
      <TableHead className="w-[800px]">Student</TableHead>
      <TableHead className="w-[100px]">Time slot</TableHead>
      <TableHead>Gmail</TableHead>
      <TableHead className="text-right">Date</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell className="w-[200px]">11:00-12:00</TableCell>
      <TableCell>usman@gmail.com</TableCell>
      <TableCell className="text-right w-[150px]">3-03-2024</TableCell>
    </TableRow>
  </TableBody>
</Table>

        </div>
      </div>
    </div>
    </>
    
  )
}
