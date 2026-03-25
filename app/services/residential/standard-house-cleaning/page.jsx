import { ServicePage } from '../../../../components/service-page';

export const metadata = {
  title: 'Standard House Cleaning',
  description: 'Professional standard house cleaning services in Toronto and the GTA. Regular cleaning to keep your home spotless and fresh.',
  alternates: { canonical: '/services/residential/standard-house-cleaning' },
};

export default function StandardHouseCleaningPage() {
  return (
    <ServicePage
      heroImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
      subtitle="Residential Cleaning"
      title="Standard House Cleaning"
      description="Keep your home fresh, tidy, and welcoming with our reliable standard house cleaning service. Our trained professionals follow a comprehensive checklist to ensure every room in your home receives the attention it deserves, from dusting and vacuuming to kitchen and bathroom sanitization."
      features={[
        {
          icon: '🧹',
          title: 'Dusting & Surface Wiping',
          description: 'Thorough dusting of all accessible surfaces, shelves, furniture, baseboards, and light fixtures to eliminate allergens and keep your home looking pristine.',
        },
        {
          icon: '🧽',
          title: 'Kitchen Cleaning',
          description: 'Countertops, stovetops, sinks, and exterior appliance surfaces are cleaned and sanitized. We tackle grease buildup and food residue so your kitchen stays spotless.',
        },
        {
          icon: '🚿',
          title: 'Bathroom Sanitization',
          description: 'Toilets, showers, bathtubs, sinks, and mirrors are scrubbed and disinfected using hospital-grade products to eliminate bacteria and leave bathrooms sparkling.',
        },
        {
          icon: '🛏️',
          title: 'Bedroom Tidying',
          description: 'Beds are made, surfaces are dusted, floors are vacuumed or mopped, and personal items are neatly arranged to create a restful, organized sleeping space.',
        },
        {
          icon: '🏠',
          title: 'Common Area Care',
          description: 'Living rooms, hallways, and entryways receive full attention including vacuuming, mopping, furniture wiping, and general straightening for a welcoming atmosphere.',
        },
        {
          icon: '✨',
          title: 'Floor Care',
          description: 'All floors are vacuumed, swept, and mopped according to their material type. We pay special attention to corners, edges, and high-traffic areas that collect the most dirt.',
        },
      ]}
      process={[
        {
          title: 'Book Your Cleaning',
          description: 'Schedule online or give us a call. Choose a one-time visit or set up a recurring weekly, bi-weekly, or monthly cleaning plan that fits your lifestyle.',
        },
        {
          title: 'Walkthrough & Customization',
          description: 'Our team arrives on time and does a quick walkthrough of your home to understand your priorities and any special instructions before we begin.',
        },
        {
          title: 'Systematic Cleaning',
          description: 'We work room by room using our proven checklist, ensuring consistent quality from top to bottom. Every surface, fixture, and floor is addressed thoroughly.',
        },
        {
          title: 'Final Inspection',
          description: 'Before leaving, we do a walkthrough to make sure everything meets our high standards. Your satisfaction is guaranteed on every visit.',
        },
      ]}
      benefits={[
        {
          title: 'More Free Time',
          description: 'Reclaim your evenings and weekends. Let us handle the cleaning so you can focus on family, hobbies, and the things that matter most to you.',
        },
        {
          title: 'Healthier Living Environment',
          description: 'Regular professional cleaning reduces dust, allergens, and bacteria, creating a healthier home for you and your family.',
        },
        {
          title: 'Consistent Results',
          description: 'Our detailed checklists and trained staff ensure the same high-quality clean every single visit, so you always come home to a spotless space.',
        },
        {
          title: 'Trusted Professionals',
          description: 'All team members are vetted, insured, and trained in our cleaning protocols. Your home and belongings are always in safe hands.',
        },
      ]}
      ctaText="Book Your Standard Cleaning Today"
    />
  );
}
