import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Daycare & School Cleaning Services',
    description: 'Child-safe cleaning services for daycares and schools in Toronto and the GTA. Non-toxic products, classroom sanitization, and playground cleanup.',
    alternates: { canonical: '/services/commercial/daycare-school' },
};

const features = [
    {
        icon: '🧴',
        title: 'Child-Safe Cleaning Products',
        description:
            'We exclusively use non-toxic, hypoallergenic, and child-safe cleaning products that effectively eliminate germs without exposing children to harsh chemicals or fumes.',
    },
    {
        icon: '📚',
        title: 'Classroom Sanitization',
        description:
            'Desks, chairs, cubbies, shared supplies, door handles, and learning materials are thoroughly sanitized daily to minimize the spread of illness among students and staff.',
    },
    {
        icon: '🎪',
        title: 'Playground Cleanup',
        description:
            'Outdoor play equipment, sandbox areas, benches, and surrounding surfaces are cleaned and inspected regularly to ensure a safe, debris-free play environment.',
    },
    {
        icon: '🍽️',
        title: 'Cafeteria Cleaning',
        description:
            'Lunch areas, serving counters, tables, chairs, and kitchen prep surfaces are deep cleaned and sanitized after each meal service to maintain food safety standards.',
    },
    {
        icon: '🚻',
        title: 'Restroom Deep Clean',
        description:
            'Child-height fixtures, toilets, sinks, changing stations, and floors receive multiple daily cleanings with child-safe disinfectants to ensure a hygienic environment.',
    },
    {
        icon: '🌿',
        title: 'Allergen Control',
        description:
            'HEPA-filtered vacuuming, dust removal, and air quality management reduce common allergens like dust mites, pollen, and pet dander to protect sensitive children.',
    },
];

const process = [
    {
        title: 'Facility Review',
        description:
            'We evaluate your school or daycare, noting age groups served, room layouts, outdoor areas, and any specific health or allergy concerns that inform our cleaning approach.',
    },
    {
        title: 'Child-Safe Protocol Design',
        description:
            'A cleaning plan is built using only approved child-safe products and methods, with special attention to nap areas, play zones, and food preparation surfaces.',
    },
    {
        title: 'Scheduled Service Delivery',
        description:
            'Our trained teams clean after school hours or during designated times, ensuring classrooms and common areas are fresh, sanitized, and ready for the next day.',
    },
    {
        title: 'Parent & Staff Feedback',
        description:
            'We maintain open communication with administrators and welcome parent feedback to continuously improve our service and address any concerns promptly.',
    },
];

const benefits = [
    {
        title: 'Healthier Learning Environments',
        description:
            'Reduced germ exposure means fewer sick days for students and teachers. Our thorough sanitization helps keep your school community healthy throughout the year.',
    },
    {
        title: '100% Child-Safe Guarantee',
        description:
            'Every product and method we use is certified safe for children of all ages, including infants and toddlers. We never compromise on the safety of young learners.',
    },
    {
        title: 'Licensing & Inspection Ready',
        description:
            'Our cleaning standards help your facility meet and exceed provincial licensing requirements and health inspection criteria, keeping you in good standing.',
    },
    {
        title: 'Trusted, Vetted Staff',
        description:
            'All team members working in childcare and school environments undergo enhanced background checks and receive specialized training for educational facilities.',
    },
    {
        title: 'Parent Confidence',
        description:
            'Parents notice when a daycare or school is impeccably clean. Our services help you build the trust and reputation that drives enrollment and referrals.',
    },
];

export default function DaycareSchoolPage() {
    return (
        <ServicePage
            heroImage="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80"
            title="Daycare & School Cleaning"
            subtitle="Educational Facility Services"
            description="Create a safe, healthy learning environment with cleaning services designed specifically for daycares and schools. Our child-safe products and specialized protocols protect students, staff, and the families who trust you with their children."
            features={features}
            process={process}
            benefits={benefits}
        />
    );
}
