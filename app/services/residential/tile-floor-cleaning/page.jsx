import { ServicePage } from '../../../../components/service-page';

export const metadata = {
  title: 'Tile & Floor Cleaning | M2 Property Services',
};

export default function TileFloorCleaningPage() {
  return (
    <ServicePage
      heroImage="/images/tile-cleaning-hero.jpg"
      subtitle="Residential Cleaning"
      title="Tile & Floor Cleaning"
      description="Bring your floors back to life with our professional tile and floor cleaning service. From grimy grout lines to dull hardwood and worn vinyl, our specialized equipment and techniques restore the original beauty of every floor type in your home — without the risk of DIY damage."
      features={[
        {
          icon: '🧱',
          title: 'Grout Cleaning & Restoration',
          description: 'Stained and discolored grout lines are deep-cleaned using high-pressure steam and specialized brushes, restoring them to their original color and removing embedded mold.',
        },
        {
          icon: '🛡️',
          title: 'Tile Sealing & Protection',
          description: 'After cleaning, a professional-grade sealant is applied to grout lines and porous tile surfaces to repel stains, moisture, and dirt for long-lasting protection.',
        },
        {
          icon: '💎',
          title: 'Natural Stone Polishing',
          description: 'Marble, granite, travertine, and slate floors are cleaned with pH-appropriate solutions and polished to restore their natural luster without etching or dulling the surface.',
        },
        {
          icon: '🪵',
          title: 'Hardwood Floor Care',
          description: 'Hardwood floors are cleaned with wood-safe solutions, buffed to remove scuffs and light scratches, and conditioned to protect the finish and enhance the natural grain.',
        },
        {
          icon: '✨',
          title: 'Vinyl & Laminate Cleaning',
          description: 'Vinyl and laminate floors are deep-cleaned to remove buildup from cleaning products, restored to a streak-free shine, and treated to resist future soiling.',
        },
        {
          icon: '⚠️',
          title: 'Slip Prevention Treatment',
          description: 'Anti-slip treatments are available for tile, stone, and other smooth floor surfaces in kitchens, bathrooms, and entryways to improve safety without altering appearance.',
        },
      ]}
      process={[
        {
          title: 'Floor Assessment',
          description: 'We identify your floor type, evaluate its condition, test for material sensitivity, and determine the best cleaning method and products for optimal results.',
        },
        {
          title: 'Pre-Treatment & Soil Removal',
          description: 'Floors are swept and pre-treated with appropriate cleaning solutions. Grout lines and heavily soiled areas receive extra dwell time to break down embedded dirt.',
        },
        {
          title: 'Deep Cleaning & Extraction',
          description: 'Using rotary scrubbers, steam cleaners, and extraction equipment matched to your floor type, we deep clean every inch and remove all loosened dirt and residue.',
        },
        {
          title: 'Sealing & Finishing',
          description: 'Grout sealant, stone polish, or wood conditioner is applied as appropriate. A final inspection ensures every area meets our quality standards before we finish.',
        },
      ]}
      benefits={[
        {
          title: 'Restored Beauty',
          description: 'Professional cleaning transforms dull, stained, and worn-looking floors back to their original beauty, making your entire home feel refreshed and updated.',
        },
        {
          title: 'Floor Longevity',
          description: 'Proper cleaning and sealing protects your investment by preventing the damage that leads to costly floor replacement. Well-maintained floors last decades longer.',
        },
        {
          title: 'Healthier Living Space',
          description: 'Dirty grout and porous floors harbor bacteria, mold, and allergens. Deep cleaning and sealing eliminates these health hazards from your home environment.',
        },
        {
          title: 'Material-Safe Methods',
          description: 'Each floor type requires specific products and techniques. Our trained team knows exactly how to clean every material safely, preventing the damage that wrong products cause.',
        },
        {
          title: 'Easier Daily Maintenance',
          description: 'Sealed grout and treated floors resist dirt and stains, making your daily sweeping and mopping far more effective and keeping floors cleaner between professional visits.',
        },
      ]}
      ctaText="Restore Your Floors Today"
    />
  );
}
