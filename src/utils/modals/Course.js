import mongoose from "mongoose"


const permissionSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    }

})

const chapterSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please provide the title"]
    },
    content:{
        type:String,
        required:[true,"Please provide the description"]
    }
   
    
})

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please provide a title"]
    },
    description:{
        type:String,
        required:[true,"Please provide the description of the course"]
    },
    email:{
        type:String,
        required:[true,"Please provide the description of the course"]
    },
    chapters:[chapterSchema],
})

const Course = mongoose.models.course || mongoose.model("course", courseSchema);

export default Course;