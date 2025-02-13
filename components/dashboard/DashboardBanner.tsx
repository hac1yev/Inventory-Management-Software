"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const DashboardBanner = () => {
    const [hidden,setHidden] = useState(false);

    return (
        <div className={hidden ? "hidden" : "flex justify-start items-center py-6 px-8 bg-white gap-8 relative"}>
            <Image
                src={"/images/credit-card.png"}
                alt="banner-icon" 
                width={"100"}
                height={"100"}
                className="w-16"
            />
            <div className="mr-14 w-1/2">
                <h2 className="font-bold text-2xl mb-2">Start accepting online payments</h2>
                <p className="text-slate-700">{`Businesses are moving towards online payments as they're easy, secure and fast. Try them for your business today.`}</p>
            </div>
            <button className="py-1.5 px-7 bg-blue-500 text-white rounded-lg hover:opacity-80">Enable</button>
            <X 
                className="absolute top-5 right-10 text-slate-500 hover:cursor-pointer" 
                onClick={() => setHidden(true)}
            />   
        </div>
    );
};

export default DashboardBanner;