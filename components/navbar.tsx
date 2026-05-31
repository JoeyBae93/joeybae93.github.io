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
        <header className='mt-3 w-full flex flex-col items-centerbg-transparent z-50'>
            <nav className="w-3/4 container mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <span className="text-2xl font-bold">JoeyB</span>
                </Link>
                {/* Dynamic Navigation Links */}
                <div className="flex items-center gap-6">
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