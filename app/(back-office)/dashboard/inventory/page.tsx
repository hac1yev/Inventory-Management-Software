import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import { inventoryOptionData } from "@/dummy-data/data";

const Inventory = () => {
    return (
        <div>
            <FixedHeader />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" style={{ padding: '2.5% 5.5%' }}>
                {inventoryOptionData.map((card,i) => (
                    <OptionCard key={i} optionData={card} />
                ))}
            </div>
        </div>
    );
};

export default Inventory;