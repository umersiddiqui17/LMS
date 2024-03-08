import { connect } from "@/utils/config/dbConfig"
import Teacher from "@/utils/modals/Teacher"
import { NextResponse } from "next/server"
import bcryptjs from 'bcryptjs'


connect()
export async function POST(req){
    try {
        const {name,email,password,phonenumber,address,qualification,role} = await req.json()
        
        const ifteacherExist = await Teacher.findOne({email})

        if(ifteacherExist){
            return NextResponse.json({error:"user already exist"},{status:400})
        }

        const salt = await bcryptjs.genSalt(10)

        const hashedpassword = await bcryptjs.hash(password,salt)

        const newTeacher = new Teacher({
            name,email,password:hashedpassword,phonenumber,address,qualification,role
        })
        const SavedTeacher = await newTeacher.save()
       

        return NextResponse.json({
            message:"user created successfully",
            success:true,
            SavedTeacher
        })

        
    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}