import { connectToDB } from "@/lib/connectToDB";
import { NextRequest, NextResponse } from "next/server";
import sql from 'mssql';

export async function POST(req: NextRequest) {
    try {
        const { title,location,warehouse_type_id,description } = await req.json();        
        const pool = await connectToDB();

        const response = await pool.request()
            .input("warehouse_type_id", sql.Int, parseInt(warehouse_type_id)) 
            .input("title", sql.VarChar, title)
            .input("location", sql.VarChar, location)
            .input("description", sql.VarChar, description)
            .query(`
                insert into Warehouse
                output inserted.id, inserted.warehouse_type_id, inserted.title, inserted.location, inserted.description
                values (@warehouse_type_id, @title, @location, @description)
            `);
        
        const warehouse = response.recordset[0];
            
        return NextResponse.json({ message: 'Success', warehouse });
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed"
        }, { status: 500 });
    }
}