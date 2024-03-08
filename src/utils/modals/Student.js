import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
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
    region:{
        type:String,
        required:[true,"please enter the region where you belong from."]
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
    dateofbirth:{
        type:String,
        required:[true,"please enter you date of birth"]
    },
    role:{
        type:String,
        required:[true,"please enter your role in this lms"]
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Student = mongoose.models.student || mongoose.model("student", studentSchema);

export default Student;