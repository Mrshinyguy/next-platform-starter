import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Medical Facility Cleaning Services',
    description: 'Medical-grade cleaning services for healthcare facilities in Toronto and the GTA. Hospital-grade disinfection, biohazard handling, and exam room deep cleaning.',
    alternates: { canonical: '/services/commercial/medical-facilities' },
};

const features = [
    {
        icon: '🔬',
        title: 'Medical-Grade Disinfection',
        description:
            'We use hospital-grade disinfectants and EPA-registered products to eliminate pathogens on all surfaces, following strict protocols that meet healthcare infection control standards.',
    },
    {
        icon: '⚠️',
        title: 'Biohazard Handling',
        description:
            'Our staff is trained in proper biohazard handling and disposal procedures, including bloodborne pathogen protocols, sharps container management, and regulated medical waste.',
    },
    {
        icon: '🏥',
        title: 'Waiting Room Sanitization',
        description:
            'High-touch surfaces like chairs, magazines, door handles, and check-in counters are continuously sanitized to protect patients and reduce cross-contamination risks.',
    },
    {
        icon: '🩺',
        title: 'Exam Room Deep Clean',
        description:
            'Examination tables, medical equipment surfaces, cabinets, and flooring are meticulously cleaned and disinfected between patients and during overnight deep cleaning cycles.',
    },
    {
        icon: '📋',
        title: 'Health Regulation Compliance',
        description:
            'Our cleaning protocols are designed to meet or exceed OSHA, HIPAA, and provincial health authority standards, with documented procedures and audit-ready reporting.',
    },
    {
        icon: '🗑️',
        title: 'Medical Waste Disposal',
        description:
            'Proper segregation and disposal of general waste, recyclables, and regulated medical waste in accordance with healthcare facility waste management guidelines.',
    },
];

const process = [
    {
        title: 'Facility Evaluation',
        description:
            'Our healthcare cleaning specialists assess your facility, identify infection control priorities, and review your existing protocols to develop an integrated cleaning strategy.',
    },
    {
        title: 'Compliance-Driven Plan',
        description:
            'We create a cleaning plan that aligns with healthcare regulations and your facility\'s specific infection prevention goals, with documented standard operating procedures.',
    },
    {
        title: 'Certified Team Deployment',
        description:
            'Our healthcare cleaning teams are specially trained in infection control, WHMIS, and biohazard handling, ensuring every task is performed to medical-grade standards.',
    },
    {
        title: 'Audit & Documentation',
        description:
            'We maintain detailed cleaning logs, provide regular compliance reports, and participate in facility audits to ensure continuous adherence to healthcare standards.',
    },
];

const benefits = [
    {
        title: 'Infection Prevention',
        description:
            'Our rigorous disinfection protocols significantly reduce healthcare-associated infections, protecting patients, staff, and visitors from preventable illness.',
    },
    {
        title: 'Regulatory Peace of Mind',
        description:
            'Stay inspection-ready at all times with documented cleaning procedures, audit trails, and compliance reporting that satisfies health authority requirements.',
    },
    {
        title: 'Specialized Training',
        description:
            'Every team member assigned to your facility receives ongoing training in healthcare cleaning standards, infection control practices, and proper PPE usage.',
    },
    {
        title: 'Patient Confidence',
        description:
            'A visibly clean facility builds trust with patients and their families, improving satisfaction scores and strengthening your reputation in the community.',
    },
    {
        title: 'Minimal Disruption',
        description:
            'We coordinate cleaning schedules around patient appointments, procedures, and staff shifts to deliver thorough service without impacting your operations.',
    },
];

export default function MedicalFacilitiesPage() {
    return (
        <ServicePage
            heroImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80"
            title="Medical Facility Cleaning"
            subtitle="Healthcare Cleaning Services"
            description="Protect your patients and staff with medical-grade cleaning services designed for healthcare environments. Our certified teams follow strict infection control protocols to keep your facility safe, compliant, and spotless."
            features={features}
            process={process}
            benefits={benefits}
        />
    );
}
