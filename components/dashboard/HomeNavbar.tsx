"use client";

import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeNavbar = () => {
    const pathname = usePathname();    

    const navLinks = [
        {
            title: 'Dashboard',
            href: '/dashboard/home/overview'
        },
        {
            title: 'Getting Started',
            href: '/dashboard/home/getting-started'
        },
        {
            title: 'Recent Updates',
            href: '/dashboard/home/updates'
        },
        {
            title: 'Announcements',
            href: '/dashboard/home/announcements'
        }
    ];

    return (
        <div className="sticky z-10 flex flex-col justify-between bg-green-300 px-5 pt-5 header-bg border-b border-slate-200" style={{ top: '-30px' }}>
            <div className="flex space-x-3 mb-2">
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg">
                    <Building2 />
                </div>
                <div className="flex flex-col">
                    <p className="font-semibold text-slate-700">Hello, JB WEBDEVELOPER</p>
                    <span className="text-sm">Garat</span>
                </div>
            </div>
            <nav className="flex space-x-4">
                {navLinks.map((link) => (
                    <Link href={link.href} className={pathname === link.href ? "py-3 border-b-3 border-blue-600 text-slate-700 font-semibold" : "py-3 text-slate-700 font-semibold"} key={link.title}>
                        {link.title}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default HomeNavbar;