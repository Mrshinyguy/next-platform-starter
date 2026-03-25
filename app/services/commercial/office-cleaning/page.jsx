import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Office Cleaning Services',
    description: 'Professional office cleaning services in Toronto and the GTA. Desk sanitization, floor care, restroom maintenance, and break room cleaning for your workplace.',
    alternates: { canonical: '/services/commercial/office-cleaning' },
};

const features = [
    {
        icon: '🖥️',
        title: 'Desk & Workstation Sanitization',
        description:
            'Thorough cleaning and disinfection of desks, keyboards, monitors, phones, and shared workstations to reduce germ spread and keep your team healthy and productive.',
    },
    {
        icon: '☕',
        title: 'Break Room & Kitchen Cleaning',
        description:
            'Complete cleaning of countertops, appliances, sinks, tables, and seating areas. We restock supplies and ensure your break room is always fresh and inviting.',
    },
    {
        icon: '🚻',
        title: 'Restroom Maintenance',
        description:
            'Deep sanitization of all restroom fixtures, floors, mirrors, and partitions. We restock soap, paper products, and ensure a spotless, odor-free environment.',
    },
    {
        icon: '✨',
        title: 'Floor Care & Maintenance',
        description:
            'Professional vacuuming, mopping, buffing, and carpet care for all flooring types. We maintain pristine floors that reflect your company\'s professional image.',
    },
    {
        icon: '🔲',
        title: 'Interior Window Cleaning',
        description:
            'Streak-free cleaning of interior glass surfaces, windows, partitions, and glass doors to maximize natural light and maintain a bright, welcoming workspace.',
    },
    {
        icon: '🗑️',
        title: 'Trash & Recycling Removal',
        description:
            'Daily collection and disposal of waste and recyclables from all workstations, common areas, and kitchens. We replace liners and keep bins sanitized.',
    },
];

const process = [
    {
        title: 'Initial Consultation',
        description:
            'We visit your office to assess the space, understand your cleaning needs, and identify any special requirements or high-traffic areas that need extra attention.',
    },
    {
        title: 'Custom Cleaning Plan',
        description:
            'Our team develops a tailored cleaning schedule and checklist based on your office layout, employee count, and specific priorities to ensure comprehensive coverage.',
    },
    {
        title: 'Scheduled Service',
        description:
            'Our trained professionals arrive on schedule, whether daily, weekly, or bi-weekly, performing every task on your custom plan with minimal disruption to your workflow.',
    },
    {
        title: 'Quality Assurance',
        description:
            'Regular inspections and client check-ins ensure our service meets your standards. We adjust our approach based on your feedback to continuously improve results.',
    },
];

const benefits = [
    {
        title: 'Healthier Work Environment',
        description:
            'Regular professional cleaning reduces airborne allergens, bacteria, and viruses, leading to fewer sick days and a healthier, more productive workforce.',
    },
    {
        title: 'Flexible Scheduling',
        description:
            'We clean around your business hours, offering early morning, evening, and weekend service so your team is never disrupted during the workday.',
    },
    {
        title: 'Professional First Impressions',
        description:
            'A spotless office speaks volumes to clients, partners, and prospective employees. We help you maintain the polished image your business deserves.',
    },
    {
        title: 'Trained & Insured Staff',
        description:
            'Every member of our cleaning team is fully trained, background-checked, and insured, giving you complete peace of mind when we\'re in your space.',
    },
    {
        title: 'Eco-Friendly Products',
        description:
            'We use environmentally responsible cleaning products that are tough on dirt but safe for your employees, contributing to a greener workplace.',
    },
];

export default function OfficeCleaningPage() {
    return (
        <ServicePage
            heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            title="Office Cleaning"
            subtitle="Commercial Cleaning Services"
            description="Keep your office spotless, healthy, and professional with our comprehensive office cleaning services. From daily maintenance to deep cleaning, we create workspaces your team is proud to work in."
            features={features}
            process={process}
            benefits={benefits}
        />
    );
}
