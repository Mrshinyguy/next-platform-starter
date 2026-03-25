import Link from 'next/link';
import { ContactForm } from '../../../components/contact-form';

export const metadata = {
    title: 'Our Story',
    description: 'Learn about M2 Property Services — our mission, values, and commitment to quality property care across the Greater Toronto Area.',
    alternates: { canonical: '/about/our-story' },
};

const values = [
    {
        title: 'Excellence',
        description:
            'We hold ourselves to the highest standard on every job. No shortcuts, no half-measures. Every property we touch reflects our commitment to quality.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
        ),
    },
    {
        title: 'Integrity',
        description:
            'Honesty and transparency guide every interaction. We provide upfront pricing, honest timelines, and always deliver on our promises.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
        ),
    },
    {
        title: 'Innovation',
        description:
            'We embrace modern tools, techniques, and technology to deliver smarter, faster, and more efficient property services.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
        ),
    },
    {
        title: 'Community',
        description:
            'We are proud to serve the Greater Toronto Area and invest in the communities where we live and work. Our success is tied to the success of our neighbours.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
        ),
    },
];

export default function OurStoryPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-black text-white min-h-[60vh] flex items-center">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80)' }} />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-32 sm:py-40 w-full">
                    <div className="max-w-3xl">
                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                            About Us
                        </p>
                        <div className="gold-line mb-8" />
                        <h1 className="text-white mb-6 leading-tight">
                            Our <span className="text-gold">Story</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-neutral-300 max-w-xl leading-relaxed">
                            How a university student with a mop and a vision built a property
                            services company that raises the bar.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </section>

            {/* The Origin Story */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                                Where It Began
                            </p>
                            <h2 className="text-black mb-6">
                                From Dorm Rooms to <br />
                                <span className="text-gold">Boardrooms</span>
                            </h2>
                            <div className="gold-line mb-8" />
                            <div className="space-y-4 text-neutral-600 leading-relaxed">
                                <p>
                                    It started at 18 years old with a bucket, a set of cleaning
                                    supplies, and a willingness to outwork everyone. While most
                                    students were focused solely on lectures and campus life, our
                                    founder was picking up shifts at janitorial companies, residential
                                    cleaning crews, and commercial maintenance firms across the
                                    Greater Toronto Area.
                                </p>
                                <p>
                                    Over four years of working in the industry, the pattern became
                                    impossible to ignore: property owners were constantly let down.
                                    Cleaners would show up late, cut corners, or disappear entirely.
                                    Maintenance requests went unanswered for weeks. There was a
                                    massive gap between what property owners needed and what the
                                    market was delivering.
                                </p>
                                <p>
                                    Now a 22-year-old student at the University of Toronto, that
                                    frustration became fuel. With hands-on experience across every
                                    type of property service, the idea for M2 Property Services was
                                    born, not in a boardroom, but in the real world, from someone who
                                    had done the work firsthand.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="bg-black p-12 sm:p-16">
                                <div className="space-y-8">
                                    <div className="border-l-2 border-gold pl-6">
                                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Age 18</p>
                                        <p className="text-neutral-300 text-sm leading-relaxed">
                                            Started working cleaning jobs across the GTA, learning the
                                            industry from the ground up.
                                        </p>
                                    </div>
                                    <div className="border-l-2 border-gold pl-6">
                                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">The Gap</p>
                                        <p className="text-neutral-300 text-sm leading-relaxed">
                                            Witnessed firsthand how property owners struggled with
                                            unreliable, low-quality services.
                                        </p>
                                    </div>
                                    <div className="border-l-2 border-gold pl-6">
                                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Age 22</p>
                                        <p className="text-neutral-300 text-sm leading-relaxed">
                                            Founded M2 Property Services while studying at the
                                            University of Toronto.
                                        </p>
                                    </div>
                                    <div className="border-l-2 border-gold pl-6">
                                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Today</p>
                                        <p className="text-neutral-300 text-sm leading-relaxed">
                                            A growing company setting new standards in property
                                            services across Ontario.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold -z-10 hidden sm:block" />
                        </div>
                    </div>
                </div>
            </section>

            {/* The Vision */}
            <section className="section-padding bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                            Our Vision
                        </p>
                        <h2 className="text-white mb-6">
                            What <span className="text-gold">M2</span> Stands For
                        </h2>
                        <div className="gold-line mx-auto mb-8" />
                        <div className="space-y-4 text-neutral-300 leading-relaxed text-lg">
                            <p>
                                M2 represents more than a name. It stands for a squared commitment
                                to quality: meticulous work multiplied by meaningful relationships.
                                Every property we service is treated as if it were our own.
                            </p>
                            <p>
                                Our mission is simple: to be the property services company that
                                owners trust without hesitation. We are building a team and a
                                reputation grounded in consistency, professionalism, and genuine
                                care for the spaces we maintain.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        <div className="p-8 border border-neutral-800">
                            <p className="text-gold text-4xl font-bold mb-2">4+</p>
                            <p className="text-neutral-400 text-sm uppercase tracking-widest">Years of Experience</p>
                        </div>
                        <div className="p-8 border border-neutral-800">
                            <p className="text-gold text-4xl font-bold mb-2">500+</p>
                            <p className="text-neutral-400 text-sm uppercase tracking-widest">Properties Served</p>
                        </div>
                        <div className="p-8 border border-neutral-800">
                            <p className="text-gold text-4xl font-bold mb-2">100%</p>
                            <p className="text-neutral-400 text-sm uppercase tracking-widest">Commitment to Quality</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding bg-neutral-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                            What Drives Us
                        </p>
                        <h2 className="text-black mb-4">Our Core Values</h2>
                        <div className="gold-line mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group p-8 bg-white border border-neutral-200 hover:border-gold transition-all duration-300 hover:shadow-lg text-center"
                            >
                                <div className="text-gold mb-6 flex justify-center">{value.icon}</div>
                                <h3 className="text-lg mb-3">{value.title}</h3>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA / Contact Section */}
            <section className="section-padding bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                        Get In Touch
                    </p>
                    <h2 className="text-black mb-6">Be Part of the Story</h2>
                    <div className="gold-line mx-auto mb-8" />
                    <p className="text-neutral-600 leading-relaxed mb-10 max-w-xl mx-auto">
                        Whether you need property services or want to join a team that is
                        redefining the industry, we would love to hear from you.
                    </p>
                    <ContactForm />
                </div>
            </section>
        </>
    );
}
