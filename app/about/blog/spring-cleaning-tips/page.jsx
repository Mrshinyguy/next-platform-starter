import Link from 'next/link';

export const metadata = {
    title: '10 Spring Cleaning Tips Every Homeowner Should Know',
    description: 'Discover 10 essential spring cleaning tips to refresh your home. From deep cleaning carpets to decluttering, get your property ready for the season.',
    alternates: {
        canonical: '/about/blog/spring-cleaning-tips',
    },
};

export default function SpringCleaningTipsPost() {
    return (
        <>
            {/* Hero */}
            <section className="bg-black text-white min-h-[50vh] flex items-center">
                <div className="max-w-4xl mx-auto px-6 sm:px-12 py-32 sm:py-36 w-full">
                    <Link href="/about/blog" className="text-gold text-sm font-semibold uppercase tracking-widest mb-4 inline-flex items-center gap-2 no-underline hover:text-gold-light transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Back to Blog
                    </Link>
                    <div className="gold-line my-6" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 inline-block mb-4">
                        Cleaning Tips
                    </span>
                    <h1 className="text-white mb-4 leading-tight">
                        10 Spring Cleaning Tips Every Homeowner Should Know
                    </h1>
                    <p className="text-neutral-400 text-sm uppercase tracking-widest">March 15, 2026</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </section>

            {/* Article Content */}
            <article className="section-padding bg-white">
                <div className="max-w-3xl mx-auto prose-custom">
                    <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                        Spring is the perfect time to deep clean your home and reset for the warmer months ahead. After a long Canadian winter of closed windows and recirculated air, your home is likely harbouring more dust, allergens, and grime than you realize. Here are ten essential tips that our professional cleaning team at M2 Property Services swears by to get every room looking its best.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">1. Start from the Top Down</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Always clean from ceiling to floor. Begin with ceiling fans, light fixtures, and crown mouldings before working your way down to surfaces and floors. This way, any dust or debris that falls gets cleaned up as you move lower. Many homeowners make the mistake of vacuuming first and then dusting, only to find their freshly cleaned floors covered in a new layer of dust.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">2. Tackle Your Windows Early</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        After months of winter weather, your windows are likely coated in grime, salt residue, and water spots. Clean both the interior and exterior panes using a solution of vinegar and water, or hire a professional window cleaning service for streak-free results. Do not forget to wipe down the tracks, sills, and frames — they accumulate significant debris over the winter months.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">3. Deep Clean Your Carpets</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Winter boots track in salt, mud, and moisture that gets ground deep into carpet fibres. A professional hot water extraction cleaning removes these embedded contaminants, reviving both the appearance and the smell of your carpets. This is especially important if you have pets or young children who spend time on the floor.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">4. Declutter Before You Clean</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Go through each room and sort items into keep, donate, and discard piles. Cluttered spaces are harder to clean thoroughly, and spring is the ideal time to let go of things you no longer need. Start with one room at a time to avoid feeling overwhelmed. A good rule of thumb: if you have not used or worn it in the past year, it is time to part with it.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">5. Do Not Forget Your Appliances</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Pull your refrigerator away from the wall and vacuum the condenser coils. Clean the inside of your oven, microwave, and dishwasher. Wipe down the exterior of all appliances. Run a cleaning cycle on your washing machine with hot water and vinegar. These tasks are easy to overlook but make a significant difference in kitchen hygiene and appliance efficiency.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">6. Refresh Your Mattresses</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Strip all bedding and vacuum your mattress thoroughly. Sprinkle baking soda over the surface, let it sit for at least 30 minutes to absorb odours, then vacuum it up. This simple step can dramatically improve your sleep quality. Consider flipping or rotating your mattress as well, and wash all pillows and duvets according to their care labels.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">7. Clean Your Air Vents and Replace Filters</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Your HVAC system has been working overtime all winter. Remove vent covers and wash them in warm soapy water. Replace your furnace filter — a clogged filter forces your system to work harder and circulates dust throughout your home. If you have not had your ducts cleaned in a few years, spring is an excellent time to schedule that service.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">8. Address Your Outdoor Spaces</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Power wash your driveway, walkways, and patio to remove winter salt stains and algae growth. Clean outdoor furniture, sweep the garage, and clear any debris from your yard. First impressions matter, and a clean exterior sets the tone for your entire property. Check for any winter damage to siding, gutters, and downspouts while you are at it.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">9. Organize Your Storage Areas</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Basements, attics, garages, and closets tend to become dumping grounds over the winter. Take everything out, sort it, and put it back in an organized fashion. Invest in clear storage bins so you can see what is inside without opening each one. Label everything and create designated zones for seasonal items, sports equipment, and holiday decorations.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">10. Consider Hiring Professionals</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Some tasks are best left to the experts. Professional deep cleaning services can tackle areas you might miss and use commercial-grade equipment that delivers superior results. At M2 Property Services, our spring cleaning packages are designed to cover every inch of your home, from ceiling to floor, leaving you with a fresh, healthy living environment to enjoy all season long.
                    </p>

                    <div className="border-t border-neutral-200 pt-8 mt-12">
                        <p className="text-neutral-600 leading-relaxed">
                            Ready to give your home a professional spring cleaning? <Link href="/#contact" className="text-gold font-semibold hover:text-gold-light transition-colors">Contact M2 Property Services</Link> today for a free quote and let us handle the hard work for you.
                        </p>
                    </div>
                </div>
            </article>

            {/* CTA */}
            <section className="section-padding bg-black text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Ready to Get Started?</p>
                    <h2 className="text-white mb-6">Book Your Spring Cleaning Today</h2>
                    <div className="gold-line mx-auto mb-8" />
                    <Link href="/#contact" className="btn btn-gold">Get a Free Quote</Link>
                </div>
            </section>
        </>
    );
}
