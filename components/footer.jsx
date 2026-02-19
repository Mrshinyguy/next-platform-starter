import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 py-16 sm:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Brand */}
                    <div className="flex flex-col gap-6">
                        <Image
                            src="/images/m2-logo-dark.png"
                            alt="M2 Property Services"
                            width={80}
                            height={80}
                            className="h-16 w-auto"
                        />
                        <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                            Premium property services delivered with precision, professionalism, and an unwavering
                            commitment to excellence.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gold text-sm font-sans font-semibold uppercase tracking-widest mb-6">
                            Quick Links
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {['Services', 'About', 'Why Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-neutral-400 text-sm no-underline hover:text-gold transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-gold text-sm font-sans font-semibold uppercase tracking-widest mb-6">
                            Get in Touch
                        </h4>
                        <ul className="flex flex-col gap-3 text-neutral-400 text-sm">
                            <li>
                                <a href="mailto:info@m2propertyservices.com" className="no-underline hover:text-gold transition-colors">
                                    info@m2propertyservices.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-neutral-500 text-xs">
                        &copy; {new Date().getFullYear()} M2 Property Services. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
