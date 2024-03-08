"use client"

import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoonLoader from "react-spinners/MoonLoader";


export default function SignUpTeacher() {
    const [teacher,setteacher] =useState({name:"",email:"",password:"",phonenumber:"",address:"",qualification:"",role:"teacher"})
    const [loading,setloading] =useState(false)
    const [error,seterror] =useState("")

    const router =useRouter()

    const handleSubmit = async(e) => {
        e.preventDefault()
        setloading(true)
        console.log(teacher)
        try {
          if(!teacher.name || !teacher.email || !teacher.password || !teacher.phonenumber || !teacher.address || !teacher.qualification || !teacher.role){
            toast.error('Please fill all the field!', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
          }
          const res = await axios.post("/api/teacherRegistration",teacher)
          console.log(res.data)
          if(res.status ===200 || res.status === 201){
            console.log("use added succesfully")
          }
          router.push("/login")
        } catch (error) {
          console.log(error)
          seterror("")
        }finally{
          setloading(false)
          

        }
    }

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
        
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
           {/* Logo */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-600">
              Register your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit} >
              <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="name"
                    type="text"
                    placeholder="Enter Your Name"
                    value={teacher.name}
                    onChange={(e) => setteacher({ ...teacher, name: e.target.value })}
                    required
                    className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-300 placeholder:text-gray-400 focus:ring-2 outline-none focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your Email"
                    value={teacher.email}
                    onChange={(e) => setteacher({ ...teacher, email: e.target.value })}
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter Your Password"
                    value={teacher.password}
                    onChange={(e)=>setteacher({...teacher,password:e.target.value})}
                    required
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="Phone Number" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                  </label>
                  <div className="text-sm">
                    
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="Phone Number"
                    name="Phone Number"
                    type="number"
                    placeholder="Enter Your Phone Number"
                    value={teacher.phonenumber}
                    onChange={(e)=>setteacher({...teacher,phonenumber:e.target.value})}
                    required
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                    address
                  </label>
                  <div className="text-sm">
                    
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter Your address"
                    value={teacher.address}
                    onChange={(e)=>setteacher({...teacher,address:e.target.value})}
                    required
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Qualifications
                  </label>
                  <div className="text-sm">
                    
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="Qualifications"
                    name="Qualifications"
                    type="text"
                    placeholder="Enter Your Qualifications"
                    value={teacher.qualification}
                    onChange={(e)=>setteacher({...teacher,qualification:e.target.value})}
                    required
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className=" items-center justify-between hidden">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    role
                  </label>
                  <div className="text-sm">
                    
                  </div>
                </div>
                <div className="mt-2 hidden">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter Your Password"
                   
                  
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {loading?"Processing":"Register"}
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Already a member?{' '}
              
                <Link href="/login">
                <span href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Login
                </span> 
                </Link>
              
        
            </p>
            <div>
               {loading?(
                <div>
                    <MoonLoader
                      color="#3949AB"
                      size={45}
                      speedMultiplier={1}
                    />
                </div>
               ):(
                <div>

                </div>
               )}
            </div>
          </div>
          
        </div>
      </>
    )
  }
