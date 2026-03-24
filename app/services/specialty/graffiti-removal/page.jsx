import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Graffiti Removal Services | M2 Property Services',
};

export default function GraffitiRemovalPage() {
    return (
        <ServicePage
            heroImage="https://images.unsplash.com/photo-1533745848184-3db07256e163?w=1920&q=80"
            subtitle="Specialty Cleaning"
            title="Graffiti Removal"
            description="Swift, professional graffiti removal that restores your property without a trace. Our technicians use surface-matched chemical treatments and precision pressure washing to eliminate vandalism from brick, concrete, metal, and painted surfaces while preserving the original finish underneath."
            features={[
                {
                    icon: '🧪',
                    title: 'Chemical Paint Removal',
                    description: 'Surface-specific solvents and gel removers dissolve spray paint, marker, and adhesive residue without damaging the underlying substrate or surrounding finishes.',
                },
                {
                    icon: '💦',
                    title: 'Pressure Wash Stripping',
                    description: 'Hot-water pressure systems at calibrated PSI levels blast away graffiti from durable surfaces like concrete, brick, and stone with minimal surface erosion.',
                },
                {
                    icon: '🔧',
                    title: 'Surface Restoration',
                    description: 'After graffiti removal, affected areas are patched, sealed, or refinished to blend seamlessly with the surrounding surface and prevent visible scarring.',
                },
                {
                    icon: '🛡️',
                    title: 'Anti-Graffiti Coating',
                    description: 'Sacrificial and non-sacrificial protective coatings are applied to vulnerable surfaces, making future graffiti removal faster, cheaper, and less invasive.',
                },
                {
                    icon: '🏗️',
                    title: 'Multi-Surface Expertise',
                    description: 'We treat brick, concrete block, natural stone, metal cladding, painted wood, glass, and composite panels — each with material-appropriate techniques.',
                },
                {
                    icon: '🎨',
                    title: 'Color Matching & Repaint',
                    description: 'When removal alone is insufficient, we color-match and repaint affected areas to achieve an invisible repair that restores the original aesthetic.',
                },
            ]}
            process={[
                {
                    title: 'Damage Assessment',
                    description: 'We photograph the vandalism, identify the surface material and graffiti medium, and determine the least invasive removal method to preserve the original finish.',
                },
                {
                    title: 'Test Patch Application',
                    description: 'A small inconspicuous area is treated first to verify that the chosen removal agent and technique will not cause discoloration or surface damage.',
                },
                {
                    title: 'Full Removal & Cleanup',
                    description: 'The complete graffiti is removed using the validated method, surrounding areas are protected, and all chemical runoff is captured and disposed of properly.',
                },
                {
                    title: 'Restoration & Protection',
                    description: 'The cleaned surface is restored to match its surroundings, then a protective anti-graffiti coating is applied to simplify any future removal needs.',
                },
            ]}
            benefits={[
                {
                    title: 'Rapid Response',
                    description: 'Quick removal discourages repeat vandalism — studies show graffiti left in place attracts more graffiti, while fast cleanup deters future incidents.',
                },
                {
                    title: 'Property Value Preservation',
                    description: 'Visible graffiti signals neglect and can reduce property values and lease desirability. Professional removal reverses that perception immediately.',
                },
                {
                    title: 'Surface-Safe Methods',
                    description: 'Our material-matched approach ensures the cure is never worse than the problem — your original surfaces are preserved, not damaged by the removal process.',
                },
                {
                    title: 'Long-Term Vandalism Deterrence',
                    description: 'Anti-graffiti coatings make future incidents easy to clean with just soap and water, dramatically reducing ongoing maintenance costs.',
                },
            ]}
        />
    );
}
