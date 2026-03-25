import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Building Cleaning Services',
    description: 'Professional building cleaning services in Toronto and the GTA. Lobby maintenance, elevator and stairwell cleaning, and parking garage upkeep for commercial properties.',
    alternates: { canonical: '/services/commercial/building-cleaning' },
};

const features = [
    {
        icon: '🏢',
        title: 'Lobby & Reception Maintenance',
        description:
            'Your lobby sets the tone for every visitor. We keep reception areas, seating, flooring, and front desks immaculate with daily cleaning and periodic deep cleans.',
    },
    {
        icon: '🔼',
        title: 'Elevator Cleaning',
        description:
            'Elevators see hundreds of touches daily. We sanitize buttons, handrails, walls, floors, and tracks, removing fingerprints and grime to keep every ride fresh.',
    },
    {
        icon: '🚶',
        title: 'Stairwell Cleaning',
        description:
            'Stairwells collect dust, debris, and scuff marks quickly. We sweep, mop, and scrub stairs, landings, handrails, and walls to maintain safe, clean passageways.',
    },
    {
        icon: '🅿️',
        title: 'Parking Garage Cleanup',
        description:
            'From oil stains to litter, parking areas need regular attention. We sweep, pressure wash, and maintain parking garages and lots to keep them safe and presentable.',
    },
    {
        icon: '🏛️',
        title: 'Common Area Care',
        description:
            'Hallways, mail rooms, laundry facilities, and shared lounges are cleaned and maintained on schedule, ensuring every tenant enjoys consistently clean shared spaces.',
    },
    {
        icon: '🧱',
        title: 'Exterior Maintenance',
        description:
            'Building entrances, sidewalks, loading docks, and exterior surfaces are kept clean and free of debris, enhancing curb appeal and tenant satisfaction year-round.',
    },
];

const process = [
    {
        title: 'Property Assessment',
        description:
            'We conduct a comprehensive walkthrough of your entire building, documenting square footage, common areas, tenant requirements, and high-priority zones.',
    },
    {
        title: 'Service Blueprint',
        description:
            'A detailed cleaning blueprint is developed covering every floor, common area, and exterior zone, with specific task lists, frequencies, and staffing requirements.',
    },
    {
        title: 'Team Deployment',
        description:
            'A dedicated crew is assigned to your building with consistent schedules, ensuring familiarity with the property and reliable, high-quality service every visit.',
    },
    {
        title: 'Performance Reviews',
        description:
            'Monthly walkthroughs with property managers ensure our work meets expectations. We provide detailed reports and adapt our plan to address any emerging needs.',
    },
];

const benefits = [
    {
        title: 'Tenant Retention',
        description:
            'Clean, well-maintained buildings keep tenants happy and reduce vacancy rates. Our services help property managers deliver the environment tenants expect.',
    },
    {
        title: 'Scalable Service',
        description:
            'Whether your building is 10,000 or 500,000 square feet, we scale our teams and resources to match your property\'s exact needs without compromising quality.',
    },
    {
        title: 'Regulatory Compliance',
        description:
            'We understand building codes and safety standards, ensuring common areas, exits, and fire routes are always clear, clean, and compliant with local regulations.',
    },
    {
        title: 'Dedicated Account Manager',
        description:
            'Every building client is assigned a dedicated account manager who serves as your single point of contact for scheduling, feedback, and service adjustments.',
    },
    {
        title: '24/7 Availability',
        description:
            'Buildings never sleep, and neither do we. Our teams are available around the clock to handle routine cleaning, emergency spills, and after-hours requests.',
    },
];

export default function BuildingCleaningPage() {
    return (
        <ServicePage
            heroImage="/images/building-cleaning-hero.jpg"
            title="Building Cleaning"
            subtitle="Commercial Building Services"
            description="Comprehensive cleaning solutions for commercial buildings of any size. From lobbies and elevators to parking garages and exteriors, we keep your entire property in pristine condition for tenants and visitors alike."
            features={features}
            process={process}
            benefits={benefits}
        />
    );
}
