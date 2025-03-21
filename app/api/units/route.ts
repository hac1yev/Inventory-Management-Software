import { connectToDB } from "@/lib/connectToDB";
import { NextRequest, NextResponse } from "next/server";
import sql from 'mssql';

export async function POST(req: NextRequest) {
    try {
        const { title,abbreviation } = await req.json();
        const pool = await connectToDB();

        const response = await pool.request()
            .input("title", sql.VarChar, title)
            .input("abbreviation", sql.VarChar, abbreviation)
            .query(`
                insert into Unit
                output inserted.id, inserted.title, inserted.abbreviation
                values(@title, @abbreviation)
            `);
        
        const unit = response.recordset[0];
        await pool.close();    

        return NextResponse.json(unit);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed"
        }, { status: 500 });
    }
}