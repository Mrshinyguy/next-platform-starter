import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Deep Cleaning Services',
    description: 'Professional deep cleaning services in Toronto. Intensive cleaning for residential and commercial spaces by M2 Property Services.',
    alternates: { canonical: '/services/specialty/deep-cleaning' },
};

export default function DeepCleaningPage() {
    return (
        <ServicePage
            heroImage="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=1920&q=80"
            subtitle="Specialty Cleaning"
            title="Deep Cleaning"
            description="Our deep cleaning service goes far beyond routine maintenance. Every surface is meticulously scrubbed, sanitized, and restored to like-new condition — from hidden corners behind furniture to air vents, light fixtures, and appliance interiors. Ideal for move-in/move-out transitions, post-renovation cleanup, or seasonal refreshes."
            features={[
                {
                    icon: '🧽',
                    title: 'Surface-to-Surface Scrubbing',
                    description: 'Every countertop, shelf, baseboard, and ledge is hand-scrubbed using commercial-grade cleaning agents to eliminate built-up grime and residue.',
                },
                {
                    icon: '🛋️',
                    title: 'Behind & Under Furniture',
                    description: 'We move furniture to reach neglected areas where dust, allergens, and debris accumulate over time, ensuring a truly thorough clean.',
                },
                {
                    icon: '💨',
                    title: 'Air Vent & Duct Cleaning',
                    description: 'HVAC vents, return grilles, and accessible ductwork are vacuumed and wiped down to improve air quality and system efficiency.',
                },
                {
                    icon: '💡',
                    title: 'Light Fixture Detailing',
                    description: 'Ceiling fixtures, recessed lights, and decorative lamps are carefully cleaned and polished to restore brightness and appearance.',
                },
                {
                    icon: '🍳',
                    title: 'Appliance Interior Cleaning',
                    description: 'Ovens, refrigerators, microwaves, and dishwashers are deep-cleaned inside and out, removing grease, stains, and odors.',
                },
                {
                    icon: '🔲',
                    title: 'Grout & Tile Restoration',
                    description: 'Grout lines in kitchens, bathrooms, and entryways are scrubbed and treated to remove discoloration and mildew buildup.',
                },
            ]}
            process={[
                {
                    title: 'Walkthrough Assessment',
                    description: 'We conduct an on-site inspection to evaluate the scope of work, identify problem areas, and determine the cleaning products and equipment required for your space.',
                },
                {
                    title: 'Top-Down Systematic Clean',
                    description: 'Our team works from ceilings to floors in a systematic pattern, ensuring dust and debris are captured as they fall — no area is missed or cleaned twice.',
                },
                {
                    title: 'Detail & Sanitize',
                    description: 'High-touch surfaces, hidden corners, and overlooked areas receive focused attention with hospital-grade disinfectants and specialized tools.',
                },
                {
                    title: 'Final Inspection & Walkthrough',
                    description: 'A supervisor performs a comprehensive quality check against our detailed checklist before presenting the finished results for your approval.',
                },
            ]}
            benefits={[
                {
                    title: 'Healthier Indoor Environment',
                    description: 'Deep cleaning removes allergens, bacteria, and mold spores that routine cleaning misses, creating a healthier space for occupants and visitors.',
                },
                {
                    title: 'Extended Asset Lifespan',
                    description: 'Regular deep cleaning protects flooring, fixtures, and appliances from premature wear caused by dirt accumulation and corrosive buildup.',
                },
                {
                    title: 'Move-In Ready Results',
                    description: 'Whether preparing a property for new tenants or welcoming clients, our deep clean ensures a spotless first impression every time.',
                },
                {
                    title: 'Customized Cleaning Plans',
                    description: 'We tailor our deep cleaning scope to your specific property type, usage patterns, and scheduling requirements for maximum convenience.',
                },
            ]}
        />
    );
}
