import { connectToDB } from "@/lib/connectToDB";
import { NextResponse } from "next/server";

export async function GET() {
    const pool = await connectToDB();

    const response = await pool.request().query(`
        select * from WarehouseTypes
    `);    

    return NextResponse.json({ message: 'Success', data: response.recordset });
}