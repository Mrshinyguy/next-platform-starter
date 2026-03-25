import { ServicePage } from '../../../../components/service-page';

export const metadata = {
  title: 'Post Renovation Cleaning',
  description: 'Post-renovation cleaning services in Toronto and the GTA. We remove construction dust, debris, and residue so you can enjoy your new space.',
  alternates: { canonical: '/services/residential/post-renovation' },
};

export default function PostRenovationPage() {
  return (
    <ServicePage
      heroImage="/images/post-renovation-hero.jpg"
      subtitle="Residential Cleaning"
      title="Post Renovation Cleaning"
      description="Renovations transform your home but leave behind a mess that regular cleaning cannot handle. Our post-renovation cleaning service eliminates construction dust, debris, and residue so you can enjoy your newly upgraded space without the hassle of cleaning up after contractors."
      features={[
        {
          icon: '🌫️',
          title: 'Construction Dust Removal',
          description: 'Fine construction dust settles on every surface and infiltrates HVAC systems. We use HEPA-filtered vacuums and specialized techniques to capture and remove all dust particles.',
        },
        {
          icon: '🎨',
          title: 'Paint Splatter Cleanup',
          description: 'Paint drips on floors, countertops, fixtures, and windows are carefully removed using appropriate solvents and scraping techniques without damaging underlying surfaces.',
        },
        {
          icon: '🪞',
          title: 'Fixture & Hardware Polishing',
          description: 'New and existing fixtures, door hardware, cabinet pulls, and faucets are cleaned of adhesive residue, fingerprints, and construction film to reveal their true finish.',
        },
        {
          icon: '🗑️',
          title: 'Debris Hauling & Disposal',
          description: 'Leftover construction materials, packaging, protective coverings, and general debris are collected and properly disposed of, leaving your space clutter-free.',
        },
        {
          icon: '🌬️',
          title: 'Air Quality Restoration',
          description: 'We clean vents, replace filters, and use air scrubbing techniques to remove airborne particles and volatile compounds left behind by construction materials.',
        },
        {
          icon: '🔍',
          title: 'Surface Detailing',
          description: 'Every surface is inspected and detailed — grout haze is removed from new tile, protective films are peeled, sticker residue is cleaned, and new surfaces are polished.',
        },
      ]}
      process={[
        {
          title: 'Post-Construction Assessment',
          description: 'We survey the renovation area to evaluate the scope of cleanup needed, identify sensitive materials, and plan the most effective cleaning approach.',
        },
        {
          title: 'Debris Removal & Rough Clean',
          description: 'All construction debris, packaging, and large dust accumulations are removed first. Floors are swept and surfaces are pre-treated for the detail cleaning phase.',
        },
        {
          title: 'Deep Detail Cleaning',
          description: 'Every surface receives focused attention — paint removal, adhesive cleanup, fixture polishing, grout haze removal, and thorough dust elimination throughout.',
        },
        {
          title: 'Air Quality & Final Polish',
          description: 'HVAC vents are cleaned, air quality is addressed, and a final polish ensures your renovated space looks exactly as you envisioned it.',
        },
      ]}
      benefits={[
        {
          title: 'Enjoy Your Renovation Sooner',
          description: 'Skip the days or weeks of cleaning up after contractors and start enjoying your newly renovated space immediately after our team finishes.',
        },
        {
          title: 'Protect New Surfaces',
          description: 'Proper post-construction cleaning prevents scratches and damage that DIY cleanup can cause. We use the right products and techniques for every material.',
        },
        {
          title: 'Healthier Indoor Air',
          description: 'Construction dust and chemical residues can cause respiratory issues. Our thorough cleaning and air quality treatment creates a safe environment for your family.',
        },
        {
          title: 'Professional Equipment',
          description: 'Industrial HEPA vacuums, air scrubbers, and specialized cleaning solutions tackle construction residue far more effectively than household cleaning supplies.',
        },
        {
          title: 'Contractor-Ready Results',
          description: 'Our cleaning meets the standards needed for final contractor inspections and warranty documentation, ensuring your renovation project is properly completed.',
        },
      ]}
      ctaText="Get Your Post-Renovation Clean"
    />
  );
}
