import Image from 'next/image';
import Link from 'next/link';

function MailIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

function PhoneIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}

function FacebookIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    );
}

function InstagramIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
    );
}

function LinkedInIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function MapleLeafIcon({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className={className}>
            <path d="M383.8 351.7c2.5-2.5 105.2-92.4 105.2-92.4l-17.5-7.5c-10-4.9-7.4-11.5-5-17.4 2.8-7.1 16.5-36 16.5-36l-35.5 9.1c-9 2.5-12.5-3.5-13.7-7.5l-17.5-49.9s-27.5 44.9-34.5 54.9c-4.9 7.1-10.5 1.5-12.5-3.5L356 174l-25 42.5c-3.5 5-8.5 9-16 2.5-7.5-6.5-37.5-37.5-37.5-37.5s-3-3.5-5.5 2l-9 20.5c-2 5-6.5 9-13.5 5L225 191.5l7.5 40.5c1.5 7-3 11-8 13.5l-48 22c4.5 1.5 82 34 82 34s5.5 2.5 0 8L229 339c-3.5 3.5 0 7.5 3.5 9l81 36.5s3.5 1.5 1 6L298 415l59-6.5c5-0.5 7.5 2 8.5 5.5l9.5 35.5 20-48.5c2.5-6 6-8.5 13-6.5l58 17-27-44.5c-3.5-5.5 0-9 5-12.5l39.8-3.3z M256 76l-19 56.5h-0.5L256 76zM256 76l19 56.5L256 76z" />
        </svg>
    );
}

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
                            width={384}
                            height={277}
                            className="h-60 w-auto self-start"
                        />
                        <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                            Professional cleaning and maintenance services delivered with precision, professionalism,
                            and an unwavering commitment to excellence.
                        </p>
                        <p className="text-neutral-400 text-sm leading-relaxed max-w-xs flex items-center gap-2">
                            Proudly Canadian.
                            <MapleLeafIcon className="w-5 h-5 text-red-600 shrink-0" />
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
                        <ul className="flex flex-col gap-4 text-neutral-400 text-sm">
                            <li>
                                <a
                                    href="mailto:info@m2propertyservices.ca"
                                    className="no-underline hover:text-gold transition-colors flex items-center gap-3"
                                >
                                    <MailIcon className="w-5 h-5 text-gold shrink-0" />
                                    info@m2propertyservices.ca
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+14168902807"
                                    className="no-underline hover:text-gold transition-colors flex items-center gap-3"
                                >
                                    <PhoneIcon className="w-5 h-5 text-gold shrink-0" />
                                    (416) 890-2807
                                </a>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className="flex items-center gap-4 mt-6">
                            <a
                                href="https://www.facebook.com/profile.php?id=61588355798472"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="text-gold hover:text-gold/80 transition-colors"
                            >
                                <FacebookIcon className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/m2_property_services/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-gold hover:text-gold/80 transition-colors"
                            >
                                <InstagramIcon className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/m2-property-services/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-gold hover:text-gold/80 transition-colors"
                            >
                                <LinkedInIcon className="w-5 h-5" />
                            </a>
                        </div>
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
