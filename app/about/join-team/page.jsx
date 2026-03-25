import Image from 'next/image';
import Link from 'next/link';
import { JoinTeamForm } from '../../../components/join-team-form';
import { ScrollToApply } from '../../../components/scroll-to-apply';

export const metadata = {
    title: 'Join Our Team',
    description: 'Explore career opportunities at M2 Property Services. Competitive pay, growth opportunities, and a supportive team in Toronto.',
    alternates: { canonical: '/about/join-team' },
};

const benefits = [
    {
        title: 'Growth Opportunities',
        description:
            'We invest in our people. From on-the-job training to leadership development, there is a clear path forward for everyone on our team.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
            </svg>
        ),
    },
    {
        title: 'Team Culture',
        description:
            'Join a supportive, tight-knit team that values collaboration, respect, and celebrating wins together. We work hard and look out for each other.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
        ),
    },
    {
        title: 'Competitive Pay',
        description:
            'We believe great work deserves great compensation. Our pay rates are above industry average, with performance bonuses and tips.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        ),
    },
    {
        title: 'Flexible Schedule',
        description:
            'Life happens. We offer flexible scheduling options that work around your commitments, whether you are a student, parent, or pursuing other goals.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        ),
    },
];

const positions = [
    {
        title: 'Cleaning Technician',
        type: 'Full-Time / Part-Time',
        location: 'Greater Toronto Area',
        description:
            'Join our front-line team delivering exceptional cleaning services to residential and commercial properties. You will be responsible for maintaining our high standards of cleanliness and ensuring every client is satisfied with the results.',
        requirements: [
            'Reliable transportation',
            'Strong attention to detail',
            'Ability to work independently and as part of a team',
            'Previous cleaning experience is an asset but not required',
        ],
    },
    {
        title: 'Team Lead',
        type: 'Full-Time',
        location: 'Greater Toronto Area',
        description:
            'Lead a team of cleaning technicians and ensure quality standards are met on every job. You will be the on-site point of contact, managing schedules, conducting quality checks, and mentoring team members.',
        requirements: [
            '2+ years of cleaning or property services experience',
            'Leadership and communication skills',
            'Valid driver\'s licence and reliable vehicle',
            'Problem-solving mindset',
        ],
    },
    {
        title: 'Account Manager',
        type: 'Full-Time',
        location: 'Toronto',
        description:
            'Build and maintain relationships with our property owner and management clients. You will be responsible for client onboarding, service coordination, and ensuring long-term satisfaction and retention.',
        requirements: [
            'Experience in account management or customer service',
            'Excellent verbal and written communication',
            'Proficiency with CRM tools and scheduling software',
            'Self-motivated with a client-first mentality',
        ],
    },
    {
        title: 'Operations Coordinator',
        type: 'Full-Time',
        location: 'Toronto',
        description:
            'Keep our operations running smoothly behind the scenes. You will manage scheduling, supply logistics, team dispatching, and day-to-day operational workflows that keep M2 delivering on time, every time.',
        requirements: [
            'Strong organizational and multitasking skills',
            'Experience with operations, logistics, or project management',
            'Comfortable with technology and scheduling platforms',
            'Detail-oriented and proactive',
        ],
    },
    {
        title: 'Marketing & Social Media Coordinator',
        type: 'Part-Time / Contract',
        location: 'Remote / Toronto',
        description:
            'Help tell the M2 story. You will manage our social media presence, create engaging content, and support marketing campaigns that grow our brand and attract new clients across the GTA.',
        requirements: [
            'Experience with social media management and content creation',
            'Knowledge of platforms like Instagram, TikTok, and LinkedIn',
            'Strong writing and visual design skills',
            'Understanding of digital marketing fundamentals',
        ],
    },
];

export default function JoinTeamPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-black text-white min-h-[60vh] flex items-center">
                <Image
                    src="/images/join-team-hero.jpg"
                    alt="Professional handshake"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                    quality={75}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-32 sm:py-40 w-full">
                    <div className="max-w-3xl">
                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                            Careers
                        </p>
                        <div className="gold-line mb-8" />
                        <h1 className="text-white mb-6 leading-tight">
                            Join Our <span className="text-gold">Team</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-neutral-300 max-w-xl leading-relaxed">
                            We are building something special. Come grow with a company that
                            values your work, invests in your future, and treats every team
                            member like family.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </section>

            {/* Why Work With Us */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                            Benefits
                        </p>
                        <h2 className="text-black mb-4">Why Work With Us</h2>
                        <div className="gold-line mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="group p-8 border border-neutral-200 hover:border-gold transition-all duration-300 hover:shadow-lg text-center"
                            >
                                <div className="text-gold mb-6 flex justify-center">{benefit.icon}</div>
                                <h3 className="text-lg mb-3">{benefit.title}</h3>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="section-padding bg-neutral-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                            Opportunities
                        </p>
                        <h2 className="text-black mb-4">Open Positions</h2>
                        <div className="gold-line mx-auto" />
                    </div>

                    <div className="space-y-6">
                        {positions.map((position, index) => (
                            <div
                                key={index}
                                className="bg-white border border-neutral-200 hover:border-gold transition-all duration-300 p-8"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-black mb-2">
                                            {position.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            <span className="text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1">
                                                {position.type}
                                            </span>
                                            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 bg-neutral-100 px-3 py-1">
                                                {position.location}
                                            </span>
                                        </div>
                                    </div>
                                    <ScrollToApply className="btn btn-outline shrink-0">
                                        Apply Now
                                    </ScrollToApply>
                                </div>
                                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                                    {position.description}
                                </p>
                                <div>
                                    <p className="text-sm font-semibold text-black mb-2">Requirements:</p>
                                    <ul className="list-disc list-inside text-neutral-600 text-sm space-y-1">
                                        {position.requirements.map((req, i) => (
                                            <li key={i}>{req}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application CTA */}
            <section id="apply" className="section-padding bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                        Apply Now
                    </p>
                    <h2 className="text-black mb-6">Ready to Join M2?</h2>
                    <div className="gold-line mx-auto mb-8" />
                    <p className="text-neutral-600 leading-relaxed mb-10 max-w-xl mx-auto">
                        Send us a message with the position you are interested in and a
                        brief introduction. We will get back to you within 48 hours.
                    </p>
                    <JoinTeamForm />
                </div>
            </section>
        </>
    );
}
