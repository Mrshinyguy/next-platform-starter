import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Carpet Cleaning Services',
    description: 'Commercial-grade carpet cleaning in Toronto. Advanced extraction technology to remove stains and restore your carpets.',
    alternates: { canonical: '/services/specialty/carpet-cleaning' },
};

export default function CarpetCleaningPage() {
    return (
        <ServicePage
            heroImage="/images/carpet-cleaning-hero.jpg"
            subtitle="Specialty Cleaning"
            title="Carpet Cleaning"
            description="Our commercial-grade carpet cleaning restores the look, feel, and hygiene of your flooring using advanced extraction technology and professional-strength treatments. From stubborn stains to high-traffic lane wear, we bring carpets back to life while extending their useful lifespan."
            features={[
                {
                    icon: '♨️',
                    title: 'Hot Water Steam Extraction',
                    description: 'Industrial truck-mounted equipment injects superheated water deep into carpet fibers, then extracts dirt, allergens, and bacteria for a thorough sanitizing clean.',
                },
                {
                    icon: '🧴',
                    title: 'Dry Cleaning Solutions',
                    description: 'Low-moisture encapsulation cleaning for areas that need minimal downtime — carpets are ready for foot traffic within hours, not days.',
                },
                {
                    icon: '🎯',
                    title: 'Targeted Stain Treatment',
                    description: 'Coffee, ink, grease, and pet stains are pre-treated with specialized spotting agents matched to the stain type and carpet fiber for maximum removal.',
                },
                {
                    icon: '🌬️',
                    title: 'Odor Neutralization',
                    description: 'Enzymatic deodorizers break down odor-causing bacteria at the molecular level rather than masking smells, leaving carpets genuinely fresh.',
                },
                {
                    icon: '👣',
                    title: 'High-Traffic Lane Restoration',
                    description: 'Worn, matted pathways in hallways and common areas are revived through deep agitation, pile lifting, and color-brightening treatments.',
                },
                {
                    icon: '🛡️',
                    title: 'Protective Fiber Coating',
                    description: 'Post-cleaning application of stain-resistant protectant creates an invisible barrier that repels spills and slows future soiling between cleanings.',
                },
            ]}
            process={[
                {
                    title: 'Fiber Analysis & Pre-Inspection',
                    description: 'We identify your carpet type, fiber composition, and existing damage to select the safest and most effective cleaning method for optimal results.',
                },
                {
                    title: 'Pre-Treatment & Agitation',
                    description: 'Problem areas and high-traffic zones receive targeted pre-spray treatments, then the entire carpet is mechanically agitated to loosen embedded soil.',
                },
                {
                    title: 'Extraction & Rinse',
                    description: 'Our commercial extraction equipment removes cleaning solution, dirt, and moisture, leaving carpets clean without sticky residue that attracts future soiling.',
                },
                {
                    title: 'Speed Dry & Protection',
                    description: 'High-velocity air movers accelerate drying, followed by optional protectant application. We conduct a final walkthrough to confirm stain removal and coverage.',
                },
            ]}
            benefits={[
                {
                    title: 'Improved Indoor Air Quality',
                    description: 'Professional extraction removes trapped pollutants, dust mites, and allergens from deep within carpet fibers that vacuuming alone cannot reach.',
                },
                {
                    title: 'Extended Carpet Life',
                    description: 'Regular professional cleaning prevents fiber degradation caused by embedded grit, potentially doubling the useful life of your carpet investment.',
                },
                {
                    title: 'Rapid Turnaround',
                    description: 'Multiple cleaning methods allow us to match the technique to your schedule — from same-day dry cleaning to overnight deep extraction.',
                },
                {
                    title: 'Professional Appearance',
                    description: 'Clean, well-maintained carpets signal professionalism to clients and visitors, reinforcing your brand image and workplace standards.',
                },
                {
                    title: 'Cost-Effective Maintenance',
                    description: 'Proactive carpet care costs a fraction of premature replacement, making scheduled cleaning one of the smartest facility investments available.',
                },
            ]}
        />
    );
}
