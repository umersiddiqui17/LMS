import { connect } from "@/utils/config/dbConfig"
import Student from "@/utils/modals/Student"
import bcryptjs from 'bcryptjs'
import { NextResponse } from "next/server"


connect()

export async function POST(req){
    try {
        const {name,email,password,phonenumber,address,qualification,dateofbirth,role,region} = await req.json()
        
        const ifstudentExist = await Student.findOne({email})

        if(ifstudentExist){
            return NextResponse.json({error:"user already exist"},{status:400})
        }

        const salt = await bcryptjs.genSalt(10)

        const hashedpassword = await bcryptjs.hash(password,salt)

        const newStudent = new Student({
            name,email,password:hashedpassword,phonenumber,address,qualification,dateofbirth,region,role
        })
        const SavedStudent = await newStudent.save()
       

        return NextResponse.json({
            message:"user created successfully",
            success:true,
            SavedStudent
        })

        
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}