import { ServicePage } from '../../../../components/service-page';

export const metadata = {
  title: 'Pressure Washing',
  description: 'Professional pressure washing in Toronto and the GTA. Restore driveways, patios, siding, and fences with eco-friendly cleaning.',
  alternates: { canonical: '/services/residential/pressure-washing' },
};

export default function PressureWashingPage() {
  return (
    <ServicePage
      heroImage="/images/pressure-washing-hero.jpg"
      subtitle="Residential Cleaning"
      title="Pressure Washing"
      description="Revitalize your home's exterior surfaces with our professional pressure washing service. From driveways and patios to siding and fences, we blast away years of dirt, mold, mildew, and stains using calibrated pressure and eco-friendly detergents that protect your surfaces while delivering dramatic results."
      features={[
        {
          icon: '🚗',
          title: 'Driveway & Garage Floors',
          description: 'Oil stains, tire marks, dirt buildup, and algae growth on concrete and asphalt driveways and garage floors are eliminated, restoring a clean, uniform appearance.',
        },
        {
          icon: '🪑',
          title: 'Patio & Deck Restoration',
          description: 'Wood, composite, stone, and concrete patios and decks are pressure washed to remove weathering, algae, moss, and stains, bringing back their original color and texture.',
        },
        {
          icon: '🏡',
          title: 'Siding & Exterior Walls',
          description: 'Vinyl, brick, stucco, and wood siding is soft-washed with appropriate pressure levels to remove dirt, mildew, and discoloration without damaging the material.',
        },
        {
          icon: '🏗️',
          title: 'Fence Cleaning',
          description: 'Wood, vinyl, and metal fences are cleaned to remove green algae, mold, dirt, and weathering stains, preparing them for staining or simply restoring their appearance.',
        },
        {
          icon: '🚶',
          title: 'Walkway & Step Cleaning',
          description: 'Front walkways, garden paths, and steps are cleaned to remove slippery algae and moss growth, improving both the look and safety of your property.',
        },
        {
          icon: '🪴',
          title: 'Outdoor Furniture & Features',
          description: 'Patio furniture, retaining walls, stone features, planters, and other outdoor items are carefully pressure washed to remove seasonal buildup and restore their finish.',
        },
      ]}
      process={[
        {
          title: 'Surface Assessment',
          description: 'We evaluate each surface to determine the appropriate pressure level, nozzle type, and cleaning solution. Different materials require different techniques to avoid damage.',
        },
        {
          title: 'Pre-Treatment Application',
          description: 'Eco-friendly detergents and mold-killing solutions are applied to surfaces and allowed to dwell, breaking down organic growth and loosening embedded stains.',
        },
        {
          title: 'Pressure Washing',
          description: 'Using commercial-grade equipment with calibrated pressure settings, we systematically clean each surface area with consistent, overlapping passes for even results.',
        },
        {
          title: 'Rinse & Cleanup',
          description: 'All surfaces are rinsed thoroughly, debris is cleared from surrounding areas, and plants and landscaping that were protected during washing are uncovered.',
        },
      ]}
      benefits={[
        {
          title: 'Instant Curb Appeal',
          description: 'Pressure washing delivers one of the most dramatic visual improvements to your property. Surfaces can look decades newer in just a few hours of work.',
        },
        {
          title: 'Prevent Surface Damage',
          description: 'Mold, algae, and dirt buildup slowly deteriorate surfaces over time. Regular pressure washing prevents this degradation and extends the life of your exterior materials.',
        },
        {
          title: 'Increase Property Value',
          description: 'A clean exterior is one of the most cost-effective ways to boost your home value. Pressure washing delivers significant return on investment for sellers and homeowners.',
        },
        {
          title: 'Safer Surfaces',
          description: 'Algae, moss, and mildew on walkways, decks, and driveways create slip hazards. Pressure washing removes these dangers, making your property safer for everyone.',
        },
        {
          title: 'Eco-Friendly Methods',
          description: 'Our biodegradable detergents and water-efficient equipment clean effectively while protecting your landscaping, pets, and the local water supply.',
        },
      ]}
      ctaText="Transform Your Exteriors Today"
    />
  );
}
