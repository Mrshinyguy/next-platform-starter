import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Floor Waxing Services',
    description: 'Professional floor waxing and polishing in Toronto. Strip-and-wax, buffing, and specialty coatings for commercial floors.',
    alternates: { canonical: '/services/specialty/floor-waxing' },
};

export default function FloorWaxingPage() {
    return (
        <ServicePage
            heroImage="/images/floor-waxing-hero.jpg"
            subtitle="Specialty Cleaning"
            title="Floor Waxing"
            description="Our professional floor waxing service delivers showroom-quality finishes that protect your investment and impress every visitor. We handle complete strip-and-wax cycles, routine buffing, and specialty coatings for VCT, concrete, and hardwood surfaces across commercial and institutional facilities."
            features={[
                {
                    icon: '✨',
                    title: 'Strip & Wax Application',
                    description: 'Old finish is chemically stripped to bare floor, then multiple coats of commercial-grade wax are applied and burnished to a mirror-like shine.',
                },
                {
                    icon: '🔄',
                    title: 'High-Speed Buffing',
                    description: 'Routine maintenance buffing with ultra-high-speed burnishers restores gloss between full strip-and-wax cycles, keeping floors looking freshly finished.',
                },
                {
                    icon: '🏥',
                    title: 'VCT Maintenance Programs',
                    description: 'Vinyl composition tile in healthcare, education, and retail facilities receives specialized care including spray buffing, scrub-and-recoat, and full restoration.',
                },
                {
                    icon: '🏗️',
                    title: 'Concrete Sealing & Polish',
                    description: 'Warehouse and retail concrete floors are sealed, densified, and polished to create durable, low-maintenance surfaces with a professional sheen.',
                },
                {
                    icon: '⚠️',
                    title: 'Anti-Slip Coating',
                    description: 'Safety-rated non-slip additives and textured coatings are applied to high-risk areas including kitchens, entryways, and ramps to prevent accidents.',
                },
                {
                    icon: '💎',
                    title: 'High-Gloss Finishing',
                    description: 'Multi-layer finish application combined with progressive burnishing achieves a deep, wet-look gloss that transforms the visual impact of any space.',
                },
            ]}
            process={[
                {
                    title: 'Floor Assessment & Material ID',
                    description: 'We identify your floor type, current finish condition, and traffic patterns to recommend the optimal treatment — whether a full strip, scrub-and-recoat, or maintenance buff.',
                },
                {
                    title: 'Stripping & Preparation',
                    description: 'Existing finish is removed using chemical strippers and auto-scrubbers, then the bare floor is rinsed, neutralized, and thoroughly dried for new finish adhesion.',
                },
                {
                    title: 'Finish Application',
                    description: 'Multiple thin coats of premium floor finish are applied with controlled drying times between layers, building a deep, durable protective barrier.',
                },
                {
                    title: 'Burnishing & Quality Check',
                    description: 'High-speed burnishers bring the finish to peak gloss, edges are detailed by hand, and a final inspection confirms uniform coverage and slip resistance.',
                },
            ]}
            benefits={[
                {
                    title: 'Professional First Impression',
                    description: 'Gleaming floors immediately communicate cleanliness and attention to detail, setting the tone for client interactions and employee morale.',
                },
                {
                    title: 'Floor Protection',
                    description: 'Quality wax finish acts as a sacrificial barrier, absorbing scuffs and wear so the actual floor surface remains undamaged for years longer.',
                },
                {
                    title: 'Reduced Maintenance Costs',
                    description: 'Properly finished floors are easier and less expensive to maintain daily, requiring less water, fewer chemicals, and shorter cleaning times.',
                },
                {
                    title: 'Safety Compliance',
                    description: 'Our finishes meet or exceed ASTM slip-resistance standards, helping you maintain a safe environment and reduce liability exposure.',
                },
                {
                    title: 'Flexible Scheduling',
                    description: 'We work nights, weekends, and around your operational hours to complete floor projects with zero disruption to your business activities.',
                },
            ]}
        />
    );
}
