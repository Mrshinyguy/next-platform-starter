import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Tile & Floor Cleaning Services',
    description: 'Specialty tile and floor cleaning in Toronto. Grout restoration, stone polishing, and long-term sealing for all hard floors.',
    alternates: { canonical: '/services/specialty/tile-floor-cleaning' },
};

export default function TileFloorCleaningPage() {
    return (
        <ServicePage
            heroImage="/images/tile-cleaning-hero.jpg"
            subtitle="Specialty Cleaning"
            title="Tile & Floor Cleaning"
            description="Specialty tile and floor cleaning that goes beyond surface mopping to restore the original beauty of your hard floors. From grout line restoration and natural stone polishing to epoxy coating and long-term sealing, we deliver results that protect your flooring investment for years to come."
            features={[
                {
                    icon: '🔲',
                    title: 'Grout Restoration',
                    description: 'Discolored, stained, and mildewed grout lines are deep-cleaned with rotary scrubbers and steam, then sealed to resist future staining and moisture penetration.',
                },
                {
                    icon: '💎',
                    title: 'Natural Stone Polishing',
                    description: 'Marble, granite, travertine, and slate floors are honed and polished using diamond abrasive pads to restore their natural luster and smooth finish.',
                },
                {
                    icon: '🧪',
                    title: 'Epoxy Coating Application',
                    description: 'Durable epoxy floor coatings for garages, warehouses, and commercial kitchens provide chemical resistance, easy cleaning, and a seamless professional appearance.',
                },
                {
                    icon: '⚗️',
                    title: 'Acid Wash Treatment',
                    description: 'Controlled acid washing removes mineral deposits, efflorescence, and deep-set stains from concrete and unglazed tile without compromising structural integrity.',
                },
                {
                    icon: '🛡️',
                    title: 'Penetrating Sealers',
                    description: 'Professional-grade sealers penetrate porous tile and stone to create an invisible barrier against water, oil, and stain absorption while maintaining the natural look.',
                },
                {
                    icon: '📋',
                    title: 'Scheduled Maintenance Programs',
                    description: 'Customized recurring maintenance plans keep your tile floors in peak condition with regular cleaning, spot treatment, and periodic resealing on a planned schedule.',
                },
            ]}
            process={[
                {
                    title: 'Floor & Grout Evaluation',
                    description: 'We assess tile type, grout condition, existing sealant, and damage to create a treatment plan that addresses both immediate needs and long-term preservation.',
                },
                {
                    title: 'Deep Clean & Extraction',
                    description: 'Industrial scrubbers and truck-mounted extraction equipment remove embedded dirt, grease, and biological growth from tile surfaces and grout lines simultaneously.',
                },
                {
                    title: 'Specialized Treatment',
                    description: 'Based on your floor type, we apply the appropriate specialty service — stone polishing, acid washing, epoxy coating, or grout color sealing — with precision.',
                },
                {
                    title: 'Seal & Protect',
                    description: 'Penetrating or topical sealers are applied to protect the clean surface, followed by a curing period and final inspection to ensure complete, even coverage.',
                },
            ]}
            benefits={[
                {
                    title: 'Restored Original Beauty',
                    description: 'Professional cleaning and polishing can make tile floors look brand new again, eliminating years of buildup that dulls appearance and traps bacteria.',
                },
                {
                    title: 'Hygienic Surfaces',
                    description: 'Sealed grout and clean tile eliminate the porous crevices where bacteria, mold, and mildew thrive — critical for healthcare, food service, and childcare facilities.',
                },
                {
                    title: 'Slip Resistance',
                    description: 'Proper cleaning removes the greasy film that makes tile floors dangerously slippery, while textured sealers can further enhance traction in wet areas.',
                },
                {
                    title: 'Significant Cost Savings',
                    description: 'Restoring existing tile costs a fraction of replacement. Regular maintenance extends floor life by decades, making it the most economical flooring strategy.',
                },
                {
                    title: 'Tailored to Your Floor Type',
                    description: 'Every floor material requires different care. Our expertise across ceramic, porcelain, natural stone, and concrete ensures the right treatment every time.',
                },
            ]}
        />
    );
}
