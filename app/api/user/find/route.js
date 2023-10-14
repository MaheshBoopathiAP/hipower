import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import User from "../../../../models/Person";

export async function POST(req, res){
    const number = await req.json();
    // console.log(fname, lname, mobile);
    await connectMongoDB();
    const check = await User.findOne({mobile:number});
    if(check){
        return Response.json({
            user:check,
            status:201
        });
    }
    // await User.insertMany({fname,lname,mobile});
    return new NextResponse({message:'Can insert!'}, {status:200});
}

// export async function GET(req, res){
//     await connectMongoDB();
//     const check = await User.find({})
//     console.log(check);
//     return Response.json(check);
// }