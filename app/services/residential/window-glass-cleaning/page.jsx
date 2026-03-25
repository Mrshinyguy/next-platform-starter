import { ServicePage } from '../../../../components/service-page';

export const metadata = {
  title: 'Window & Glass Cleaning',
  description: 'Professional window and glass cleaning in Toronto and the GTA. Streak-free interior and exterior cleaning for windows, doors, and skylights.',
  alternates: { canonical: '/services/residential/window-glass-cleaning' },
};

export default function WindowGlassCleaningPage() {
  return (
    <ServicePage
      heroImage="/images/window-cleaning-hero.jpg"
      subtitle="Residential Cleaning"
      title="Window & Glass Cleaning"
      description="Let natural light flood your home with our professional window and glass cleaning service. We clean interior and exterior windows, glass doors, skylights, and screens — removing hard water stains, mineral deposits, and environmental buildup for a streak-free, crystal-clear finish."
      features={[
        {
          icon: '🔲',
          title: 'Interior & Exterior Windows',
          description: 'Both sides of every window are cleaned using professional squeegee techniques and purified water systems for a perfectly streak-free, spotless result every time.',
        },
        {
          icon: '🔲',
          title: 'Screen Cleaning & Repair',
          description: 'Window screens are removed, washed, dried, and reinstalled. We also identify any tears or damage and can coordinate screen repairs or replacements.',
        },
        {
          icon: '🛤️',
          title: 'Track & Sill Cleaning',
          description: 'Window tracks and sills are vacuumed and scrubbed to remove built-up dirt, dead insects, and debris that affect window operation and appearance.',
        },
        {
          icon: '☀️',
          title: 'Skylight Cleaning',
          description: 'Hard-to-reach skylights are safely cleaned using extension poles and specialized equipment, removing dirt and bird droppings that block natural light.',
        },
        {
          icon: '🚪',
          title: 'Glass Door Cleaning',
          description: 'Sliding glass doors, French doors, and glass panel entryways are cleaned inside and out, including tracks, frames, and hardware for smooth operation.',
        },
        {
          icon: '💎',
          title: 'Hard Water Stain Removal',
          description: 'Mineral deposits and hard water stains caused by sprinklers or weather are treated with specialized acidic solutions that dissolve buildup without etching the glass.',
        },
      ]}
      process={[
        {
          title: 'Window Assessment',
          description: 'We count and inspect all windows, identify hard water stains or damage, assess access requirements for upper floors, and provide a detailed estimate.',
        },
        {
          title: 'Screen Removal & Prep',
          description: 'Screens are carefully removed and set aside for cleaning. Window areas are prepped and surrounding surfaces are protected from water runoff.',
        },
        {
          title: 'Professional Cleaning',
          description: 'Windows are scrubbed with professional solution, squeegeed to a streak-free finish, and edges are detailed. Tracks and sills are cleaned simultaneously.',
        },
        {
          title: 'Reinstall & Inspect',
          description: 'Clean screens are reinstalled, all windows are inspected for missed spots, and frames are wiped down. We ensure everything looks perfect before we leave.',
        },
      ]}
      benefits={[
        {
          title: 'Maximum Natural Light',
          description: 'Clean windows allow significantly more natural light into your home, brightening rooms, improving mood, and even reducing the need for artificial lighting.',
        },
        {
          title: 'Enhanced Curb Appeal',
          description: 'Sparkling windows are one of the most noticeable improvements you can make to your home exterior, creating a well-maintained and welcoming appearance.',
        },
        {
          title: 'Prevent Glass Degradation',
          description: 'Hard water deposits, mineral buildup, and environmental contaminants can permanently etch glass over time. Regular cleaning prevents costly window replacement.',
        },
        {
          title: 'Safe & Insured Service',
          description: 'Our team uses proper ladders, harnesses, and extension equipment for upper-floor windows. Full insurance coverage gives you complete peace of mind.',
        },
      ]}
      ctaText="Get Sparkling Clean Windows"
    />
  );
}
