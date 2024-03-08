import { connect } from "@/utils/config/dbConfig"
import Student from "@/utils/modals/Student"
import Teacher from "@/utils/modals/Teacher"
import { NextResponse } from "next/server"

connect()

export async function GET(request,{params}) {
    try {
        const {id} = params
        const teacher = await Teacher.findOne({_id:id})
        return NextResponse.json({
            teacher,
            success:true
        })
    } catch (error) {
        console.log("Error:",error)
        return NextResponse.json({error:error.message},{status:500})
    }
}

connect()

export async function PUT(request,{params}){
    try {
        const {id} = params
        const {name,email,password,phonenumber,address,qualification,role,region,dateofbirth} = await request.json()
        await Teacher.findByIdAndUpdate(id,{name,email,password,phonenumber,address,qualification,role,region,dateofbirth})
        return NextResponse.json({
            message:"Course updated successfully",
            success:true
        })
    } catch (error) {
        console.log("Error:",error)
        return NextResponse.json({error:error.message},{status:500})
    }
}