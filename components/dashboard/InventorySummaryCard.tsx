
const InventorySummaryCard = ({ title, number }: InventorySummaryType) => {
    return (
        <div className='flex justify-between items-center gap-4 shadow rounded-lg border transition-all duration-300 border-slate-200 hover:border-blue-400 px-4 py-3 cursor-pointer bg-white'>
            <h2 className='text-slate-500 uppercase text-sm xl:text-base'>{title}</h2>
            <h4 className='text-xl xl:text-2xl'>{number}</h4>
        </div>
    );
};

export default InventorySummaryCard;