import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Store Cleaning Services | M2 Property Services',
};

const features = [
    {
        icon: '🏬',
        title: 'Floor Polishing & Maintenance',
        description:
            'High-traffic retail floors demand special attention. We strip, polish, and maintain tile, vinyl, hardwood, and concrete flooring to keep your store looking showroom-ready.',
    },
    {
        icon: '🪞',
        title: 'Display & Shelf Cleaning',
        description:
            'Dust-free shelves and sparkling product displays help merchandise stand out. We carefully clean around inventory to present your products in the best possible light.',
    },
    {
        icon: '👔',
        title: 'Fitting Room Sanitization',
        description:
            'Fitting rooms are thoroughly sanitized between shifts, including mirrors, seating, hooks, and flooring, ensuring every customer enjoys a clean and comfortable experience.',
    },
    {
        icon: '🚪',
        title: 'Entrance & Vestibule Cleaning',
        description:
            'First impressions start at the door. We keep entrances, vestibules, door handles, and welcome mats clean, removing dirt and debris that customers track inside.',
    },
    {
        icon: '🪟',
        title: 'Window & Storefront Displays',
        description:
            'Crystal-clear windows and pristine display cases attract foot traffic. We provide streak-free cleaning of all glass surfaces including storefront windows and showcases.',
    },
    {
        icon: '📦',
        title: 'Stockroom Organization',
        description:
            'A clean, organized stockroom improves efficiency and safety. We sweep, mop, and help maintain order in back-of-house areas so your team can find what they need fast.',
    },
];

const process = [
    {
        title: 'Store Walkthrough',
        description:
            'We tour your retail space to understand the layout, traffic patterns, merchandise types, and any unique cleaning challenges specific to your store.',
    },
    {
        title: 'Tailored Service Plan',
        description:
            'We create a detailed cleaning plan that covers every zone of your store, from the storefront to the stockroom, with frequency matched to your foot traffic.',
    },
    {
        title: 'Professional Execution',
        description:
            'Our retail cleaning crews work efficiently during off-hours or low-traffic periods, using commercial-grade equipment and techniques designed for retail environments.',
    },
    {
        title: 'Ongoing Adjustments',
        description:
            'We review results with your management team regularly and adjust our plan for seasonal changes, promotions, and evolving store layouts.',
    },
];

const benefits = [
    {
        title: 'Increased Customer Dwell Time',
        description:
            'A clean, fresh-smelling store encourages customers to browse longer and buy more. Studies show cleanliness directly impacts retail purchasing behavior.',
    },
    {
        title: 'Brand Image Protection',
        description:
            'Your store\'s cleanliness is a direct reflection of your brand. We help you maintain the high standards your customers expect every time they visit.',
    },
    {
        title: 'After-Hours Service',
        description:
            'We schedule cleaning during closed hours or low-traffic windows so there is zero disruption to your sales floor, staff, or customer experience.',
    },
    {
        title: 'Slip & Fall Prevention',
        description:
            'Properly maintained floors reduce liability risks. We use anti-slip treatments and keep aisles clear to protect your customers and employees.',
    },
];

export default function StoreCleaningPage() {
    return (
        <ServicePage
            heroImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
            title="Store Cleaning"
            subtitle="Retail Cleaning Services"
            description="Create a shopping experience your customers love with professional retail cleaning services. We keep your store spotless from the storefront to the stockroom, helping you drive sales and protect your brand."
            features={features}
            process={process}
            benefits={benefits}
        />
    );
}
