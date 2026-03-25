'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ContactForm } from '../../../components/contact-form';

const faqs = [
    {
        question: 'What services does M2 Property Services offer?',
        answer:
            'We offer a comprehensive range of property services including professional residential and commercial cleaning, property maintenance and repairs, renovations, and scheduled maintenance programmes. Whether you need a one-time deep clean or an ongoing service plan, we have you covered.',
    },
    {
        question: 'What areas do you serve?',
        answer:
            'We proudly serve the Greater Toronto Area including Toronto, Scarborough, North York, Etobicoke, Mississauga, Brampton, Vaughan, Markham, and surrounding communities. If you are unsure whether we service your area, please reach out and we will be happy to confirm.',
    },
    {
        question: 'How do I get a quote?',
        answer:
            'Getting a quote is easy. You can fill out our contact form, call us directly, or send us an email with details about your property and the services you need. We will respond within 24 hours with a customised quote. For larger projects, we may schedule a free on-site assessment.',
    },
    {
        question: 'How is pricing determined?',
        answer:
            'Our pricing is based on the size of the property, the type of service required, the frequency of visits, and any special requirements. We provide transparent, upfront pricing with no hidden fees. Every client receives a detailed quote before any work begins.',
    },
    {
        question: 'Do I need to be home during the cleaning?',
        answer:
            'No, you do not need to be home. Many of our clients provide us with a key or access code. Our team members are fully vetted, insured, and trusted to work independently. We can also arrange a lock box or coordinate access through your property manager.',
    },
    {
        question: 'What cleaning products do you use?',
        answer:
            'We use professional-grade, eco-friendly cleaning products that are effective and safe for your family, pets, and the environment. If you have specific product preferences or allergies, we are happy to accommodate your needs.',
    },
    {
        question: 'Can I customise my cleaning plan?',
        answer:
            'Absolutely. Every property is different, and we tailor our services to match your specific needs. Whether you want to focus on certain rooms, add extra services, or set a custom schedule, we will build a plan that works for you.',
    },
    {
        question: 'How do I schedule or reschedule a service?',
        answer:
            'You can schedule or reschedule services by contacting us via phone, email, or our online contact form. We ask for at least 24 hours notice for rescheduling. We understand that plans change and we do our best to accommodate your needs.',
    },
    {
        question: 'Are your team members insured and background-checked?',
        answer:
            'Yes. Every M2 team member undergoes a thorough background check and is fully insured. We take the safety and security of your property seriously and only hire individuals who meet our high standards of professionalism and trustworthiness.',
    },
    {
        question: 'What if I am not satisfied with the service?',
        answer:
            'Your satisfaction is our top priority. If you are not completely happy with any aspect of our service, contact us within 24 hours and we will return to address the issue at no additional charge. We stand behind our work with a satisfaction guarantee.',
    },
    {
        question: 'Do you offer services for commercial properties?',
        answer:
            'Yes, we provide cleaning and maintenance services for a wide range of commercial properties including offices, retail spaces, restaurants, medical facilities, and multi-unit residential buildings. We offer flexible scheduling to minimise disruption to your business operations.',
    },
    {
        question: 'How far in advance should I book?',
        answer:
            'We recommend booking at least 48 to 72 hours in advance to secure your preferred date and time. For recurring services, we set up a regular schedule so you never have to worry about rebooking. Same-day and next-day services may be available depending on availability.',
    },
];

function FAQItem({ faq, isOpen, onToggle }) {
    return (
        <div className="border border-neutral-200 hover:border-gold transition-colors">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-neutral-50 transition-colors cursor-pointer"
            >
                <span className="text-black font-semibold pr-4">{faq.question}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed border-t border-neutral-100 pt-4">
                    {faq.answer}
                </div>
            </div>
        </div>
    );
}

export default function FAQContent() {
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-black text-white min-h-[60vh] flex items-center">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80)' }} />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-32 sm:py-40 w-full">
                    <div className="max-w-3xl">
                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                            Support
                        </p>
                        <div className="gold-line mb-8" />
                        <h1 className="text-white mb-6 leading-tight">
                            Frequently Asked <span className="text-gold">Questions</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-neutral-300 max-w-xl leading-relaxed">
                            Everything you need to know about M2 Property Services. Can not
                            find your answer? Reach out to our team directly.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                            Answers
                        </p>
                        <h2 className="text-black mb-4">Common Questions</h2>
                        <div className="gold-line mx-auto" />
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                faq={faq}
                                isOpen={openIndex === index}
                                onToggle={() => handleToggle(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-neutral-50">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                        Still Have Questions?
                    </p>
                    <h2 className="text-black mb-6">We Are Here to Help</h2>
                    <div className="gold-line mx-auto mb-8" />
                    <p className="text-neutral-600 leading-relaxed mb-10 max-w-xl mx-auto">
                        Could not find what you were looking for? Send us a message and our
                        team will get back to you within 24 hours.
                    </p>
                    <ContactForm />
                </div>
            </section>
        </>
    );
}
