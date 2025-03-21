import { connectToDB } from "@/lib/connectToDB";
import { NextRequest, NextResponse } from "next/server";
import sql from 'mssql';

export async function POST(req: NextRequest) {
    try {
        const { title,description } = await req.json();
        const pool = await connectToDB();

        const response = await pool.request()
            .input("title", sql.VarChar, title)
            .input("description", sql.VarChar, description)
            .query(`
                insert into Categories
                output inserted.id, inserted.title, inserted.description
                values(@title, @description)    
            `);
        
        const category = response.recordset[0];
        await pool.close();

        return NextResponse.json({ message: 'Success', category });
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed"
        }, { status: 500 });
    }
}