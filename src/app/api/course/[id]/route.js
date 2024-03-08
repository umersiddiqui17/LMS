import { connect } from "@/utils/config/dbConfig";
import Course from "@/utils/modals/Course";
import { NextResponse } from "next/server";

connect()

export async function PUT(request,{params}){
    try {
        const {id} = params
        const {title,description,chapters} = await request.json()
        await Course.findByIdAndUpdate(id,{title,description,chapters})
        return NextResponse.json({
            message:"Course updated successfully",
            success:true
        })
    } catch (error) {
        console.log("Error:",error)
        return NextResponse.json({error:error.message},{status:500})
    }
}


export async function GET(request,{params}) {
    try {
        const {id} = params
        const course = await Course.findOne({_id:id})
        return NextResponse.json({
            course,
            success:true
        })
    } catch (error) {
        console.log("Error:",error)
        return NextResponse.json({error:error.message},{status:500})
    }
}