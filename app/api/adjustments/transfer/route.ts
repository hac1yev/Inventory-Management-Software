import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { givingWarehouseId,transferStockQty,notes,warehouseId } = await req.json();
        const adjustment = { warehouseId,givingWarehouseId,transferStockQty,notes };
        return NextResponse.json(adjustment);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed"
        }, { status: 500 });
    }
}