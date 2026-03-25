import { ServicePage } from '../../../../components/service-page';

export const metadata = {
    title: 'Restroom Cleaning Services',
    description: 'Commercial restroom cleaning and sanitization in Toronto. Keep facilities hygienic and odor-free with M2 Property Services.',
    alternates: { canonical: '/services/specialty/restroom-cleaning' },
};

export default function RestroomCleaningPage() {
    return (
        <ServicePage
            heroImage="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1920&q=80"
            subtitle="Specialty Cleaning"
            title="Restroom Cleaning"
            description="Commercial restrooms demand a higher standard of cleanliness. Our specialized restroom maintenance program combines deep sanitization, fixture restoration, and proactive supply management to keep your facilities hygienic, odor-free, and consistently presentable for employees and visitors alike."
            features={[
                {
                    icon: '🦠',
                    title: 'Deep Sanitization',
                    description: 'Hospital-grade disinfectants are applied to all surfaces using dwell-time protocols that eliminate 99.9% of bacteria, viruses, and fungi on contact.',
                },
                {
                    icon: '🚿',
                    title: 'Fixture Polishing',
                    description: 'Sinks, faucets, flush valves, and hand dryers are descaled, polished, and buffed to a streak-free shine that signals cleanliness and attention to detail.',
                },
                {
                    icon: '🔲',
                    title: 'Tile & Grout Deep Clean',
                    description: 'Floor and wall tile grout is scrubbed with rotary equipment and treated with anti-microbial solutions to eliminate discoloration and prevent mildew regrowth.',
                },
                {
                    icon: '🌬️',
                    title: 'Odor Elimination',
                    description: 'Enzymatic treatments target odor at its bacterial source rather than masking it, while drain cleaning and ventilation checks address root causes of persistent smells.',
                },
                {
                    icon: '🧻',
                    title: 'Supply Restocking',
                    description: 'Soap dispensers, paper towels, toilet paper, seat covers, and air fresheners are checked and restocked during every visit to prevent inconvenient shortages.',
                },
                {
                    icon: '🤚',
                    title: 'Touchpoint Disinfection',
                    description: 'Door handles, light switches, stall locks, flush levers, and dispenser buttons receive targeted disinfection as the highest-risk surfaces for germ transmission.',
                },
            ]}
            process={[
                {
                    title: 'Restroom Audit',
                    description: 'We assess the number of fixtures, traffic volume, current condition, and supply needs to build a cleaning schedule and staffing plan matched to your facility.',
                },
                {
                    title: 'Systematic Deep Clean',
                    description: 'Following a top-to-bottom, back-to-front protocol, every surface is cleaned in sequence — mirrors, partitions, fixtures, counters, walls, and finally floors.',
                },
                {
                    title: 'Disinfect & Deodorize',
                    description: 'All surfaces receive EPA-registered disinfectant treatment with proper contact time, followed by enzymatic odor neutralization in drains and waste receptacles.',
                },
                {
                    title: 'Restock & Final Inspection',
                    description: 'Supplies are replenished, a quality checklist is completed, and any maintenance issues like leaks or broken hardware are reported for prompt attention.',
                },
            ]}
            benefits={[
                {
                    title: 'Positive User Experience',
                    description: 'Clean restrooms directly influence how people perceive your entire facility. A spotless restroom builds trust and reflects well on your organization.',
                },
                {
                    title: 'Reduced Germ Transmission',
                    description: 'Systematic disinfection of high-touch surfaces significantly reduces the spread of illness, lowering absenteeism and protecting public health.',
                },
                {
                    title: 'Compliance & Liability Protection',
                    description: 'Our cleaning protocols meet OSHA, health department, and ADA standards, helping you maintain compliance and reduce exposure to sanitation-related complaints.',
                },
                {
                    title: 'Proactive Issue Detection',
                    description: 'Regular professional cleaning includes inspection for leaks, clogs, and fixture damage, catching small problems before they become expensive emergencies.',
                },
                {
                    title: 'Consistent Quality',
                    description: 'Standardized checklists and trained technicians ensure every cleaning visit delivers the same high standard, regardless of which team member is on-site.',
                },
            ]}
        />
    );
}
