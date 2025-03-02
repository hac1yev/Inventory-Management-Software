"use client"

import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Home, ShoppingBag, ShoppingCart, WeightIcon } from "lucide-react";
import Link from "next/link";
import SubscriptionCard from "./SubscriptionCard";
import SidebarDropdownLink from "./SidebarDropdownLink";
import { inventoryLinks, salesLinks } from "@/dummy-data/data";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();
    
    return (
        <div className="sidebar sticky top-0 z-30 w-80 h-screen bg-slate-900 text-slate-50 flex flex-col justify-between overflow-y-scroll scrollbar-hide">
            <div className="flex flex-col">
                <Link href={"/"} className="sticky top-0 flex items-center space-x-2 bg-slate-950 py-3 px-2">
                    <ShoppingCart />
                    <span className="font-bold text-xl">Investory</span>
                </Link>

                <nav className="flex flex-col gap-2 py-6 px-3">
                    <Link href={"/dashboard/home/overview"} className={pathname.startsWith("/dashboard/home") ? "flex items-center space-x-2 p-2 rounded-md bg-blue-500 text-slate-50" : "flex items-center space-x-2 p-2 rounded-md"}>
                        <Home className="w-4 h-4" />
                        <span>Home</span>
                    </Link>
                    <SidebarDropdownLink items={inventoryLinks} title={"Inventory"} icon={BaggageClaim} />
                    <SidebarDropdownLink items={salesLinks} title={"Sales"} icon={WeightIcon} />
                    <button className="flex items-center space-x-2 p-2">
                        <ShoppingBag className="w-4 h-4" />
                        <span>Purchases</span>
                    </button>
                    <Link href={"/"} className={pathname === '/dashboard/integrations' ? "flex items-center space-x-2 p-2 rounded-md bg-blue-500 text-slate-50" : "flex items-center space-x-2 p-2 rounded-md"}>
                        <Cable className="w-4 h-4" />
                        <span>Integrations</span>
                    </Link>
                    <Link href={"/"} className={pathname === '/dashboard/reports' ? "flex items-center space-x-2 p-2 rounded-md bg-blue-500 text-slate-50" : "flex items-center space-x-2 p-2 rounded-md"}>
                        <BarChart4 className="w-4 h-4" />
                        <span>Reports</span>
                    </Link>
                    <Link href={"/"} className={pathname === '/dashboard/documents' ? "flex items-center space-x-2 p-2 rounded-md bg-blue-500 text-slate-50" : "flex items-center space-x-2 p-2 rounded-md"}>
                        <Files className="w-4 h-4" />
                        <span>Documents</span>
                    </Link>
                </nav>
            </div>

            <div>
                <SubscriptionCard />
                <div className="flex justify-center items-center bg-slate-950">
                    <div className="flex space-x-2 items-center py-3 px-2">
                        <ChevronLeft />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;