import { CollapseLinkType } from "@/types";
import { X } from "lucide-react";
import Link from "next/link";

const InventoryFormHeader = ({ title, href }: CollapseLinkType) => {
    return (
        <div className="flex items-center justify-between bg-white py-3 px-8">
            <h2 className="text-xl font-semibold">{title}</h2>
            <Link href={href} className="hover:bg-slate-50 p-1.5 rounded-md transition-all duration-300">
                <X />
            </Link>
        </div>
    );
};

export default InventoryFormHeader;