import { ServicePage } from '../../../../components/service-page';

export const metadata = {
  title: 'Dryer Vent Cleaning | M2 Property Services',
};

export default function DryerVentCleaningPage() {
  return (
    <ServicePage
      heroImage="/images/dryer-vent-hero.png"
      subtitle="Residential Cleaning"
      title="Dryer Vent Cleaning"
      description="Protect your home and family with professional dryer vent cleaning. Clogged dryer vents are one of the leading causes of house fires. Our service removes dangerous lint buildup, restores airflow efficiency, and ensures your dryer operates safely and at peak performance."
      features={[
        {
          icon: '🔥',
          title: 'Lint Removal & Extraction',
          description: 'Compressed air and rotating brush systems dislodge and extract compacted lint from the entire vent run, from the dryer connection to the exterior exhaust cap.',
        },
        {
          icon: '🔍',
          title: 'Vent Line Inspection',
          description: 'We inspect the full vent pathway for damage, disconnections, crushing, or improper routing that could restrict airflow or create fire hazards.',
        },
        {
          icon: '🌀',
          title: 'Duct System Cleaning',
          description: 'The complete ductwork is cleaned using professional rotary brush and high-pressure air tools that reach every bend, joint, and straight section of your vent system.',
        },
        {
          icon: '🛡️',
          title: 'Fire Prevention',
          description: 'Lint is highly flammable. By removing accumulation from vents, ducts, and the dryer cavity, we significantly reduce the risk of a dryer-related house fire.',
        },
        {
          icon: '⚡',
          title: 'Efficiency Improvement',
          description: 'A clean vent allows proper airflow, reducing drying times by up to 30 percent. Your dryer runs fewer cycles, using less energy and reducing wear on the machine.',
        },
        {
          icon: '💨',
          title: 'Exhaust Flow Testing',
          description: 'After cleaning, we measure exhaust airflow at the exterior vent to confirm proper performance and verify that the cleaning has restored optimal air movement.',
        },
      ]}
      process={[
        {
          title: 'System Evaluation',
          description: 'We inspect your dryer, vent connection, ductwork routing, and exterior exhaust cap to assess the level of buildup and identify any structural issues.',
        },
        {
          title: 'Professional Cleaning',
          description: 'Using rotating brush systems and high-powered vacuum equipment, we clean the entire vent run from dryer to exterior, removing all accumulated lint and debris.',
        },
        {
          title: 'Dryer Cavity Cleaning',
          description: 'The interior cavity of the dryer itself is vacuumed to remove lint that has bypassed the lint trap and accumulated around heating elements and mechanical components.',
        },
        {
          title: 'Testing & Verification',
          description: 'Airflow is measured before and after cleaning to verify improvement. We test the dryer operation, check the exterior flap, and document the results.',
        },
      ]}
      benefits={[
        {
          title: 'Fire Safety',
          description: 'Dryer fires cause thousands of home fires annually. Professional vent cleaning dramatically reduces this risk by removing the primary fuel source — accumulated lint.',
        },
        {
          title: 'Lower Energy Bills',
          description: 'A clogged vent forces your dryer to work harder and run longer. Clean vents restore efficiency, which can noticeably reduce your monthly energy costs.',
        },
        {
          title: 'Extended Dryer Lifespan',
          description: 'Restricted airflow causes overheating and excessive wear on dryer components. Clean vents reduce strain on the machine, helping it last years longer.',
        },
        {
          title: 'Faster Drying Times',
          description: 'Clothes that used to take multiple cycles will dry in a single run once proper airflow is restored, saving you time and frustration on laundry day.',
        },
      ]}
      ctaText="Schedule Your Vent Cleaning"
    />
  );
}
