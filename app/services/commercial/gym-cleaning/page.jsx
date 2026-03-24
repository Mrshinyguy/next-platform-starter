import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Gym Cleaning Services | M2 Property Services',
};

const features = [
    {
        icon: '🏋️',
        title: 'Equipment Sanitization',
        description:
            'Every piece of gym equipment, from free weights and benches to cardio machines and cable stations, is wiped down and disinfected to prevent the spread of bacteria and viruses.',
    },
    {
        icon: '🚿',
        title: 'Locker Room Deep Clean',
        description:
            'Lockers, benches, changing areas, and personal storage spaces are thoroughly cleaned and disinfected daily, creating a hygienic environment members can trust.',
    },
    {
        icon: '♨️',
        title: 'Shower & Sauna Maintenance',
        description:
            'Showers, steam rooms, and saunas receive specialized cleaning to combat mold, mildew, and bacteria buildup, with attention to grout, drains, and ventilation systems.',
    },
    {
        icon: '🧹',
        title: 'Floor Mat Cleaning',
        description:
            'Rubber mats, turf areas, and studio flooring are cleaned and sanitized using specialized products that remove sweat, oils, and odors without damaging the material.',
    },
    {
        icon: '🪞',
        title: 'Mirror & Glass Cleaning',
        description:
            'Wall-to-wall mirrors and glass partitions are cleaned to a streak-free finish throughout the facility, keeping workout areas bright and visually open.',
    },
    {
        icon: '🌬️',
        title: 'Odor Control',
        description:
            'Professional-grade deodorizing treatments neutralize sweat and moisture odors at the source, keeping your gym smelling fresh and welcoming around the clock.',
    },
];

const process = [
    {
        title: 'Facility Tour',
        description:
            'We walk through your gym to assess equipment types, high-sweat zones, wet areas, and traffic patterns to understand your facility\'s unique cleaning challenges.',
    },
    {
        title: 'Fitness-Focused Plan',
        description:
            'A custom plan is created covering equipment sanitization schedules, wet area deep clean cycles, floor care routines, and odor management strategies.',
    },
    {
        title: 'Daily & Deep Cleaning',
        description:
            'Our teams perform daily wipe-downs and maintenance cleaning, supplemented by scheduled deep cleaning sessions for locker rooms, showers, and high-use areas.',
    },
    {
        title: 'Member Satisfaction Checks',
        description:
            'We monitor cleanliness feedback and adjust our approach to maintain the standards your members expect, helping you retain memberships and build loyalty.',
    },
];

const benefits = [
    {
        title: 'Member Retention',
        description:
            'Cleanliness consistently ranks as a top factor in gym membership decisions. A spotless facility keeps existing members happy and attracts new ones.',
    },
    {
        title: 'Infection Prevention',
        description:
            'Gyms are high-risk environments for staph, MRSA, and fungal infections. Our hospital-grade disinfection protocols protect your members and reduce liability.',
    },
    {
        title: 'Extended Equipment Life',
        description:
            'Regular cleaning removes corrosive sweat and grime from equipment surfaces, extending the lifespan of your expensive fitness machines and accessories.',
    },
    {
        title: 'Flexible Hours',
        description:
            'We work around your gym\'s peak hours, cleaning during slow periods or overnight to ensure the facility is always presentable when members arrive.',
    },
];

export default function GymCleaningPage() {
    return (
        <ServicePage
            heroImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            title="Gym Cleaning"
            subtitle="Fitness Facility Services"
            description="Keep your gym fresh, sanitary, and member-ready with professional fitness facility cleaning. From equipment sanitization and locker room deep cleans to odor control, we help you maintain the clean environment your members deserve."
            features={features}
            process={process}
            benefits={benefits}
        />
    );
}
