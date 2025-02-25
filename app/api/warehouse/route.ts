import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { title,location,type,description } = await req.json();
        const warehouse = { title,location,type,description };
        return NextResponse.json(warehouse);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed"
        }, { status: 500 });
    }
}