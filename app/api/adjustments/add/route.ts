import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { addStockQty,recievingWarehouseId,notes } = await req.json();
        const adjustment = { addStockQty,recievingWarehouseId,notes };
        return NextResponse.json(adjustment);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed"
        }, { status: 500 });
    }
}