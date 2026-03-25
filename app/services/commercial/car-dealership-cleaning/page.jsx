import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Car Dealership Cleaning Services',
    description: 'Professional car dealership cleaning services in Toronto and the GTA. Showroom floor polishing, glass storefront cleaning, and service bay degreasing.',
    alternates: { canonical: '/services/commercial/car-dealership-cleaning' },
};

const features = [
    {
        icon: '✨',
        title: 'Showroom Floor Polishing',
        description:
            'High-gloss showroom floors make vehicles shine. We strip, seal, and polish concrete, tile, and epoxy flooring to deliver a mirror-like finish that highlights every car on display.',
    },
    {
        icon: '🪟',
        title: 'Glass Storefront Cleaning',
        description:
            'Floor-to-ceiling glass panels and storefront windows are cleaned inside and out to a streak-free finish, maximizing visibility and drawing customers in from the street.',
    },
    {
        icon: '🔧',
        title: 'Service Bay Degreasing',
        description:
            'Oil, grease, and fluid spills are removed from service bay floors, walls, and equipment using industrial-strength degreasers, keeping your shop safe and professional.',
    },
    {
        icon: '🛋️',
        title: 'Office & Waiting Area Cleaning',
        description:
            'Customer lounges, sales offices, finance rooms, and reception areas are cleaned and sanitized daily, including furniture, coffee stations, and entertainment areas.',
    },
    {
        icon: '🅿️',
        title: 'Lot Cleanup & Maintenance',
        description:
            'Vehicle lots are swept clear of debris, litter, and seasonal buildup. We maintain curbing, landscaped areas, and signage to keep your lot looking its best.',
    },
    {
        icon: '🚿',
        title: 'Detail Bay Maintenance',
        description:
            'Detail bays are kept clean and organized with regular floor scrubbing, drain maintenance, wall cleaning, and equipment wipe-downs to support your detailing team.',
    },
];

const process = [
    {
        title: 'Dealership Walkthrough',
        description:
            'We tour your entire dealership, from the showroom and service bays to the lot and customer areas, to understand the unique cleaning demands of your operation.',
    },
    {
        title: 'Custom Program Design',
        description:
            'A cleaning program is built around your dealership\'s hours, traffic patterns, and priorities, covering daily maintenance, weekly deep cleans, and seasonal projects.',
    },
    {
        title: 'Expert Service Delivery',
        description:
            'Our crews use automotive-industry-appropriate products and techniques, working during off-hours to ensure your showroom is pristine before doors open each morning.',
    },
    {
        title: 'Continuous Improvement',
        description:
            'Regular check-ins with your management team and quality inspections ensure we adapt to promotional events, seasonal traffic changes, and evolving needs.',
    },
];

const benefits = [
    {
        title: 'Showroom-Ready Every Day',
        description:
            'Customers expect a premium experience at a dealership. Our cleaning ensures your showroom, lot, and service areas always match the quality of the vehicles you sell.',
    },
    {
        title: 'Safety & Compliance',
        description:
            'Service bays and detail areas are kept free of slip hazards, chemical residue, and clutter, reducing workplace injuries and meeting safety regulations.',
    },
    {
        title: 'Automotive Industry Experience',
        description:
            'We understand the unique needs of car dealerships, from protecting vehicle finishes during cleaning to managing the heavy grease and chemical demands of service departments.',
    },
    {
        title: 'Flexible Overnight Crews',
        description:
            'Our teams work overnight so your showroom floors gleam, your glass sparkles, and your waiting areas are fresh before the first customer walks in.',
    },
];

export default function CarDealershipCleaningPage() {
    return (
        <ServicePage
            heroImage="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920&q=80"
            title="Car Dealership Cleaning"
            subtitle="Automotive Facility Services"
            description="Make every vehicle shine with professional dealership cleaning services. From polished showroom floors and sparkling glass to degreased service bays, we help your dealership deliver the premium experience customers expect."
            features={features}
            process={process}
            benefits={benefits}
        />
    );
}
