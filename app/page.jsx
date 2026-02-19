import Image from 'next/image';
import Link from 'next/link';

const services = [
    {
        title: 'Property Management',
        description:
            'Comprehensive management solutions that protect your investment and maximise returns. From tenant relations to financial reporting, we handle every detail.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
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
        title: 'Consulting',
        description:
            'Strategic property advice tailored to your goals. Whether buying, selling, or optimising your portfolio, our expertise guides your decisions.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
            </svg>
        ),
    },
];

const reasons = [
    { number: '01', title: 'Attention to Detail', description: 'Every project receives meticulous care and precision, ensuring nothing is overlooked.' },
    { number: '02', title: 'Trusted Expertise', description: 'Years of industry experience delivering results that exceed expectations.' },
    { number: '03', title: 'Client-First Approach', description: 'Your vision and goals are at the centre of everything we do.' },
    { number: '04', title: 'End-to-End Service', description: 'From initial consultation to project completion, we manage the entire process seamlessly.' },
];

export default function Page() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-black text-white min-h-screen flex items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-32 sm:py-40 w-full">
                    <div className="max-w-3xl">
                        <div className="gold-line mb-8" />
                        <h1 className="text-white mb-6 leading-tight">
                            Elevating Property <br />
                            <span className="text-gold">Standards</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-neutral-300 mb-10 max-w-xl leading-relaxed">
                            Premium property management, maintenance, and renovation services
                            delivered with precision and professionalism.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#services" className="btn btn-gold">
                                Our Services
                            </Link>
                            <Link href="#contact" className="btn border-2 border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors no-underline">
                                Get in Touch
                            </Link>
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
                                    personalised service. Whether you need ongoing property management,
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
                                <span className="text-gold font-serif text-3xl font-bold shrink-0">
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

                    <form className="text-left space-y-6 max-w-lg mx-auto" name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 border border-neutral-300 text-neutral-900 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 border border-neutral-300 text-neutral-900 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                                    placeholder="Your email"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full px-4 py-3 border border-neutral-300 text-neutral-900 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                                placeholder="Your phone number"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                className="w-full px-4 py-3 border border-neutral-300 text-neutral-900 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors resize-none"
                                placeholder="Tell us about your property needs..."
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-full">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
