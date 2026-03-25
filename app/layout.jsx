import '../styles/globals.css';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import { Header } from '../components/header';

const Footer = dynamic(() => import('../components/footer').then(mod => mod.Footer));

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const siteUrl = 'https://m2propertyservices.ca';

export const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        template: '%s | M2 Property Services',
        default: 'M2 Property Services | Professional Cleaning & Maintenance',
    },
    description:
        'M2 Property Services delivers professional cleaning, maintenance, and renovation services across the Greater Toronto Area with unmatched professionalism and attention to detail.',
    openGraph: {
        type: 'website',
        locale: 'en_CA',
        siteName: 'M2 Property Services',
        title: 'M2 Property Services | Professional Cleaning & Maintenance',
        description:
            'Professional cleaning, maintenance, and renovation services across the Greater Toronto Area.',
        images: [{ url: '/images/m2-logo-dark.png', width: 384, height: 277, alt: 'M2 Property Services' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'M2 Property Services | Professional Cleaning & Maintenance',
        description:
            'Professional cleaning, maintenance, and renovation services across the Greater Toronto Area.',
        images: ['/images/m2-logo-dark.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    alternates: {
        canonical: '/',
    },
};

export default function RootLayout({ children }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'M2 Property Services',
        description:
            'Professional cleaning, maintenance, and renovation services across the Greater Toronto Area.',
        url: siteUrl,
        telephone: '+1-416-890-2807',
        email: 'info@m2propertyservices.ca',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Toronto',
            addressRegion: 'ON',
            addressCountry: 'CA',
        },
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: { '@type': 'GeoCoordinates', latitude: 43.6532, longitude: -79.3832 },
            geoRadius: '50000',
        },
        sameAs: [
            'https://www.facebook.com/profile.php?id=61588355798472',
            'https://www.instagram.com/m2_property_services/',
            'https://www.linkedin.com/company/m2-property-services/',
        ],
        image: `${siteUrl}/images/m2-logo-dark.png`,
    };

    return (
        <html lang="en" className={inter.variable}>
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="antialiased">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
