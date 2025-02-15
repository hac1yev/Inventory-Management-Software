"use client";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { BaggageClaim, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import CollapsibleLinks from "./CollapsibleLinks";

const SidebarDropdownLink = ({ title,items }: DropdownLinkType) => {
    const [arrow,setArrow] = useState(false);

    return (
        <Collapsible>
            <CollapsibleTrigger onClick={() => setArrow((prev) => !prev)} className="flex items-center justify-between w-full space-x-2 p-2">
                <div className="flex items-center space-x-2">
                    <BaggageClaim className="w-4 h-4" />
                    <span>{title}</span>
                </div>
                {!arrow && <ChevronDown className="w-5 h-5" />}
                {arrow && <ChevronUp className="w-5 h-5" />}
            </CollapsibleTrigger>
            <CollapsibleContent className="my-1">
                {items.map((item, i) => (
                    <CollapsibleLinks key={i} {...item} />
                ))}
            </CollapsibleContent>
        </Collapsible>
    );
};

export default SidebarDropdownLink;