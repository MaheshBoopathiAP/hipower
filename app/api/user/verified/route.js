import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import User from "../../../../models/Person";

export async function POST(req,res){
    const {fname, lname, mobile} = await req.json();
    await connectMongoDB();
    
    await User.insertMany({fname,lname,mobile});
    return new NextResponse({message:'User created!'}, {status:200});
}