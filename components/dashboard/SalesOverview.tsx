import { CircleCheck } from 'lucide-react';
import React from 'react'

const SalesOverview = () => {
    return (
        <div className='grid grid-cols-12 bg-blue-100 border-b border-slate-300 p-8'>
            <div className="col-span-8">
                <h2 className='mb-6 text-2xl font-semibold'>Sales Activity</h2>
                <div className="grid grid-cols-4">
                    <div className="flex flex-col items-center gap-4 shadow rounded-lg border transition-all duration-300 border-slate-200 hover:border-blue-400 p-4 bg-white">
                        <h4 className='font-semibold text-4xl'>10</h4>
                        <small className='text-slate-500'>Qty</small>
                        <div className="flex items-center text-slate-500 space-x-1">
                            <CircleCheck className='text-slate-600 w-4 h-4' />
                            <span>To be Packed</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-span-4'>
                <h2 className='mb-6 text-xl'>Inventory Summary</h2>

            </div>
        </div>
    );
};

export default SalesOverview;