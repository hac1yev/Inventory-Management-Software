"use client";

import { CollapseLinkType } from "@/types";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const CollapsibleLinks = ({ title, href }: CollapseLinkType) => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <Link 
            onMouseEnter={() => {
                if(title !== 'All Inventory Items') {
                    setOpen(true)
                }
            }} 
            onMouseLeave={() => setOpen(false)} 
            href={href} 
            className={pathname === href 
                ? "flex items-center justify-between space-x-1 rounded-md px-2.5 pl-8 py-2.5 mt-1 transition-all duration-300 bg-blue-500 text-slate-50"
                : "flex items-center justify-between space-x-1 rounded-md px-2.5 pl-8 py-2.5 mt-1 hover:bg-slate-800 transition-all duration-300 bg-slate-900"}
        >
            <span className="text-sm">{title}</span>
            <CirclePlus 
                className={`w-4 h-4 transform transition-all duration-300 ${
                    open || pathname.startsWith(`/dashboard/inventory/${title.toLocaleLowerCase()}`) ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-75 translate-x-1"
                }`}
            />
        </Link>
    );
};

export default CollapsibleLinks;