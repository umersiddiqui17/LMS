"use client"
import React, { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Sfunc({ teachers, students }) {
  const [timeslot, setTimeslot] = useState({ teachername: "", studentname: "", timestart: "", timeend: "",date:"",studentgmail:""});
  const [teacherId, setTeacherId] = useState("");
  const router = useRouter()
  // handle slot
  const handleSlot = async (e) => {
    e.preventDefault();
    try {
      console.log(timeslot);
      console.log(teacherId)
      if (!timeslot.teachername || !timeslot.studentname || !timeslot.timeend || !timeslot.timestart || !timeslot.date || !timeslot.studentgmail) {
        toast.error('Please fill all the fields!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          }); 
          return null
      }
      const res = await axios.put(`/api/slot/${teacherId}`,timeslot)
      
    
      router.push("/")

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
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
      <div className='flex justify-center items-center w-full h-20 bg-gray-700 text-white'>
        <h1 className='text-3xl font-serif font-bold'>
          Time Slot assigning Board
        </h1>
      </div>
      <form onSubmit={handleSlot}>
        <div className='flex justify-center items-center mt-24'>
          <div className='flex flex-col justify-center items-center w-2/3 h-1/2 mb-14 rounded-md aspect-square bg-gray-500'>
            <div className='flex flex-col md:flex-row justify-between w-1/2 items-center'>
              <div>
                <h1>Teacher</h1>
                <Select
                className='w-[200px]'
                id='teacher-menu'
                  options={teachers.map((teacher) => ({ value: teacher.name, label: teacher.name,id: teacher._id }))}
                  onChange={(e) => {setTimeslot({ ...timeslot, teachername: e.value }),setTeacherId(e.id)}}
                  placeholder="Select Teacher"
                />
              </div>
              <div>
                <h1>Student</h1>
                <Select
                className='w-[200px]'
                id='student-menu'
                  options={students.map((student) => ({ value: student.name, label: student.name,email:student.email }))}
                  onChange={(e) => setTimeslot({ ...timeslot, studentname: e.value,studentgmail:e.email })}
                  placeholder="Select Student"
                />
              </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between w-1/2 items-center md:mt-12'>
              <div>
                <h1>Time of Start</h1>
                <Select
                className='w-[200px]'
                id='timestart-m'
                  options={[
                    { value: "8am", label: "8 am" },
                    { value: "9am", label: "9 am" },
                    { value: "10am", label: "10 am" },
                    // Add more options as needed
                  ]}
                  onChange={(e) => setTimeslot({ ...timeslot, timestart: e.value })}
                  placeholder="Select Time Start"
                />
              </div>
              <div>
                <h1>Time of End</h1>
                <Select
                className='w-[200px]'
                id='timestart-menu'
                  options={[
                    { value: "9am", label: "9 am" },
                    { value: "10am", label: "10 am" },
                    { value: "11am", label: "11 am" },
                    // Add more options as needed
                  ]}
                  onChange={(e) => setTimeslot({ ...timeslot, timeend: e.value })}
                  placeholder="Select Time End"
                />
              </div>
              
            </div>

            <div className='flex flex-col md:flex-row justify-between  items-center md:mt-12'>

            <div>
                <h1>Date</h1>
                <Select
                className='w-[200px]'
                id='timestart-menu'
                  options={[
                    { value: "9am", label: "9 am" },
                    { value: "10am", label: "10 am" },
                    { value: "11am", label: "11 am" },
                    // Add more options as needed
                  ]}
                  onChange={(e) => setTimeslot({ ...timeslot, date: e.value })}
                  placeholder="Select Time End"
                />
              </div>
            </div>
            
            <div className='mt-12 bg-gray-400 hover:bg-gray-600'>
              <button type="submit" className='px-3 py-2 text-sm font-semibold'>Submit</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
