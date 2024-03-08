import { connect } from "@/utils/config/dbConfig"
import Teacher from "@/utils/modals/Teacher"
import { NextResponse } from "next/server"

connect()

export async function PUT(request,{params}){
    try {
        const {id} = params
        console.log(params)
        const timeslot = await request.json()
        const teacher = await Teacher.findById(id);
        teacher.timeslot = [...teacher.timeslot,timeslot]
        await teacher.save()
        return NextResponse.json({
            message:"Course updated successfully",
            success:true
        })
    } catch (error) {
        console.log("Error:",error)
        return NextResponse.json({error:error.message},{status:500})
    }
}