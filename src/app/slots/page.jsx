import React from 'react'

import Sfunc from '@/components/Sfunc'
import axios from 'axios'
// function to get teachers
async function getTeachers() {
    const res = await axios.get("http://localhost:3000/api/teachers")
    return res.data.teachers
}

// function to get students
async function getStudent() {
  const res = await axios.get("http://localhost:3000/api/students")
  return res.data.students
}
export default async function page() {
    const teachers = await getTeachers()
    const students = await getStudent()
    
  
  return (
    <>
  <Sfunc teachers ={teachers} students={students}/>
    </>
    
  )
}
