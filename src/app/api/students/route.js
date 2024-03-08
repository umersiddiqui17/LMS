import { connect } from "@/utils/config/dbConfig"
import Student from "@/utils/modals/Student"
import { NextResponse } from "next/server"
connect()
export async function GET(){
    try {
        const students = await Student.find()
        return NextResponse.json({
            students,
            success:true
        })
    } catch (error) {
        console.log("Error:",error)
        return NextResponse.json({error:error.message},{status:500})
    }
}

// to delete the post


export async function DELETE(request){
    try {
        await connect()
        const id = request.nextUrl.searchParams.get("id")
        const res = await Student.findByIdAndDelete(id)
        if (res) {
             return NextResponse.json({
            message:"post deleted successfully",
            success:true
        })
        }
        return NextResponse.json({
            message:"post not deleted",
            success:false
        })
       
    } catch (error) {
        console.log("Error:",error)
        return NextResponse.json({error:error.message},{status:500})
    }
}