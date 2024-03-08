import { connect } from "@/utils/config/dbConfig"
import Teacher from "@/utils/modals/Teacher"
import { NextResponse } from "next/server"

connect()

export async function GET(request,{params}) {
    try {
        const {email} = params
        const teacher = await Teacher.findOne({email})
        return NextResponse.json({
            teacher,
            success:true
        })
    } catch (error) {
        console.log("Error:",error)
        return NextResponse.json({error:error.message},{status:500})
    }
}