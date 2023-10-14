import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import User from "../../../models/Person";

export async function POST(req, res){
    const {fname, lname, mobile} = await req.json();
    console.log(fname, lname, mobile);
    await connectMongoDB();
    const check = await User.findOne({mobile:mobile});
    if(check){
        return new NextResponse({message:'Mobile number already exists!'},{status:201})
    }
    // await User.insertMany({fname,lname,mobile});
    return new NextResponse({message:'Can insert!'}, {status:200});
}

