import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { name,phone,email,address,contactPhone,supplierCode,taxID,paymentTerms,notes } = await req.json();        
        const supplier = { name,phone,email,address,contactPhone,supplierCode,taxID,paymentTerms,notes };
        console.log(supplier);
        return NextResponse.json({ message: 'Success' });
    } catch (error) {
        return NextResponse.json({
            error,
            message: "Failed"
        }, { status: 500 });
    }
}