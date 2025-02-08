import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-gray-300">
            {children}
        </div>
    );
};

export default Layout;