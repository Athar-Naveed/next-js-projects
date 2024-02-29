import { NextRequest, NextResponse } from "next/server";
import {  db } from "@vercel/postgres";

export async function GET(request: NextRequest) {
  const client = await db.connect();
  const users = await client.sql`select * from users`;
  if(client){
    return NextResponse.json({ users }, { status: 200 });
  }
  else{
    return NextResponse.json({error:'Error Connecting to Database'},{status:500});
  }
  
}