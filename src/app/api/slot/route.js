import { connect } from "@/utils/config/dbConfig"
import Teacher, { Timeslot } from "@/utils/modals/Teacher"
import { NextResponse } from "next/server"

export async function DELETE(request){
    try {
        await connect()
        const id = request.nextUrl.searchParams.get("id")
        const res = await Timeslot.findByIdAndDelete(id)
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