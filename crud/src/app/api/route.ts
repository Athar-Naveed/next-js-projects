import {NextRequest,NextResponse} from "next/server";
import { cookies } from "next/dist/client/components/headers";
import { db } from "@vercel/postgres";
import {v4 as uuidv4} from "uuid";


export async function DELETE(request:NextRequest){
    const req = await request.json();
    const id=req.user_id;
    const client = await db.connect();
    try{
        if(id){
            const resp = await client.sql`DELETE FROM users WHERE id = ${id};`;
            return NextResponse.json({resp:resp},{status:200})
        }
        else{
        throw new Error("Error Deletion Record!")    
        }
    }
    catch(error){
        return  NextResponse.json({"message":(error as {message:string}).message},{status:404})
    }
}

export async function POST(request: NextRequest){
    const req = await request.json();
    const client = await db.connect();
    if(req.user_id && req.token == 0){
        const data = await client.sql`SELECT * FROM users WHERE id=${req.user_id} limit 1`
        try {
            if(data.rows.length == 1){
                return NextResponse.json({data},{status:200});
            }
            else{
                throw Error('No data found!');
            }
        } catch (error) {
            return NextResponse.json({"message":(error as {message:string}).message});
        }
    }
    else if(req.token == 1){
        try {
            if (req.name) {
                await client.sql`UPDATE users SET user_name=${req.name} WHERE id=${req.user_id};`;
            const data = await client.sql`SELECT * FROM users`;
                return NextResponse.json({data},{status:201})
            }
            else{
                throw new Error("Task field is required")
            }
        } catch (error) {
            return NextResponse.json({message:(error as {message:string}).message})
        }
    }
    else{
    
    const cookie = cookies();
    const id = uuidv4();
    // let user_id = cookie.get('id')?.value;
    
    cookie.set('id',id);
    
    await client.sql`CREATE TABLE IF NOT EXISTS users(id VARCHAR(255),user_name VARCHAR(20),message TEXT)`
    
    try {
        if (req.name) {
            await client.sql`INSERT INTO users
            VALUES (
                ${id},${req.name},${req.message}
                );`
        const data = await client.sql`SELECT * FROM users`;
            return NextResponse.json({data},{status:200})
        }
        else{
            throw new Error("Task field is required")
        }
    } catch (error) {
        return NextResponse.json({message:(error as {message:string}).message})
    }
}
}
