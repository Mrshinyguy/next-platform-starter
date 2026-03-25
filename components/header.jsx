'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const navItems = [
    {
        linkText: 'About',
        href: '#about',
        children: [
            { linkText: 'Our Story', href: '/about/our-story' },
            { linkText: 'Join Team', href: '/about/join-team' },
            { linkText: 'Reviews', href: '/about/reviews' },
            { linkText: 'Blog', href: '/about/blog' },
            { linkText: 'FAQ', href: '/about/faq' },
        ],
    },
    {
        linkText: 'Commercial Services',
        href: '/services/commercial',
        children: [
            { linkText: 'Office Cleaning', href: '/services/commercial/office-cleaning' },
            { linkText: 'Store Cleaning', href: '/services/commercial/store-cleaning' },
            { linkText: 'Building Cleaning', href: '/services/commercial/building-cleaning' },
            { linkText: 'Medical Facilities', href: '/services/commercial/medical-facilities' },
            { linkText: 'Car Dealership Cleaning', href: '/services/commercial/car-dealership-cleaning' },
            { linkText: 'Financial Institutions', href: '/services/commercial/financial-institutions' },
            { linkText: 'Gym Cleaning', href: '/services/commercial/gym-cleaning' },
            { linkText: 'Daycare & School', href: '/services/commercial/daycare-school' },
            { linkText: 'Restaurant & Bar', href: '/services/commercial/restaurant-bar' },
        ],
    },
    {
        linkText: 'Residential Services',
        href: '/services/residential',
        children: [
            { linkText: 'Standard House Cleaning', href: '/services/residential/standard-house-cleaning' },
            { linkText: 'Deep House Cleaning', href: '/services/residential/deep-house-cleaning' },
            { linkText: 'Move-in & Move-out', href: '/services/residential/move-in-move-out' },
            { linkText: 'Post Renovation Cleaning', href: '/services/residential/post-renovation' },
            { linkText: 'Airbnb/Rental Cleaning', href: '/services/residential/airbnb-rental' },
            { linkText: 'Deep Carpet Cleaning', href: '/services/residential/deep-carpet-cleaning' },
            { linkText: 'Window & Glass Cleaning', href: '/services/residential/window-glass-cleaning' },
            { linkText: 'Pressure Washing', href: '/services/residential/pressure-washing' },
            { linkText: 'Dryer Vent Cleaning', href: '/services/residential/dryer-vent-cleaning' },
            { linkText: 'Tile & Floor Cleaning', href: '/services/residential/tile-floor-cleaning' },
        ],
    },
    {
        linkText: 'Specialty Services',
        href: '/services/specialty',
        children: [
            { linkText: 'Deep Cleaning', href: '/services/specialty/deep-cleaning' },
            { linkText: 'Carpet Cleaning', href: '/services/specialty/carpet-cleaning' },
            { linkText: 'Pressure Washing', href: '/services/specialty/pressure-washing' },
            { linkText: 'Floor Waxing', href: '/services/specialty/floor-waxing' },
            { linkText: 'Graffiti Removal', href: '/services/specialty/graffiti-removal' },
            { linkText: 'Green Cleaning', href: '/services/specialty/green-cleaning' },
            { linkText: 'Window Cleaning', href: '/services/specialty/window-cleaning' },
            { linkText: 'Tile & Floor Cleaning', href: '/services/specialty/tile-floor-cleaning' },
            { linkText: 'Restroom Cleaning', href: '/services/specialty/restroom-cleaning' },
        ],
    },
    { linkText: 'Why Us', href: '/#why-us' },
    { linkText: 'Contact', href: '/#contact' },
];

function DropdownMenu({ item, isOpen, onToggle, onClose }) {
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                onClose();
            }
        }
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onClose]);

    return (
        <li ref={ref} className="relative">
            <button
                onClick={onToggle}
                className="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-neutral-700 whitespace-nowrap hover:text-gold transition-colors bg-transparent border-none cursor-pointer"
            >
                {item.linkText}
                <svg
                    className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-neutral-200 shadow-xl z-50">
                    <ul className="flex flex-col py-2">
                        {item.children.map((child, i) => (
                            <li key={i}>
                                <Link
                                    href={child.href}
                                    onClick={onClose}
                                    className="block px-5 py-3 text-sm text-neutral-700 no-underline hover:bg-neutral-50 hover:text-gold transition-colors"
                                >
                                    {child.linkText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
}

function MobileAccordion({ item, onNavigate }) {
    const [open, setOpen] = useState(false);

    return (
        <li>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full text-sm font-medium uppercase tracking-wider text-neutral-700 whitespace-nowrap hover:text-gold transition-colors bg-transparent border-none cursor-pointer py-1"
            >
                {item.linkText}
                <svg
                    className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {open && (
                <ul className="flex flex-col pl-4 mt-2 gap-1 border-l-2 border-gold/30">
                    {item.children.map((child, i) => (
                        <li key={i}>
                            <Link
                                href={child.href}
                                onClick={onNavigate}
                                className="block py-2 text-sm text-neutral-600 no-underline hover:text-gold transition-colors"
                            >
                                {child.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-100 transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
            <div className="flex items-center mx-auto px-4 sm:px-8 py-4">
                <Link href="/" className="flex items-center no-underline shrink-0 mr-4">
                    <Image
                        src="/images/m2-logo-light.png"
                        alt="M2 Property Services"
                        width={94}
                        height={75}
                        priority
                        className="h-14 w-auto"
                    />
                </Link>

                {/* Desktop nav */}
                <ul className="hidden lg:flex items-center justify-center flex-1 gap-8">
                    {navItems.map((item, index) =>
                        item.children ? (
                            <DropdownMenu
                                key={index}
                                item={item}
                                isOpen={openDropdown === index}
                                onToggle={() => setOpenDropdown(openDropdown === index ? null : index)}
                                onClose={() => setOpenDropdown(null)}
                            />
                        ) : (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium uppercase tracking-wider text-neutral-700 whitespace-nowrap no-underline hover:text-gold transition-colors"
                                >
                                    {item.linkText}
                                </Link>
                            </li>
                        )
                    )}
                </ul>

                <Link
                    href="/#contact"
                    className="hidden lg:inline-flex btn btn-primary text-xs shrink-0 ml-auto"
                >
                    Get a Quote
                </Link>

                {/* Mobile menu toggle */}
                <button
                    className="lg:hidden flex flex-col gap-1.5 p-2"
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
                <div className="lg:hidden bg-white border-t border-neutral-100 px-6 py-6 max-h-[80vh] overflow-y-auto">
                    <ul className="flex flex-col gap-4">
                        {navItems.map((item, index) =>
                            item.children ? (
                                <MobileAccordion
                                    key={index}
                                    item={item}
                                    onNavigate={() => setMobileOpen(false)}
                                />
                            ) : (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="text-sm font-medium uppercase tracking-wider text-neutral-700 whitespace-nowrap no-underline hover:text-gold transition-colors"
                                    >
                                        {item.linkText}
                                    </Link>
                                </li>
                            )
                        )}
                        <li>
                            <Link
                                href="/#contact"
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
