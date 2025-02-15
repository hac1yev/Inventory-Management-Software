import { CirclePlus } from "lucide-react";
import Link from "next/link";

const CollapsibleLinks = ({ title,href }: CollapseLinkType) => {
    return (
        <Link href={href} className="flex items-center justify-between space-x-1 rounded-md px-2.5 pl-8 py-2.5 hover:bg-slate-800 transition-all duration-300">
            <span className="text-sm">{title}</span>
            <CirclePlus className="w-4 h-4" style={{ marginRight: '1px' }} />
        </Link>
    );
};

export default CollapsibleLinks;