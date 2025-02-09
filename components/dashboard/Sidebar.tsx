import { ChevronLeft, Home, ShoppingCart } from "lucide-react";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="w-64 min-h-screen bg-slate-900 text-slate-50 flex flex-col justify-between">
            <div className="flex flex-col">
                <div className="flex items-center space-x-2 bg-slate-950 py-3 px-2">
                    <ShoppingCart />
                    <span className="font-bold text-xl">Investory</span>
                </div>

                <nav className="flex flex-col gap-4 p-3">
                    <Link href={"/"} className="flex items-center space-x-2">
                        <Home className="w-4 h-4" />
                        <span>Home</span>
                    </Link>
                    <Link href={"/"} className="flex items-center space-x-2">
                        <Home className="w-4 h-4" />
                        <span>Inventory</span>
                    </Link>
                    <Link href={"/"} className="flex items-center space-x-2">
                        <Home className="w-4 h-4" />
                        <span>Home</span>
                    </Link>
                </nav>
            </div>

            <div className="flex- flex-col">
                <div className="bg-slate-950 flex space-x-2 items-center py-3 px-2">
                    <ChevronLeft />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;