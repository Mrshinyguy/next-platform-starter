import { ServicePage } from '../../../../components/service-page';

export const metadata = {
  title: 'Move-in & Move-out Cleaning',
  description: 'Professional move-in and move-out cleaning in Toronto and the GTA. Get your full deposit back or start fresh in a spotless home.',
  alternates: { canonical: '/services/residential/move-in-move-out' },
};

export default function MoveInMoveOutPage() {
  return (
    <ServicePage
      heroImage="/images/move-in-move-out-hero.jpg"
      subtitle="Residential Cleaning"
      title="Move-in & Move-out Cleaning"
      description="Make your transition seamless with our comprehensive move-in and move-out cleaning service. Whether you are preparing a property for new tenants, ensuring you get your full deposit back, or moving into a fresh space, we leave every corner spotless and ready."
      features={[
        {
          icon: '🏗️',
          title: 'Full Appliance Deep Clean',
          description: 'Every appliance is thoroughly cleaned inside and out — ovens, refrigerators, dishwashers, microwaves, and laundry machines are degreased, sanitized, and polished.',
        },
        {
          icon: '🗄️',
          title: 'Cabinet & Closet Sanitization',
          description: 'All cabinets, closets, and storage areas are wiped clean, shelf paper is removed, and interiors are sanitized and ready for the next occupant.',
        },
        {
          icon: '🧱',
          title: 'Wall & Baseboard Washing',
          description: 'Walls are wiped down to remove scuff marks, fingerprints, and dust. Baseboards and trim are detailed to give the property a well-maintained appearance.',
        },
        {
          icon: '🔲',
          title: 'Window & Sill Cleaning',
          description: 'Interior windows are washed streak-free, window sills and tracks are vacuumed and scrubbed, and blinds or shutters are dusted and wiped.',
        },
        {
          icon: '🧹',
          title: 'Carpet & Floor Treatment',
          description: 'Carpets are vacuumed and steam-cleaned to remove stains and odors. Hard floors are swept, mopped, and polished for a move-in ready finish.',
        },
        {
          icon: '🚗',
          title: 'Garage & Exterior Sweep',
          description: 'Garage floors are swept and spot-cleaned, cobwebs are removed from entryways, and front porches or patios are tidied for curb appeal.',
        },
      ]}
      process={[
        {
          title: 'Property Walkthrough',
          description: 'We assess the property with you or your property manager to identify all areas that need attention and note any special requirements or concerns.',
        },
        {
          title: 'Comprehensive Cleaning',
          description: 'Our team works through every room systematically — kitchens, bathrooms, bedrooms, living areas, storage spaces, and utility rooms get full treatment.',
        },
        {
          title: 'Detail & Finishing Touches',
          description: 'Light switches, outlet covers, door handles, and all touch points are sanitized. Fixtures are polished and final details are perfected.',
        },
        {
          title: 'Move-Ready Handoff',
          description: 'We complete a final inspection and provide documentation of the cleaning for your records, perfect for landlord inspections or new tenant move-ins.',
        },
      ]}
      benefits={[
        {
          title: 'Protect Your Deposit',
          description: 'A professionally cleaned property meets landlord expectations and helps ensure you receive your full security deposit back when moving out.',
        },
        {
          title: 'Stress-Free Transition',
          description: 'Moving is stressful enough. Let us handle the cleaning so you can focus on packing, unpacking, and settling into your new home.',
        },
        {
          title: 'Landlord & Tenant Ready',
          description: 'Whether you are a tenant, landlord, or property manager, our service ensures the property is in pristine condition for inspections and handovers.',
        },
        {
          title: 'Thorough Documentation',
          description: 'We provide before-and-after documentation of our work, giving you proof of the property condition for lease agreements and deposit returns.',
        },
      ]}
      ctaText="Book Your Move Cleaning"
    />
  );
}
