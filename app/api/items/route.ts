import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        // { 
        //     title,categoryId,sku,barcode,qty,unitId,brandId,suplierId,
        //     buyingPrice,sellingPrice,reOrderPoint,warehouseId,imageUrl,
        //     weight,dimensions,taxRate,description,notes 
        // }
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed"
        }, { status: 500 });
    }
}