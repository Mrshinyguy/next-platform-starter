import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Restaurant & Bar Cleaning Services',
    description: 'Professional restaurant and bar cleaning services in Toronto and the GTA. Kitchen deep cleans, hood and exhaust degreasing, and dining area sanitization.',
    alternates: { canonical: '/services/commercial/restaurant-bar' },
};

const features = [
    {
        icon: '🍳',
        title: 'Kitchen Deep Clean',
        description:
            'Commercial kitchen surfaces, prep stations, cooking equipment, walk-in coolers, and storage areas are degreased and sanitized to food-safe standards after every service.',
    },
    {
        icon: '🌀',
        title: 'Hood & Exhaust Cleaning',
        description:
            'Range hoods, exhaust fans, ductwork, and filtration systems are thoroughly degreased and cleaned to reduce fire hazards and maintain proper kitchen ventilation.',
    },
    {
        icon: '🍽️',
        title: 'Dining Area Sanitization',
        description:
            'Tables, chairs, booths, menus, condiment stations, and high-touch surfaces throughout the dining room are cleaned and sanitized to create a welcoming guest experience.',
    },
    {
        icon: '🍸',
        title: 'Bar Area Cleaning',
        description:
            'Bar tops, back bars, bottle displays, tap systems, ice wells, and glassware stations are thoroughly cleaned and sanitized, maintaining the polished look guests expect.',
    },
    {
        icon: '🔥',
        title: 'Grease Trap Maintenance',
        description:
            'Regular grease trap cleaning and maintenance prevents backups, foul odors, and code violations, keeping your kitchen plumbing flowing smoothly and efficiently.',
    },
    {
        icon: '📋',
        title: 'Health Code Compliance',
        description:
            'Our cleaning procedures align with local health department standards and food safety regulations, helping you pass inspections with confidence every time.',
    },
];

const process = [
    {
        title: 'Kitchen & FOH Assessment',
        description:
            'We evaluate your entire establishment, from the kitchen line and prep areas to the dining room, bar, and restrooms, identifying critical cleaning priorities.',
    },
    {
        title: 'Food-Safe Cleaning Plan',
        description:
            'A comprehensive plan is built around your service schedule, covering post-shift cleaning, weekly deep cleans, and monthly maintenance tasks using food-safe products.',
    },
    {
        title: 'Late-Night Crew Deployment',
        description:
            'Our restaurant cleaning crews arrive after your last service and work through the night, ensuring your kitchen and dining areas are spotless before the next day\'s prep.',
    },
    {
        title: 'Inspection Readiness Reviews',
        description:
            'We conduct periodic reviews against health inspection checklists, identifying and addressing any areas that could result in citations before inspectors arrive.',
    },
];

const benefits = [
    {
        title: 'Health Inspection Confidence',
        description:
            'Our cleaning protocols are built around health department requirements. We help you maintain the standards that lead to top inspection scores consistently.',
    },
    {
        title: 'Fire Risk Reduction',
        description:
            'Regular hood, exhaust, and grease trap cleaning significantly reduces the risk of kitchen fires, protecting your staff, guests, property, and business continuity.',
    },
    {
        title: 'Guest Experience Enhancement',
        description:
            'Diners notice cleanliness from the moment they walk in. Sparkling dining rooms, clean restrooms, and fresh-smelling spaces drive positive reviews and repeat visits.',
    },
    {
        title: 'Food Safety Expertise',
        description:
            'Our teams are trained in commercial kitchen sanitation practices, cross-contamination prevention, and food-safe chemical handling for restaurant environments.',
    },
    {
        title: 'Post-Service Turnaround',
        description:
            'We work within the tight window between closing and opening, delivering a full deep clean so your team can focus on food prep rather than scrubbing floors.',
    },
];

export default function RestaurantBarPage() {
    return (
        <ServicePage
            heroImage="/images/restaurant-bar-hero.jpg"
            title="Restaurant & Bar Cleaning"
            subtitle="Food Service Cleaning Solutions"
            description="Keep your restaurant or bar spotless, safe, and inspection-ready with professional cleaning services built for the food service industry. From kitchen deep cleans and hood maintenance to dining room sanitization, we handle it all."
            features={features}
            process={process}
            benefits={benefits}
        />
    );
}
