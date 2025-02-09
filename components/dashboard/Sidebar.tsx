import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Home, ShoppingBag, ShoppingBasket, ShoppingCart } from "lucide-react";
import Link from "next/link";
import SubscriptionCard from "./SubscriptionCard";

const Sidebar = () => {
    return (
        <div className="w-80 min-h-screen bg-slate-900 text-slate-50 flex flex-col justify-between">
            <div className="flex flex-col">
                <Link href={"/"} className="flex items-center space-x-2 bg-slate-950 py-3 px-2">
                    <ShoppingCart />
                    <span className="font-bold text-xl">Investory</span>
                </Link>

                <nav className="flex flex-col gap-2 py-6 px-3">
                    <Link href={"/"} className="flex items-center space-x-2 bg-blue-500 text-slate-50 p-2 rounded-md">
                        <Home className="w-4 h-4" />
                        <span>Home</span>
                    </Link>
                    <button className="flex items-center space-x-2 p-2">
                        <BaggageClaim className="w-4 h-4" />
                        <span>Inventory</span>
                    </button>
                    <button className="flex items-center space-x-2 p-2">
                        <ShoppingBasket className="w-4 h-4" />
                        <span>Sales</span>
                    </button>
                    <button className="flex items-center space-x-2 p-2">
                        <ShoppingBag className="w-4 h-4" />
                        <span>Purchases</span>
                    </button>
                    <Link href={"/"} className="flex items-center space-x-2 p-2">
                        <Cable className="w-4 h-4" />
                        <span>Integrations</span>
                    </Link>
                    <Link href={"/"} className="flex items-center space-x-2 p-2">
                        <BarChart4 className="w-4 h-4" />
                        <span>Reports</span>
                    </Link>
                    <Link href={"/"} className="flex items-center space-x-2 p-2">
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