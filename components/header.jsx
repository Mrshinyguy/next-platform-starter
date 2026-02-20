'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
    { linkText: 'Services', href: '#services' },
    { linkText: 'About', href: '#about' },
    { linkText: 'Why Us', href: '#why-us' },
    { linkText: 'Contact', href: '#contact' },
];

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-6 sm:px-12 py-4">
                <Link href="/" className="flex items-center no-underline">
                    <Image
                        src="/images/m2-logo-light.png"
                        alt="M2 Property Services"
                        width={94}
                        height={75}
                        className="h-16 w-auto"
                    />
                </Link>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="text-sm font-medium uppercase tracking-widest text-neutral-700 no-underline hover:text-gold transition-colors"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    href="#contact"
                    className="hidden md:inline-flex btn btn-primary text-xs"
                >
                    Get a Quote
                </Link>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-6 h-0.5 bg-black transition-transform ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-black transition-opacity ${mobileOpen ? 'opacity-0' : ''}`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-black transition-transform ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
                    />
                </button>
            </div>

            {/* Mobile nav */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-6">
                    <ul className="flex flex-col gap-4">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-sm font-medium uppercase tracking-widest text-neutral-700 no-underline hover:text-gold transition-colors"
                                >
                                    {item.linkText}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                href="#contact"
                                onClick={() => setMobileOpen(false)}
                                className="btn btn-primary text-xs w-full"
                            >
                                Get a Quote
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
