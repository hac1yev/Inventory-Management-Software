import { Bell, ChevronDown, History, LayoutGrid, Plus, Settings, Users } from "lucide-react";
import SearchInput from "./SearchInput";
import Image from "next/image";

const Header = () => {
    return (
        <div className="sticky top-0 z-20 bg-slate-100 h-12 flex items-center justify-between px-8 border-b border-slate-200 shadow-sm">
            <div className="flex gap-3">
                <button>
                    <History className="w-6 h-6" />
                </button>
                <SearchInput />
            </div>
            <div className="flex items-center">
                <div className="pr-2 border-r border-gray-300">
                    <button className="p-1 bg-blue-600 rounded-lg hover:opacity-80">
                        <Plus className="text-slate-50 w-4 h-4" />
                    </button>
                </div>

                <div className="flex gap-1 border-r border-gray-300 px-2">
                    <button className="p-2 rounded-lg hover:bg-slate-200">
                        <Users className="text-slate-900 w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-slate-200">
                        <Bell className="text-slate-900 w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-slate-200">
                        <Settings className="text-slate-900 w-4 h-4" />
                    </button>
                </div>

                <div className="flex gap-3 px-2">
                    <button className="flex items-center gap-1">
                        <span>Garat</span>
                        <ChevronDown className="w-4 h-4" />
                    </button>
                    <button>
                        <Image
                            src="https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-male-5.png"
                            alt="user image"
                            width={"96"}
                            height={"96"}
                            className="w-8 h-8 rounded-full border border-slate-800"
                        />
                    </button>
                    <button>
                        <LayoutGrid className="w-6 h-6 text-slate-900" />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Header;