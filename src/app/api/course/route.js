import { connect } from "@/utils/config/dbConfig"
import Course from "@/utils/modals/Course"
import { NextResponse } from "next/server"

 connect()
//  To send the course to the database.
export async function POST(request) {
   
    try { 
        const {title,description,email,chapters} = await request.json()
        const newCourse = new Course({
            title,description,email,chapters
        })
        const SavedCourse = await newCourse.save()
        

        return NextResponse.json({
            message:"post created successfully",
            success:true,
            SavedCourse
        })
    } catch (error) {
        console.log("Error:",error)
        return NextResponse.json({error:error.message},{status:500})
    }
}

// To get the course from the database

export async function GET() {
    try {
        await connect()
        const posts = await Course.find()
        return NextResponse.json({
            posts,
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
        const res = await Course.findByIdAndDelete(id)
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