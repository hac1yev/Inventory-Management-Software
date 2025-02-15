import DashboardBanner from "@/components/dashboard/DashboardBanner";
import SalesOverview from "@/components/dashboard/SalesOverview";

const Dashboard = () => {
    return (
        <div style={{ height: '1000vh' }}>
            <DashboardBanner />
            <SalesOverview />
        </div>
    );
};

export default Dashboard;