import Link from 'next/link';

export const metadata = {
    title: 'Preparing Your Rental Property Between Tenants',
    description: 'A complete guide to preparing your rental property between tenants. Covers deep cleaning, repairs, inspections, and turnover best practices.',
    alternates: {
        canonical: '/about/blog/preparing-rental-between-tenants',
    },
};

export default function PreparingRentalPost() {
    return (
        <>
            {/* Hero */}
            <section className="relative bg-black text-white min-h-[50vh] flex items-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80)' }}
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 py-32 sm:py-36 w-full">
                    <Link href="/about/blog" className="text-gold text-sm font-semibold uppercase tracking-widest mb-4 inline-flex items-center gap-2 no-underline hover:text-gold-light transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Back to Blog
                    </Link>
                    <div className="gold-line my-6" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 inline-block mb-4">
                        Property Management
                    </span>
                    <h1 className="text-white mb-4 leading-tight">
                        Preparing Your Rental Property Between Tenants
                    </h1>
                    <p className="text-neutral-400 text-sm uppercase tracking-widest">February 20, 2026</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </section>

            {/* Article Content */}
            <article className="section-padding bg-white">
                <div className="max-w-3xl mx-auto prose-custom">
                    <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                        Tenant turnover can be stressful for landlords. A thorough cleaning and maintenance checklist ensures your property is move-in ready and makes a strong first impression on prospective renters. Here is our comprehensive guide to turning over a rental property efficiently and effectively.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">The Move-Out Inspection</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Everything starts with a detailed move-out inspection. Walk through the property with a checklist and your original move-in documentation, noting any damage beyond normal wear and tear. Take photos and videos of every room, focusing on walls, floors, fixtures, and appliances. This documentation protects you in security deposit disputes and helps you plan the scope of work needed before the next tenant moves in. Be thorough but fair — paint scuffs in high-traffic areas and minor carpet wear are generally considered normal wear and tear.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">Professional Deep Cleaning is Non-Negotiable</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Regardless of how clean the previous tenant left the unit, a professional deep clean is essential. This is not a quick wipe-down — it should include scrubbing kitchen appliances inside and out, sanitising bathrooms, cleaning inside all cabinets and closets, washing windows, cleaning light fixtures, and shampooing carpets or mopping hard floors. First impressions matter enormously. A prospective tenant who walks into a spotless unit is more likely to sign a lease at your asking price and treat the property with respect during their tenancy.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">Paint and Patch</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Fresh paint is one of the most cost-effective ways to make a rental unit feel new. At minimum, touch up any scuffs, marks, and nail holes. If the walls have not been painted in two or more years, consider a full repaint — it is a relatively small investment that pays significant dividends in perceived value. Stick to neutral colours like warm whites, light greys, or soft beiges that appeal to the widest range of tenants and make spaces feel larger and brighter.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">Flooring Assessment</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Inspect all flooring carefully. Hardwood floors may need refinishing or at least a professional buff and coat. Carpets should be professionally steam cleaned, and if they are beyond restoration, replacement is necessary. Tile and grout should be deep cleaned and resealed. Damaged vinyl or laminate sections should be replaced. Flooring is one of the first things prospective tenants notice, and worn, stained, or damaged floors will immediately lower their perception of the entire property.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">Appliance and Fixture Check</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Test every appliance, faucet, light switch, outlet, and door lock. Replace any burnt-out light bulbs, fix dripping faucets, tighten loose handles, and ensure all appliances are in good working order. Check that the smoke detectors and carbon monoxide detectors have fresh batteries and are functioning properly — this is not just good practice, it is a legal requirement in Ontario. Replace any fixtures that look dated or worn; modern, clean fixtures are an inexpensive upgrade that significantly improves the feel of a unit.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">The Turnover Checklist</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        Here is a comprehensive checklist to ensure nothing is missed:
                    </p>
                    <ul className="list-disc list-inside text-neutral-600 space-y-2 mb-6 ml-4">
                        <li>Complete move-out inspection with photo documentation</li>
                        <li>Professional deep cleaning of entire unit</li>
                        <li>Carpet cleaning or replacement as needed</li>
                        <li>Paint touch-ups or full repaint</li>
                        <li>All appliances tested and cleaned inside and out</li>
                        <li>Plumbing checked — no leaks, drains flowing freely</li>
                        <li>HVAC filter replaced, system tested</li>
                        <li>Smoke and CO detectors tested with fresh batteries</li>
                        <li>All locks rekeyed for security</li>
                        <li>Windows cleaned inside and out</li>
                        <li>Exterior areas cleaned and maintained</li>
                        <li>Final walkthrough before listing or showing</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">Timing is Everything</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Every day your unit sits vacant is lost revenue. Having a reliable team of professionals who can execute a turnover quickly and thoroughly is worth its weight in gold. At M2 Property Services, we offer complete turnover packages that include deep cleaning, minor repairs, and coordination with painting and flooring contractors. Our goal is to get your property market-ready in the shortest time possible without cutting any corners.
                    </p>

                    <div className="border-t border-neutral-200 pt-8 mt-12">
                        <p className="text-neutral-600 leading-relaxed">
                            Need help turning over a rental property? <Link href="/#contact" className="text-gold font-semibold hover:text-gold-light transition-colors">Contact M2 Property Services</Link> for a fast, thorough turnover clean that gets your unit rented faster.
                        </p>
                    </div>
                </div>
            </article>

            {/* CTA */}
            <section className="section-padding bg-black text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Minimize Vacancy Time</p>
                    <h2 className="text-white mb-6">Get Your Property Move-In Ready</h2>
                    <div className="gold-line mx-auto mb-8" />
                    <Link href="/#contact" className="btn btn-gold">Get a Free Quote</Link>
                </div>
            </section>
        </>
    );
}
