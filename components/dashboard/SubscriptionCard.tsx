import Link from "next/link";

const SubscriptionCard = () => {
    return (
        <div className="flex flex-col px-2 mb-6">
            <div className="bg-slate-950 rounded-lg">
                <div className="p-3">
                    <p className="text-sm border-l-2 border-orange-400 pl-2">
                        {"Your Premium plan's trial expires in"}{" "}
                        <span className="text-orange-400">13 days</span>
                    </p>
                </div>
                <div className="flex items-center justify-center border-t border-slate-500">
                    <button className="flex justify-center w-1/2 p-2 border-r border-slate-500 text-sm font-bold">Change Plan</button>
                    <Link className="flex justify-center w-1/2 p-2 text-sm font-bold" href={"/"}>Upgrade</Link>
                </div>
            </div>
            
        </div>
    );
};

export default SubscriptionCard;