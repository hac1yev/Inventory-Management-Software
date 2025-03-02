import React from 'react'
import SalesActivityCard from './SalesActivityCard';
import InventorySummaryCard from './InventorySummaryCard';

const SalesOverview = () => {
    const salesActivity = [
        {
            title: 'To Be Packed',
            number: 10,
            unit: "Qty",
            href: '/',
            color: 'text-blue-600'
        },
        {
            title: 'To Be Shipped',
            number: 0,
            unit: "Pkgs",
            href: '/',
            color: 'text-red-600'
        },
        {
            title: 'To Be Delivered',
            number: 0,
            unit: "Pkgs",
            href: '/',
            color: 'text-green-600'
        },
        {
            title: 'To Be Invoiced',
            number: 10,
            unit: "Qty",
            href: '/',
            color: 'text-orange-600'
        },
    ];

    const inventorySummary = [
        {
            title: 'Quantity in Hand',
            number: 10
        }, 
        {
            title: 'Quantity to be recieved',
            number: 0
        }
    ];

    return (
        <div className='grid grid-cols-1 lg:grid-cols-12 bg-blue-100 border-b border-slate-300 p-4 xl:p-8 gap-6'>
    
            {/* Sales Activity */}
            <div className="lg:col-span-8 col-span-12"> 
                <h2 className='mb-6 text-xl xl:text-2xl font-semibold'>Sales Activity</h2>
                <div className="flex flex-wrap max-sm:justify-center xl:flex-nowrap items-center gap-4">
                    {salesActivity.map((item, i) => (
                        <SalesActivityCard key={i} {...item} />
                    ))}
                </div>
            </div>

            {/* Inventory Summary */}
            <div className='lg:col-span-4 col-span-12'>
                <h2 className='mb-6 text-xl xl:text-2xl font-semibold'>Inventory Summary</h2>
                <div className='flex flex-col justify-between gap-4'>
                    {inventorySummary.map((item, i) => (
                        <InventorySummaryCard key={i} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SalesOverview;