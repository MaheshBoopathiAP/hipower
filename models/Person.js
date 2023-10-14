import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
    mobile:String,
    role:String
});

const Person = mongoose.model('Person', personSchema); 
export default Person;