import mongoose from "mongoose";

// Teacher time slots
const timeslotSchema = new mongoose.Schema({
    teachername:{
        type:String,
    },
    studentname:{
        type:String
    },
    timestart:{
        type:String,
    },
    timeend:{
        type:String
    },
    date:{
        type:String
    },
    studentgmail:{
        type:String,
        reqired:[true,"please provide the studentgmail"]
    }
})
 
const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your name"]

    },
    email:{
        type:String,
        required:[true,"please enter your email"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"please enter your Password"]
    },
    phonenumber:{
        type:Number,
        required:[true,"please enter your number"]
    },
    address:{
        type:String,
        required:[true,"please enter your address"]
    },
    qualification:{
        type:String,
        required:[true,"please enter your qualifications"]
    },
    role:{
        type:String,
        required:[true,"please enter your role"]
    },
    timeslot:[timeslotSchema]
});

const Teacher = mongoose.models.teacher || mongoose.model("teacher", teacherSchema);

const Timeslot = mongoose.models.timeslot || mongoose.model("timeslot", timeslotSchema);

export default Teacher;

export {Timeslot}