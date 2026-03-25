import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Window Cleaning Services',
    description: 'Professional window cleaning in Toronto. Streak-free results for storefronts and multi-story commercial buildings.',
    alternates: { canonical: '/services/specialty/window-cleaning' },
};

export default function WindowCleaningPage() {
    return (
        <ServicePage
            heroImage="/images/window-cleaning-hero.jpg"
            subtitle="Specialty Cleaning"
            title="Window Cleaning"
            description="Crystal-clear windows transform the look and feel of any building. Our professional window cleaning team handles everything from ground-floor storefronts to multi-story commercial facades, removing hard water deposits, environmental film, and construction residue to let maximum natural light pour through."
            features={[
                {
                    icon: '🏙️',
                    title: 'High-Rise Capability',
                    description: 'Water-fed pole systems reaching up to 60 feet and rope-access technicians allow us to clean windows on multi-story commercial buildings safely and efficiently.',
                },
                {
                    icon: '🪟',
                    title: 'Interior & Exterior Cleaning',
                    description: 'Both sides of every window are cleaned using streak-free techniques, including sills, tracks, and frames for a complete, detailed result.',
                },
                {
                    icon: '💧',
                    title: 'Hard Water Stain Removal',
                    description: 'Mineral deposits from sprinklers, irrigation, and weather are dissolved using specialized acid-based treatments that restore glass clarity without etching.',
                },
                {
                    icon: '🖼️',
                    title: 'Frame & Sill Detailing',
                    description: 'Aluminum, vinyl, and wood window frames are cleaned, treated, and inspected for damage, ensuring the entire window unit looks its best.',
                },
                {
                    icon: '🔧',
                    title: 'Screen Cleaning & Repair',
                    description: 'Window screens are removed, washed, inspected for tears, and reinstalled. Minor repairs are handled on-site to save you time and hassle.',
                },
                {
                    icon: '📅',
                    title: 'Seasonal Maintenance Packages',
                    description: 'Scheduled quarterly or semi-annual cleaning programs keep windows pristine year-round with priority booking and volume-based pricing discounts.',
                },
            ]}
            process={[
                {
                    title: 'Window Inventory & Access Plan',
                    description: 'We count and catalog all windows, note access challenges, identify staining issues, and develop a detailed plan including equipment needs and safety protocols.',
                },
                {
                    title: 'Pre-Clean & Spot Treatment',
                    description: 'Frames, sills, and tracks are brushed clean first. Hard water stains, paint splatter, and adhesive residue receive targeted pre-treatment before full washing.',
                },
                {
                    title: 'Professional Wash & Squeegee',
                    description: 'Using purified water systems and professional-grade squeegees, each pane is washed and dried to a streak-free, spot-free finish inside and out.',
                },
                {
                    title: 'Detail Check & Touchup',
                    description: 'Every window is inspected at multiple angles for missed spots or streaks. Edges are detailed with lint-free cloths and any concerns are addressed on the spot.',
                },
            ]}
            benefits={[
                {
                    title: 'Maximum Natural Light',
                    description: 'Clean windows allow significantly more sunlight into your building, reducing artificial lighting costs and boosting occupant well-being and productivity.',
                },
                {
                    title: 'Enhanced Building Appearance',
                    description: 'Sparkling windows are one of the most visible indicators of a well-maintained property, directly influencing tenant satisfaction and visitor perception.',
                },
                {
                    title: 'Glass Longevity',
                    description: 'Regular removal of corrosive contaminants like hard water minerals and acid rain deposits prevents permanent glass etching and costly replacement.',
                },
                {
                    title: 'Safe, Insured Operations',
                    description: 'Our team is fully trained in fall protection and elevated work procedures, carrying comprehensive liability insurance for complete peace of mind.',
                },
            ]}
        />
    );
}
