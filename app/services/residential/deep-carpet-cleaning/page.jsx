import { ServicePage } from '../../../../components/service-page';

export const metadata = {
  title: 'Deep Carpet Cleaning | M2 Property Services',
};

export default function DeepCarpetCleaningPage() {
  return (
    <ServicePage
      heroImage="https://images.unsplash.com/photo-1558317374-067fb5f30001?w=1920&q=80"
      subtitle="Residential Cleaning"
      title="Deep Carpet Cleaning"
      description="Restore your carpets to like-new condition with our professional deep cleaning service. Using commercial-grade hot water extraction and targeted stain treatments, we remove embedded dirt, allergens, and odors that regular vacuuming leaves behind — extending your carpet's life and beauty."
      features={[
        {
          icon: '💧',
          title: 'Hot Water Extraction',
          description: 'Our truck-mounted hot water extraction systems penetrate deep into carpet fibers, loosening and removing embedded dirt, bacteria, and allergens that vacuuming cannot reach.',
        },
        {
          icon: '🎯',
          title: 'Targeted Stain Removal',
          description: 'Wine, coffee, ink, food, and other stubborn stains are pre-treated with specialized spotting solutions matched to each stain type for maximum removal effectiveness.',
        },
        {
          icon: '🌿',
          title: 'Odor Treatment',
          description: 'Trapped odors from pets, cooking, smoke, and spills are neutralized at the source using enzyme-based treatments that break down odor-causing compounds, not just mask them.',
        },
        {
          icon: '👣',
          title: 'High-Traffic Restoration',
          description: 'Hallways, entryways, and living areas that show heavy wear receive extra treatment to lift matted fibers and restore the carpet pile to its original texture and appearance.',
        },
        {
          icon: '🐾',
          title: 'Pet Stain & Odor Treatment',
          description: 'Specialized enzymatic cleaners break down pet urine crystals deep within carpet padding, eliminating stains and odors completely rather than temporarily covering them up.',
        },
        {
          icon: '🛡️',
          title: 'Fiber Protection Application',
          description: 'After cleaning, we apply a protective coating that repels future stains and spills, making cleanup easier and keeping your carpets looking cleaner between professional visits.',
        },
      ]}
      process={[
        {
          title: 'Pre-Inspection & Testing',
          description: 'We inspect your carpets to identify fiber types, stain sources, and areas of concern. Spot tests ensure our cleaning solutions are safe for your specific carpet material.',
        },
        {
          title: 'Pre-Treatment & Agitation',
          description: 'Cleaning solution is applied and agitated into carpet fibers to break down embedded soil. Stains receive targeted pre-treatment for optimal results.',
        },
        {
          title: 'Hot Water Extraction',
          description: 'Our commercial-grade equipment injects hot water deep into fibers and immediately extracts it along with dissolved dirt, leaving carpets clean and only slightly damp.',
        },
        {
          title: 'Post-Clean & Protection',
          description: 'Speed drying fans are positioned to accelerate dry time. Fiber protectant is applied if requested, and we review the results with you before leaving.',
        },
      ]}
      benefits={[
        {
          title: 'Extended Carpet Life',
          description: 'Regular deep cleaning removes abrasive soil particles that wear down carpet fibers, potentially doubling the lifespan of your carpets and delaying costly replacement.',
        },
        {
          title: 'Healthier Home Environment',
          description: 'Carpets trap allergens, dust mites, bacteria, and pollutants. Deep extraction removes these contaminants, significantly improving your indoor air quality.',
        },
        {
          title: 'Restored Appearance',
          description: 'Dingy, matted, and stained carpets are transformed back to their original color and texture, making your entire home look refreshed and well-maintained.',
        },
        {
          title: 'Fast Dry Times',
          description: 'Our powerful extraction equipment removes most moisture during cleaning, and speed drying fans mean your carpets are typically ready to walk on within hours.',
        },
      ]}
      ctaText="Revive Your Carpets Today"
    />
  );
}
