import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('../components/contact-form').then(mod => mod.ContactForm), {
    loading: () => <div className="h-64 animate-pulse bg-neutral-100" />,
});

const services = [
    {
        title: 'Professional Cleaning',
        description:
            'Thorough, reliable cleaning services for residential and commercial properties. From routine cleans to deep sanitisation, we leave every space spotless and pristine.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
        ),
    },
    {
        title: 'Maintenance & Repairs',
        description:
            'Responsive, reliable maintenance services that keep your property in pristine condition. Our skilled team addresses issues promptly and professionally.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
            </svg>
        ),
    },
    {
        title: 'Renovations',
        description:
            'Transform your property with expertly managed renovation projects. From concept to completion, we deliver outstanding results on time and within budget.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
        ),
    },
    {
        title: 'Scheduled Programmes',
        description:
            'Tailored maintenance and cleaning schedules designed around your property\'s needs. We work with landlords, agents, and businesses to keep properties in peak condition year-round.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
            </svg>
        ),
    },
];

const reasons = [
    { number: '01', title: 'Fully Insured Cleaners', description: 'Every member of our team is fully insured and bonded, giving you complete peace of mind and protection for your property.' },
    { number: '02', title: 'Competitive Pricing', description: 'Premium cleaning services at prices that make sense. We offer transparent, competitive rates with no hidden fees or surprise charges.' },
    { number: '03', title: 'Trusted Expertise', description: 'Years of industry experience delivering results that exceed expectations, backed by trained and vetted professionals.' },
    { number: '04', title: 'Client-First Approach', description: 'Your vision and goals are at the centre of everything we do. From initial consultation to project completion, we manage the entire process seamlessly.' },
];

export default function Page() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-black text-white min-h-screen flex items-center">
                <Image
                    src="/images/hero-home.jpg"
                    alt="Modern property exterior"
                    fill
                    priority
                    fetchPriority="high"
                    sizes="100vw"
                    className="object-cover"
                    quality={75}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-32 sm:py-40 w-full">
                    <div className="max-w-3xl">
                        <div className="gold-line mb-8" />
                        <h1 className="text-white mb-6 leading-tight">
                            Elevating Property <br />
                            <span className="text-gold">Standards</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-neutral-300 mb-10 max-w-xl leading-relaxed">
                            We provide professional cleaning, maintenance and renovation.
                            All our services are delivered with the utmost precision and professionalism.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#services" className="btn btn-gold">
                                Our Services
                            </Link>
                            <Link href="#contact" className="btn border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors no-underline">
                                Get in Touch
                            </Link>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 mt-8">
                            <a href="tel:416-890-2807" className="flex items-center gap-3 text-white hover:text-gold transition-colors no-underline">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <span className="text-sm font-medium">416-890-2807</span>
                            </a>
                            <a href="mailto:info@m2propertyservices.ca" className="flex items-center gap-3 text-white hover:text-gold transition-colors no-underline">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <span className="text-sm font-medium">info@m2propertyservices.ca</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </section>

            {/* Services Section */}
            <section id="services" className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                            What We Do
                        </p>
                        <h2 className="text-black mb-4">Our Services</h2>
                        <div className="gold-line mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group p-8 border border-neutral-200 hover:border-gold transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="text-gold mb-6">{service.icon}</div>
                                <h3 className="text-lg mb-3">{service.title}</h3>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="section-padding bg-neutral-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Image/Brand block */}
                        <div className="relative">
                            <div className="bg-black p-16 sm:p-20 flex items-center justify-center aspect-square max-w-md mx-auto lg:mx-0">
                                <Image
                                    src="/images/m2-logo-dark.png"
                                    alt="M2 Property Services"
                                    width={300}
                                    height={300}
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold -z-10 max-w-md mx-auto lg:mx-0 hidden sm:block" />
                        </div>

                        {/* Right: Content */}
                        <div>
                            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                                About Us
                            </p>
                            <h2 className="text-black mb-6">
                                Built on Trust, <br />Driven by Excellence
                            </h2>
                            <div className="gold-line mb-8" />
                            <div className="space-y-4 text-neutral-600 leading-relaxed">
                                <p>
                                    M2 Property Services was founded with a clear vision: to bring a higher
                                    standard of professionalism and care to property services. We believe
                                    that every property deserves expert attention, and every client
                                    deserves a partner they can trust.
                                </p>
                                <p>
                                    Our team combines deep industry knowledge with a commitment to
                                    personalised service. Whether you need professional cleaning,
                                    responsive maintenance, or a complete renovation, we approach every
                                    project with the same dedication to quality.
                                </p>
                            </div>
                            <Link href="#contact" className="btn btn-primary mt-8">
                                Work With Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section id="why-us" className="section-padding bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                            The M2 Difference
                        </p>
                        <h2 className="text-white mb-4">Why Choose Us</h2>
                        <div className="gold-line mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="flex gap-6 p-6 border border-neutral-800 hover:border-gold transition-colors"
                            >
                                <span className="text-gold font-sans text-3xl font-bold shrink-0">
                                    {reason.number}
                                </span>
                                <div>
                                    <h3 className="text-white text-lg mb-2">{reason.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact / CTA Section */}
            <section id="contact" className="section-padding bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                        Get Started
                    </p>
                    <h2 className="text-black mb-6">Let&apos;s Discuss Your Property</h2>
                    <div className="gold-line mx-auto mb-8" />
                    <p className="text-neutral-600 leading-relaxed mb-10 max-w-xl mx-auto">
                        Ready to elevate your property? Get in touch with our team to discuss
                        your requirements and discover how M2 Property Services can help.
                    </p>

                    <ContactForm />
                </div>
            </section>
        </>
    );
}
