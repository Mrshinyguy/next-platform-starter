import { ServicePage } from '../../../../components/service-page';

export const metadata = {
  title: 'Deep House Cleaning',
  description: 'Intensive deep house cleaning in Toronto and the GTA. We reach behind appliances, inside cabinets, and every overlooked corner.',
  alternates: { canonical: '/services/residential/deep-house-cleaning' },
};

export default function DeepHouseCleaningPage() {
  return (
    <ServicePage
      heroImage="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1920&q=80"
      subtitle="Residential Cleaning"
      title="Deep House Cleaning"
      description="Go beyond the surface with our intensive deep house cleaning service. We reach the hidden dirt, grime, and buildup that regular cleaning misses — behind appliances, inside cabinets, along baseboards, and in every overlooked corner of your home."
      features={[
        {
          icon: '🔥',
          title: 'Behind & Under Appliances',
          description: 'We pull out refrigerators, stoves, and washers to clean the dust, grease, and debris that accumulates in these hard-to-reach areas over time.',
        },
        {
          icon: '🍳',
          title: 'Inside Ovens & Refrigerators',
          description: 'Oven interiors are degreased and scrubbed, while refrigerators are emptied, shelves are cleaned, and drawers are sanitized to eliminate odors and bacteria.',
        },
        {
          icon: '🧹',
          title: 'Baseboard & Trim Detailing',
          description: 'Every baseboard, door frame, and trim piece is hand-wiped to remove built-up dust and scuff marks, giving your rooms a polished, finished look.',
        },
        {
          icon: '💡',
          title: 'Light Fixture Cleaning',
          description: 'Ceiling fans, chandeliers, light covers, and lamp shades are carefully dusted and cleaned to restore brightness and eliminate trapped allergens.',
        },
        {
          icon: '🧱',
          title: 'Grout & Tile Scrubbing',
          description: 'Bathroom and kitchen grout lines are scrubbed with specialized solutions to remove mildew, discoloration, and soap scum buildup for a like-new appearance.',
        },
        {
          icon: '🗄️',
          title: 'Cabinet Interior Cleaning',
          description: 'Kitchen and bathroom cabinets are emptied, wiped down inside, and reorganized. Shelf liners are replaced if needed and sticky residue is removed.',
        },
      ]}
      process={[
        {
          title: 'Assessment & Planning',
          description: 'We evaluate your home to identify areas needing the most attention and create a customized deep cleaning plan tailored to your specific needs.',
        },
        {
          title: 'Top-to-Bottom Deep Clean',
          description: 'Starting from ceilings and working down, we methodically deep clean every surface, fixture, and hidden area using professional-grade equipment and solutions.',
        },
        {
          title: 'Detail Work & Sanitization',
          description: 'Grout lines, cabinet interiors, appliance internals, and all detail areas receive focused treatment to eliminate embedded dirt and bacteria.',
        },
        {
          title: 'Quality Review',
          description: 'A thorough walkthrough ensures every area has been addressed. We photograph before-and-after results so you can see the dramatic difference.',
        },
      ]}
      benefits={[
        {
          title: 'Eliminate Hidden Grime',
          description: 'Deep cleaning reaches the dirt and bacteria that accumulate in places regular cleaning cannot access, creating a truly clean home from top to bottom.',
        },
        {
          title: 'Extend Appliance Life',
          description: 'Removing grease, dust, and buildup from appliances helps them run more efficiently and last longer, saving you money on repairs and replacements.',
        },
        {
          title: 'Improved Air Quality',
          description: 'By removing dust from vents, fans, and hidden surfaces, our deep clean significantly reduces airborne allergens and improves indoor air quality.',
        },
        {
          title: 'Fresh Start for Your Home',
          description: 'Whether seasonal or occasional, a deep clean resets your home to a pristine baseline that makes ongoing maintenance much easier.',
        },
        {
          title: 'Professional-Grade Results',
          description: 'Our specialized tools and cleaning solutions achieve results that consumer products simply cannot match, tackling stubborn stains and buildup effectively.',
        },
      ]}
      ctaText="Schedule Your Deep Clean"
    />
  );
}
