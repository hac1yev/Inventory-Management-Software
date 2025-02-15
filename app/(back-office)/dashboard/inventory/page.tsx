import FixedHeader from "@/components/dashboard/FixedHeader";
import Image from "next/image";
import Link from "next/link";

const Inventory = () => {
    return (
        <div>
            <FixedHeader />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" style={{ padding: '2.5% 5.5%' }}>
                <div className="shadow-xl bg-white flex flex-col items-center justify-center gap-4 p-8">
                    <h2>Items Group</h2>
                    <div>
                        <Image 
                            src={"/images/items-group.png"}
                            alt="items-group"
                            width={100}
                            height={100}
                        />
                    </div>
                    <p className="line-clamp-1">
                        Create multiple variants of the same item using Item Groups
                    </p>
                    <Link href="/" className="py-1.5 px-7 bg-blue-500 text-white rounded-lg hover:opacity-80">
                        New Item Group
                    </Link>
                    <button className="py-1.5 px-7 bg-blue-500 text-white rounded-lg hover:opacity-80">
                        Enable
                    </button>
                </div>
                <div className="shadow-xl bg-white flex flex-col items-center justify-center gap-4 p-8">
                    <h2>Items Group</h2>
                    <div>
                        <Image 
                            src={"/images/items-group.png"}
                            alt="items-group"
                            width={100}
                            height={100}
                        />
                    </div>
                    <p className="line-clamp-1">
                        Create multiple variants of the same item using Item Groups
                    </p>
                    <Link href="/" className="py-1.5 px-7 bg-blue-500 text-white rounded-lg hover:opacity-80">
                        New Item Group
                    </Link>
                    <button className="py-1.5 px-7 bg-blue-500 text-white rounded-lg hover:opacity-80">
                        Enable
                    </button>
                </div>
                <div className="shadow-xl bg-white flex flex-col items-center justify-center gap-4 p-8">
                    <h2>Items Group</h2>
                    <div>
                        <Image 
                            src={"/images/items-group.png"}
                            alt="items-group"
                            width={100}
                            height={100}
                        />
                    </div>
                    <p className="line-clamp-1">
                        Create multiple variants of the same item using Item Groups
                    </p>
                    <Link href="/" className="py-1.5 px-7 bg-blue-500 text-white rounded-lg hover:opacity-80">
                        New Item Group
                    </Link>
                    <button className="py-1.5 px-7 bg-blue-500 text-white rounded-lg hover:opacity-80">
                        Enable
                    </button>
                </div>
                <div className="shadow-xl bg-white flex flex-col items-center justify-center gap-4 p-8">
                    <h2>Items Group</h2>
                    <div>
                        <Image 
                            src={"/images/items-group.png"}
                            alt="items-group"
                            width={100}
                            height={100}
                        />
                    </div>
                    <p className="line-clamp-1">
                        Create multiple variants of the same item using Item Groups
                    </p>
                    <Link href="/" className="py-1.5 px-7 bg-blue-500 text-white rounded-lg hover:opacity-80">
                        New Item Group
                    </Link>
                    <button className="py-1.5 px-7 bg-blue-500 text-white rounded-lg hover:opacity-80">
                        Enable
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;