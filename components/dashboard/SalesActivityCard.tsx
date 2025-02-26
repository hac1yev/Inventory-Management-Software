import { SalesActivityType } from "@/types";
import { CircleCheck } from "lucide-react";
import Link from "next/link";

const SalesActivityCard = ({ href, number, color, unit, title }: SalesActivityType) => {
    return (
        <Link href={href} className="w-full sm:w-[48%] xl:w-1/4 flex flex-col items-center gap-4 shadow rounded-lg border transition-all duration-300 border-slate-200 hover:border-blue-400 py-6 px-1 cursor-pointer bg-white">
            <h4 className={`${color} font-semibold text-2xl xl:text-3xl`}>{number}</h4>
            <p className='text-slate-500 xl:text-sm'>{unit}</p>
            <div className="flex -center text-slate-800 space-x-1">
                <CircleCheck className='text-slate-800 w-4 h-4' />
                <span className="text-sm xl:text-base">{title}</span>
            </div> 
        </Link>
    );
};

export default SalesActivityCard;