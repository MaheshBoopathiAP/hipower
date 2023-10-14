import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import User from "../../../../models/Person";

export async function POST(req, res){
    const id = await req.json();
    await connectMongoDB();
    const check = await User.findOne({_id:id});
    if(check){
        return Response.json({
            user:check,
            status:201
        });
    }
    return new NextResponse({message:'error!'}, {status:400});
}