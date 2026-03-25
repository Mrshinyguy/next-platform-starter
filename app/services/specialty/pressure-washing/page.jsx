import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Pressure Washing Services | M2 Property Services',
};

export default function PressureWashingPage() {
    return (
        <ServicePage
            heroImage="/images/pressure-washing-hero.jpg"
            subtitle="Specialty Cleaning"
            title="Pressure Washing"
            description="Our heavy-duty pressure washing service tackles the toughest exterior grime, restoring curb appeal and maintaining structural integrity. From oil-stained parking lots to weathered building facades, we use calibrated commercial equipment to clean every exterior surface safely and effectively."
            features={[
                {
                    icon: '🏢',
                    title: 'Building Exterior Washing',
                    description: 'Brick, stucco, stone, and composite siding are cleaned using pressure-matched techniques that remove years of pollution, algae, and weathering without surface damage.',
                },
                {
                    icon: '🅿️',
                    title: 'Parking Lot & Garage Cleaning',
                    description: 'Oil stains, tire marks, and accumulated debris are blasted from concrete and asphalt surfaces, improving appearance and reducing slip hazards.',
                },
                {
                    icon: '🧱',
                    title: 'Concrete & Brick Restoration',
                    description: 'Sidewalks, retaining walls, and patios are deep-cleaned to remove embedded dirt, moss, and mineral deposits that degrade structural surfaces over time.',
                },
                {
                    icon: '🏗️',
                    title: 'Loading Dock Degreasing',
                    description: 'Heavy industrial buildup including hydraulic fluid, grease, and chemical residue is stripped from loading areas using hot-water pressure systems.',
                },
                {
                    icon: '🏠',
                    title: 'Siding & Soffit Cleaning',
                    description: 'Vinyl, aluminum, and wood siding is gently washed with soft-wash techniques that remove mildew and discoloration without compromising paint or finish.',
                },
                {
                    icon: '🎨',
                    title: 'Graffiti Surface Preparation',
                    description: 'Surfaces are pressure-cleaned to prepare for graffiti removal treatments or repainting, ensuring proper adhesion and a clean foundation.',
                },
            ]}
            process={[
                {
                    title: 'Site Survey & Risk Assessment',
                    description: 'We evaluate surface types, surrounding landscaping, drainage paths, and any sensitive areas to plan the safest and most effective washing approach.',
                },
                {
                    title: 'Surface Pre-Treatment',
                    description: 'Targeted degreasers, mildewcides, or detergents are applied to stubborn stains and biological growth to break bonds before pressure washing begins.',
                },
                {
                    title: 'Calibrated Pressure Cleaning',
                    description: 'Using commercial-grade equipment rated up to 4,000 PSI, we clean each surface with the precise pressure and water temperature suited to the material.',
                },
                {
                    title: 'Rinse, Inspect & Protect',
                    description: 'All surfaces are thoroughly rinsed, runoff is managed responsibly, and a final inspection ensures uniform cleaning. Sealants are applied where requested.',
                },
            ]}
            benefits={[
                {
                    title: 'Restored Curb Appeal',
                    description: 'A clean exterior immediately elevates the appearance of your property, creating a positive impression for tenants, customers, and passersby.',
                },
                {
                    title: 'Preventive Maintenance',
                    description: 'Removing mold, algae, and mineral deposits prevents long-term surface degradation that leads to costly repairs and premature material replacement.',
                },
                {
                    title: 'Safety & Compliance',
                    description: 'Clean walkways, ramps, and parking surfaces reduce slip-and-fall liability while meeting municipal cleanliness and environmental discharge standards.',
                },
                {
                    title: 'Property Value Protection',
                    description: 'Well-maintained exteriors preserve and enhance property values, supporting stronger lease rates and a competitive market position.',
                },
            ]}
        />
    );
}
