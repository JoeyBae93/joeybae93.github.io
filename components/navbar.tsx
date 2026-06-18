'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
    label: string;
    href: string;
}

const links: NavLink[] = [
    { label: 'Skills', href: '#skills'}, 
    { label: 'Projects', href: '#projects'}, 
    { label: 'Experiences', href: '#experiences'}
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 w-full flex flex-col items-center z-50">
            <div className="absolute inset-0 bg-zinc-950 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] backdrop-blur-md -z-10 h-[120%]" />
            <nav className="w-11/12 md:w-3/4 container mx-auto flex py-6 items-center justify-between">
                <Link href="/" className="flex items-center">
                    <span className="text-2xl font-bold">JoeyB</span>
                </Link>
                {/* Dynamic Navigation Links */}
                <div className="flex items-center gap-4 sm:gap-6">
                    {links.map((link) => {
                        // Check if the current page path matches the link destination
                        const isActive = pathname === link.href;

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-md font-medium transition-colors hover:text-slate-100 ${
                                    isActive ? 'text-indigo-400 font-semibold' : 'text-slate-400'
                                }`}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </header>
    )
}