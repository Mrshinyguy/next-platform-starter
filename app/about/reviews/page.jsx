import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('../../../components/contact-form').then(mod => mod.ContactForm), {
    loading: () => <div className="h-64 animate-pulse bg-neutral-100" />,
});

export const metadata = {
    title: 'Reviews',
    description: 'Read client reviews and testimonials for M2 Property Services. See why Toronto property owners trust us for cleaning and maintenance.',
    alternates: { canonical: '/about/reviews' },
};

const stats = [
    { value: '500+', label: 'Properties Served' },
    { value: '4.9', label: 'Average Rating' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '200+', label: '5-Star Reviews' },
];

const testimonials = [
    {
        name: 'Sarah Mitchell',
        role: 'Homeowner, Toronto',
        rating: 5,
        text: 'M2 Property Services has been maintaining my home for over a year now and I could not be happier. The team is always punctual, thorough, and incredibly professional. They treat my home like it is their own.',
    },
    {
        name: 'David Chen',
        role: 'Property Manager, Scarborough',
        rating: 5,
        text: 'Managing 40+ units means I need a cleaning partner I can rely on without question. M2 has never let me down. Turnovers are handled flawlessly and tenant feedback has been overwhelmingly positive.',
    },
    {
        name: 'Rachel Okafor',
        role: 'Office Manager, Mississauga',
        rating: 5,
        text: 'Our office has never looked better. The M2 team goes above and beyond every single visit. They even noticed and reported a small maintenance issue we had missed. That level of care is rare.',
    },
    {
        name: 'James Patel',
        role: 'Homeowner, North York',
        rating: 5,
        text: 'After trying three different cleaning services, I finally found M2. The difference is night and day. Consistent quality, great communication, and fair pricing. I recommend them to everyone.',
    },
    {
        name: 'Lisa Tremblay',
        role: 'Landlord, Etobicoke',
        rating: 5,
        text: 'I have six rental properties and M2 handles all of them. Their scheduling system is seamless, and the quality never drops regardless of the property. They have saved me countless headaches.',
    },
    {
        name: 'Marcus Williams',
        role: 'Restaurant Owner, Toronto',
        rating: 5,
        text: 'Cleanliness is everything in the restaurant industry. M2 understands that and delivers a spotless environment every morning before we open. Their attention to detail in high-traffic areas is exceptional.',
    },
    {
        name: 'Priya Sharma',
        role: 'Condo Owner, Downtown Toronto',
        rating: 4,
        text: 'Very professional team that communicates well and shows up on time. My condo always feels fresh and welcoming after their visit. The online booking system makes scheduling effortless.',
    },
    {
        name: 'Tom Reeves',
        role: 'Real Estate Agent, Vaughan',
        rating: 5,
        text: 'I bring in M2 for staging cleans before open houses and they consistently deliver impressive results. Several buyers have commented on how clean and well-maintained the properties look. Highly recommended.',
    },
];

function StarRating({ rating }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={i < rating ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth={i < rating ? 0 : 1.5}
                    className={`w-5 h-5 ${i < rating ? 'text-gold' : 'text-neutral-300'}`}
                >
                    <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                    />
                </svg>
            ))}
        </div>
    );
}

export default function ReviewsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-black text-white min-h-[60vh] flex items-center">
                <Image
                    src="/images/reviews-hero.jpg"
                    alt="Satisfied customer"
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
                            Testimonials
                        </p>
                        <div className="gold-line mb-8" />
                        <h1 className="text-white mb-6 leading-tight">
                            What Our Clients <span className="text-gold">Say</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-neutral-300 max-w-xl leading-relaxed">
                            Do not just take our word for it. Hear from the property owners,
                            managers, and businesses who trust M2 Property Services.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </section>

            {/* Stats Bar */}
            <section className="bg-neutral-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-6 sm:px-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <p className="text-gold text-4xl sm:text-5xl font-bold mb-2">{stat.value}</p>
                                <p className="text-neutral-400 text-sm uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                            Reviews
                        </p>
                        <h2 className="text-black mb-4">Trusted by Property Owners Across the GTA</h2>
                        <div className="gold-line mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="p-8 border border-neutral-200 hover:border-gold transition-all duration-300 hover:shadow-lg flex flex-col"
                            >
                                <StarRating rating={testimonial.rating} />
                                <p className="text-neutral-600 text-sm leading-relaxed mt-4 mb-6 flex-1">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>
                                <div className="border-t border-neutral-100 pt-4">
                                    <p className="font-semibold text-black text-sm">{testimonial.name}</p>
                                    <p className="text-neutral-500 text-xs uppercase tracking-widest mt-1">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-black text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                        Experience the Difference
                    </p>
                    <h2 className="text-white mb-6">Ready to See Why Our Clients Stay?</h2>
                    <div className="gold-line mx-auto mb-8" />
                    <p className="text-neutral-300 leading-relaxed mb-10 max-w-xl mx-auto">
                        Join hundreds of satisfied property owners who trust M2 Property
                        Services. Get in touch today for a free consultation.
                    </p>
                    <Link href="/#contact" className="btn btn-gold">
                        Get Your Free Quote
                    </Link>
                </div>
            </section>
        </>
    );
}
