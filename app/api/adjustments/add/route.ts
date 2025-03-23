import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { addStockQty,notes,referenceNumber,warehouseId } = await req.json();
        const adjustment = { addStockQty,warehouseId,notes,referenceNumber };
        return NextResponse.json(adjustment);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed"
        }, { status: 500 });
    }
}