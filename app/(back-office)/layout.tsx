import Header from "@/components/dashboard/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-slate-900 text-slate-50">Sidebar</div>
            <main className="w-100 bg-slate-100 min-h-screen">
                <Header />
                {children}
            </main>
        </div>
    );
};

export default Layout;