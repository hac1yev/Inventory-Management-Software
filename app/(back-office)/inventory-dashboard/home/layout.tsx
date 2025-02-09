import HomeNavbar from '@/components/dashboard/HomeNavbar';
import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <HomeNavbar />
            {children}
        </div>
    );
};

export default Layout;