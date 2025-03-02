import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { receivingBranchId,transferStockQty,notes } = await req.json();
        const adjustment = { receivingBranchId,transferStockQty,notes };
        return NextResponse.json(adjustment);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed"
        }, { status: 500 });
    }
}