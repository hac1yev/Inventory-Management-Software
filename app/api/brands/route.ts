import { connectToDB } from "@/lib/connectToDB";
import { NextRequest, NextResponse } from "next/server";
import sql from 'mssql';

export async function POST(req: NextRequest) {
    try {
        const { title } = await req.json();
        const pool = await connectToDB();

        const response = await pool.request()
            .input("title", sql.VarChar, title)
            .query(`
                insert into Brand 
                output inserted.id, inserted.title
                values(@title)
            `);
        
        const brand = response.recordset[0];
        await pool.close();

        return NextResponse.json({ message: 'Success', brand });
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed"
        }, { status: 500 });
    }
}