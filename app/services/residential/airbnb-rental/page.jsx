import { ServicePage } from '../../../../components/service-page';

export const metadata = {
  title: 'Airbnb & Rental Cleaning',
  description: 'Professional Airbnb and short-term rental cleaning in Toronto and the GTA. Fast turnovers, linen changes, and guest-ready inspections.',
  alternates: { canonical: '/services/residential/airbnb-rental' },
};

export default function AirbnbRentalPage() {
  return (
    <ServicePage
      heroImage="/images/airbnb-rental-hero.jpg"
      subtitle="Residential Cleaning"
      title="Airbnb & Rental Cleaning"
      description="Maximize your reviews and occupancy rates with our professional short-term rental cleaning service. We handle fast turnovers, linen changes, restocking, and guest-ready inspections so every guest walks into a flawless space — and you maintain Superhost status effortlessly."
      features={[
        {
          icon: '🛏️',
          title: 'Linen Service & Bed Making',
          description: 'Fresh linens are placed on all beds with hotel-style making. Towels are folded and arranged in bathrooms. We can launder on-site or coordinate with your linen service.',
        },
        {
          icon: '🧴',
          title: 'Supply Restocking',
          description: 'Toiletries, paper products, coffee, tea, and welcome amenities are checked and restocked to your specifications so every guest has everything they need from arrival.',
        },
        {
          icon: '✅',
          title: 'Guest-Ready Inspection',
          description: 'We follow a detailed checklist covering every guest touchpoint — from remote controls to light bulbs — ensuring nothing is overlooked and your property is photo-ready.',
        },
        {
          icon: '⚡',
          title: 'Quick Turnaround Service',
          description: 'Same-day turnovers between guests are handled efficiently by our experienced teams. We work within tight checkout-to-checkin windows without compromising quality.',
        },
        {
          icon: '📋',
          title: 'Damage Reporting',
          description: 'Our team photographs and reports any damages, stains, missing items, or maintenance issues found during cleaning so you can address problems and file claims promptly.',
        },
        {
          icon: '🔄',
          title: 'Periodic Deep Cleans',
          description: 'Beyond turnover cleans, we schedule regular deep cleaning sessions to maintain the long-term condition of your property and prevent wear from showing.',
        },
      ]}
      process={[
        {
          title: 'Property Onboarding',
          description: 'We tour your rental, review your listing standards, create a customized cleaning checklist, and set up your restocking preferences and linen protocols.',
        },
        {
          title: 'Automated Scheduling',
          description: 'Connect your booking calendar and we automatically schedule turnovers. No manual coordination needed — we show up when guests check out.',
        },
        {
          title: 'Turnover Execution',
          description: 'Our team cleans, restocks, makes beds, and inspects the property according to your checklist. Any issues are reported with photos immediately.',
        },
        {
          title: 'Confirmation & Reporting',
          description: 'You receive a completion notification with photos confirming the property is guest-ready, plus any damage or maintenance reports for your records.',
        },
      ]}
      benefits={[
        {
          title: 'Higher Guest Ratings',
          description: 'Cleanliness is the top factor in guest reviews. Consistent professional cleaning leads to better ratings, more bookings, and increased revenue.',
        },
        {
          title: 'Hands-Off Management',
          description: 'Automated scheduling and detailed reporting mean you can manage your rental remotely without worrying about turnover coordination or quality control.',
        },
        {
          title: 'Protect Your Investment',
          description: 'Regular professional cleaning and prompt damage reporting preserve your property condition and furnishings, extending their lifespan significantly.',
        },
        {
          title: 'Maximize Occupancy',
          description: 'Fast, reliable turnovers mean you can accept back-to-back bookings without gaps, maximizing your rental income throughout the year.',
        },
        {
          title: 'Superhost Standards',
          description: 'Our service is designed to meet and exceed the cleanliness standards required for Airbnb Superhost status and top-tier listings on all platforms.',
        },
      ]}
      ctaText="Set Up Your Rental Cleaning"
    />
  );
}
