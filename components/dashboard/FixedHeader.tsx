import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";

const FixedHeader = () => {
    return (
        <div className="flex justify-between items-center bg-white py-5 px-4">
            <button className="text-2xl font-semibold">All Items</button>
            <div className="flex">
                <div className="flex gap-4">
                    <Link href="/" className="flex items-center space-x-1 p-1 px-3 bg-blue-600 rounded-lg hover:opacity-80">
                        <Plus className="text-slate-50 w-4 h-4" />
                        <span className="text-slate-50" style={{ marginBottom: '2px' }}>New</span>
                    </Link>
                    <div className="flex rounded-md overflow-hidden">
                        <button className="bg-gray-300 p-2 border-r border-gray-400">
                            <List className="w-4 h-4" />
                        </button>
                        <button className="bg-gray-100 p-2">
                            <LayoutGrid className="w-4 h-4" />
                        </button>
                    </div>
                    <button className="bg-gray-100 p-2 rounded-md">
                        <MoreHorizontal className="w-4 h-4" />
                    </button>
                    <button className="bg-orange-400 text-white p-2 rounded-md">
                        <HelpCircle className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FixedHeader;