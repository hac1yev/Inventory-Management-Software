"use client";

import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const CollapsibleLinks = ({ title, href }: CollapseLinkType) => {
    const [open, setOpen] = useState(false);

    return (
        <Link 
            onMouseEnter={() => setOpen(true)} 
            onMouseLeave={() => setOpen(false)} 
            href={href} 
            className="flex items-center justify-between space-x-1 rounded-md px-2.5 pl-8 py-2.5 hover:bg-slate-800 transition-all duration-300"
        >
            <span className="text-sm">{title}</span>
            <CirclePlus 
                className={`w-4 h-4 transform transition-all duration-300 ${
                    open ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-75 translate-x-1"
                }`}
            />
        </Link>
    );
};

export default CollapsibleLinks;