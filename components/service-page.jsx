import Link from 'next/link';
import { ContactForm } from './contact-form';

export function ServicePage({ title, subtitle, description, features, process, benefits, ctaText, heroImage, heroPosition }) {
    return (
        <>
            {/* Hero */}
            <section className="relative bg-black text-white min-h-[70vh] flex items-center">
                {heroImage && (
                    <div
                        className="absolute inset-0 bg-cover"
                        style={{ backgroundImage: `url(${heroImage})`, backgroundPosition: heroPosition || 'center' }}
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-32 sm:py-40 w-full">
                    <div className="max-w-3xl">
                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                            {subtitle}
                        </p>
                        <h1 className="text-white mb-6 leading-tight">{title}</h1>
                        <div className="gold-line mb-8" />
                        <p className="text-lg text-neutral-300 leading-relaxed max-w-xl">
                            {description}
                        </p>
                        <Link href="/#contact" className="btn btn-gold mt-8">
                            Get a Free Quote
                        </Link>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </section>

            {/* Features Grid */}
            {features && features.length > 0 && (
                <section className="section-padding bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                                What&apos;s Included
                            </p>
                            <h2 className="text-black mb-4">Our {title} Services</h2>
                            <div className="gold-line mx-auto" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, i) => (
                                <div
                                    key={i}
                                    className="group p-8 border border-neutral-200 hover:border-gold transition-all duration-300 hover:shadow-lg"
                                >
                                    <div className="text-gold text-3xl mb-4">{feature.icon}</div>
                                    <h3 className="text-lg mb-3">{feature.title}</h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Process */}
            {process && process.length > 0 && (
                <section className="section-padding bg-neutral-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                                How It Works
                            </p>
                            <h2 className="text-black mb-4">Our Process</h2>
                            <div className="gold-line mx-auto" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {process.map((step, i) => (
                                <div key={i} className="text-center">
                                    <span className="text-gold font-sans text-4xl font-bold">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-lg mt-4 mb-3">{step.title}</h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Benefits */}
            {benefits && benefits.length > 0 && (
                <section className="section-padding bg-black text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                                Why M2
                            </p>
                            <h2 className="text-white mb-4">Why Choose Us</h2>
                            <div className="gold-line mx-auto" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, i) => (
                                <div
                                    key={i}
                                    className="p-6 border border-neutral-800 hover:border-gold transition-colors"
                                >
                                    <h3 className="text-white text-lg mb-2">{benefit.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA / Contact */}
            <section className="section-padding bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                        Get Started
                    </p>
                    <h2 className="text-black mb-6">
                        {ctaText || `Ready for Professional ${title}?`}
                    </h2>
                    <div className="gold-line mx-auto mb-8" />
                    <p className="text-neutral-600 leading-relaxed mb-10 max-w-xl mx-auto">
                        Contact us today for a free, no-obligation quote. Our team is ready to deliver
                        exceptional results for your property.
                    </p>
                    <ContactForm />
                </div>
            </section>
        </>
    );
}
