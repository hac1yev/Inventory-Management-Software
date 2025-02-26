"use client";

import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CollapsibleLinks from "./CollapsibleLinks";
import { DropdownLinkType } from "@/types";
import { usePathname } from "next/navigation";

const SidebarDropdownLink = ({ title, items, icon: Icon }: DropdownLinkType) => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(pathname.includes(`/${title.toLocaleLowerCase()}`));
    }, [pathname,title]);

    return (
        <div className="w-full">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>

                <CollapsibleTrigger className={isOpen ? "flex items-center justify-between w-full space-x-2 p-2 text-blue-500" : "flex items-center justify-between w-full space-x-2 p-2"}>
                        <div className="flex items-center space-x-2">
                            <Icon className="w-4 h-4" />
                            <span>{title}</span>
                        </div>
                        <motion.div 
                            animate={{ rotate: isOpen ? 90 : 0 }} 
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.div>
                </CollapsibleTrigger>

                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                >
                    <div className="my-1">
                        {items.map((item, i) => (
                            <CollapsibleLinks key={i} {...item} />
                        ))}
                    </div>
                </motion.div>
            </Collapsible>
        </div>
    );
};

export default SidebarDropdownLink;