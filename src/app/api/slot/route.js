import { connect } from "@/utils/config/dbConfig"
import Teacher, { Timeslot } from "@/utils/modals/Teacher"
import { NextResponse } from "next/server"

export async function DELETE(request){
    try {
        await connect()
        const id = request.nextUrl.searchParams.get("id")
        const teacherid = request.nextUrl.searchParams.get("teacherid")
        const res = await Teacher.findById(teacherid)

        // Use findByIdAndUpdate with $pull to remove the object from the array
        const updatedTeacher = await Teacher.findByIdAndUpdate(
            teacherid,
            { $pull: { timeslot: { _id: id } } },
            { new: true } // To return the modified document
        );
        
        console.log(res)
        if (updatedTeacher) {
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