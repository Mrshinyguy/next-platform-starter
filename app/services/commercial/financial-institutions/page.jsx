import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Financial Institution Cleaning Services | M2 Property Services',
};

const features = [
    {
        icon: '🔒',
        title: 'Secure Area Protocols',
        description:
            'Our staff undergoes enhanced background checks and follows strict security protocols when working in sensitive areas, ensuring your institution\'s security standards are upheld.',
    },
    {
        icon: '🏦',
        title: 'Lobby & Teller Area Cleaning',
        description:
            'Customer-facing areas including teller counters, rope lines, writing stations, and flooring are cleaned and sanitized to present a professional, welcoming environment.',
    },
    {
        icon: '🏧',
        title: 'ATM Sanitization',
        description:
            'ATM screens, keypads, card slots, and surrounding surfaces are disinfected regularly to reduce germ transmission and maintain customer confidence in your machines.',
    },
    {
        icon: '📊',
        title: 'Conference & Meeting Room Care',
        description:
            'Private meeting rooms, boardrooms, and consultation areas are cleaned to exacting standards, including AV equipment surfaces, tables, chairs, and glass partitions.',
    },
    {
        icon: '🔐',
        title: 'Vault Area Cleaning',
        description:
            'Vault lobbies and safe deposit areas are carefully cleaned following your institution\'s access protocols, with supervised entry and documented cleaning activities.',
    },
    {
        icon: '🌙',
        title: 'After-Hours Service',
        description:
            'All cleaning is performed outside business hours to maintain security and avoid disruption. We coordinate with your security team for alarm codes and access procedures.',
    },
];

const process = [
    {
        title: 'Security Assessment',
        description:
            'We meet with your facilities and security teams to understand access protocols, restricted areas, alarm systems, and any institution-specific requirements.',
    },
    {
        title: 'Secure Service Plan',
        description:
            'A cleaning plan is developed that integrates with your security procedures, detailing approved access zones, escort requirements, and chain-of-custody protocols.',
    },
    {
        title: 'Vetted Team Assignment',
        description:
            'Background-checked and bonded cleaning professionals are assigned exclusively to your branches, providing consistency and building trust with your staff.',
    },
    {
        title: 'Compliance Reporting',
        description:
            'Detailed service logs document every visit, including arrival and departure times, areas cleaned, and any issues noted, providing a full audit trail for your records.',
    },
];

const benefits = [
    {
        title: 'Enhanced Security Standards',
        description:
            'Our staff undergoes thorough background screening and security training. We work within your institution\'s protocols to maintain the highest level of trust.',
    },
    {
        title: 'Client-Facing Excellence',
        description:
            'A pristine banking environment builds customer trust and confidence. Every surface your clients see and touch is kept spotless and professionally maintained.',
    },
    {
        title: 'Bonded & Insured',
        description:
            'Full bonding and comprehensive insurance coverage provide your institution with financial protection and peace of mind for every cleaning visit.',
    },
    {
        title: 'Consistent Branch Standards',
        description:
            'Multi-branch institutions benefit from standardized cleaning protocols across all locations, ensuring every branch meets the same high level of cleanliness.',
    },
    {
        title: 'Confidentiality Guaranteed',
        description:
            'Our team is trained to handle sensitive environments with discretion. We never disturb documents, screens, or client materials during our cleaning process.',
    },
];

export default function FinancialInstitutionsPage() {
    return (
        <ServicePage
            heroImage="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&q=80"
            title="Financial Institution Cleaning"
            subtitle="Banking & Financial Services"
            description="Trusted cleaning services for banks, credit unions, and financial offices. Our security-cleared teams deliver meticulous cleaning that upholds the professional standards and confidentiality your institution demands."
            features={features}
            process={process}
            benefits={benefits}
        />
    );
}
