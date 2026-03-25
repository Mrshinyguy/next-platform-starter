import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Green Cleaning Services',
    description: 'Eco-friendly green cleaning services in Toronto. Plant-based products and sustainable practices for healthier spaces.',
    alternates: { canonical: '/services/specialty/green-cleaning' },
};

export default function GreenCleaningPage() {
    return (
        <ServicePage
            heroImage="/images/green-cleaning-hero.jpg"
            subtitle="Specialty Cleaning"
            title="Green Cleaning"
            description="Our eco-friendly cleaning program delivers spotless results without compromising environmental responsibility. Using plant-based products, HEPA filtration, water conservation techniques, and sustainable practices, we help your facility meet green building standards while protecting occupant health."
            features={[
                {
                    icon: '🌿',
                    title: 'Plant-Based Products',
                    description: 'All cleaning agents are derived from renewable plant sources, free of harsh chemicals, volatile organic compounds, and synthetic fragrances that pollute indoor air.',
                },
                {
                    icon: '💧',
                    title: 'Reduced Water Usage',
                    description: 'Microfiber technology and controlled-dispensing systems cut water consumption by up to 70% compared to traditional cleaning methods without sacrificing effectiveness.',
                },
                {
                    icon: '🌀',
                    title: 'HEPA Filtration Systems',
                    description: 'All vacuums and air scrubbers use true HEPA filters that capture 99.97% of particles down to 0.3 microns, improving indoor air quality with every service.',
                },
                {
                    icon: '♻️',
                    title: 'Recycled & Sustainable Materials',
                    description: 'From recycled paper products to reusable microfiber cloths, our supply chain prioritizes materials that minimize landfill impact and resource depletion.',
                },
                {
                    icon: '🌍',
                    title: 'Carbon-Neutral Practices',
                    description: 'Route optimization, electric equipment, and carbon offset programs work together to minimize the environmental footprint of every cleaning visit.',
                },
                {
                    icon: '📋',
                    title: 'Green Certifications',
                    description: 'Our program supports LEED, Green Seal, and WELL Building certifications, providing documentation and compliance reporting for your sustainability goals.',
                },
            ]}
            process={[
                {
                    title: 'Sustainability Audit',
                    description: 'We assess your facility, current products, and environmental goals to design a green cleaning program that meets both cleanliness standards and sustainability targets.',
                },
                {
                    title: 'Product & Equipment Transition',
                    description: 'We introduce certified green products and high-efficiency equipment tailored to your facility, replacing conventional chemicals with effective eco-friendly alternatives.',
                },
                {
                    title: 'Trained Green Team Deployment',
                    description: 'Our staff receives specialized training in green cleaning protocols, proper dilution ratios, microfiber usage, and waste reduction techniques.',
                },
                {
                    title: 'Reporting & Continuous Improvement',
                    description: 'Monthly sustainability reports track water usage, chemical reduction, and waste diversion metrics, with ongoing adjustments to improve environmental performance.',
                },
            ]}
            benefits={[
                {
                    title: 'Healthier Work Environment',
                    description: 'Eliminating harsh chemicals and VOCs reduces respiratory irritation, headaches, and sick days, creating a more productive workplace for your team.',
                },
                {
                    title: 'LEED & Certification Support',
                    description: 'Our documented green cleaning program contributes credits toward LEED, WELL, and other green building certifications that enhance property marketability.',
                },
                {
                    title: 'Corporate Responsibility',
                    description: 'Demonstrating environmental commitment strengthens your brand reputation with eco-conscious clients, tenants, and employees who value sustainability.',
                },
                {
                    title: 'Regulatory Compliance',
                    description: 'Stay ahead of tightening environmental regulations with cleaning practices that already meet or exceed current and anticipated sustainability standards.',
                },
                {
                    title: 'No Compromise on Clean',
                    description: 'Modern green products deliver cleaning performance equal to conventional chemicals — your facility stays spotless while your environmental impact shrinks.',
                },
            ]}
        />
    );
}
