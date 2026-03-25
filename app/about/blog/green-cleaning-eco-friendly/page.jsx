import Link from 'next/link';

export const metadata = {
    title: 'Green Cleaning: Eco-Friendly Products That Actually Work',
    description: 'Discover eco-friendly cleaning products that deliver real results. Learn how green cleaning protects your family and the environment without compromise.',
    alternates: {
        canonical: '/about/blog/green-cleaning-eco-friendly',
    },
};

export default function GreenCleaningPost() {
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
                        Green Cleaning: Eco-Friendly Products That Actually Work
                    </h1>
                    <p className="text-neutral-400 text-sm uppercase tracking-widest">February 12, 2026</p>
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </section>

            {/* Article Content */}
            <article className="section-padding bg-white">
                <div className="max-w-3xl mx-auto prose-custom">
                    <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                        Sustainability matters to us and our clients. We have tested dozens of eco-friendly cleaning products and narrowed it down to the ones that deliver professional-grade results without the harsh chemicals. Here is everything you need to know about making the switch to green cleaning without sacrificing cleanliness.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">Why Green Cleaning Matters</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        Traditional cleaning products often contain volatile organic compounds (VOCs), ammonia, chlorine, and other harsh chemicals that can irritate skin, eyes, and respiratory systems. These chemicals do not just affect the person doing the cleaning — they linger in the air and on surfaces for hours or even days after application. For homes with children, pets, elderly residents, or anyone with allergies or asthma, these residues pose real health risks. Beyond personal health, these chemicals eventually make their way into our water systems and soil, contributing to broader environmental damage.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">The Myth of "Green Means Weak"</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        The biggest misconception about eco-friendly cleaning products is that they do not work as well as their chemical-heavy counterparts. A decade ago, there may have been some truth to this. But the green cleaning industry has made enormous strides. Modern plant-based surfactants, enzymatic cleaners, and naturally derived disinfectants deliver results that match or exceed traditional products. At M2, we have spent years testing products in real-world conditions — on actual grease, real stains, and genuine grime — and we have found formulations that consistently perform at a professional level.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">Our Top Green Cleaning Solutions</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        <strong className="text-black">Enzymatic All-Purpose Cleaners:</strong> These use naturally occurring enzymes to break down organic matter like food, grease, and biological stains. They are incredibly effective on kitchen surfaces, bathroom fixtures, and general-purpose cleaning. The enzymes continue working even after application, providing ongoing cleaning action that chemical sprays cannot match.
                    </p>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        <strong className="text-black">Plant-Based Disinfectants:</strong> Thymol (derived from thyme oil) and citric acid-based disinfectants have been proven to kill ninety-nine percent of common household bacteria and viruses. These products carry EPA registration and meet the same efficacy standards as chemical disinfectants while being safe for food contact surfaces and leaving a pleasant natural scent.
                    </p>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        <strong className="text-black">Microfibre Technology:</strong> While not a product per se, high-quality microfibre cloths and mops are a cornerstone of green cleaning. The ultra-fine fibres mechanically remove bacteria and dirt with just water, reducing chemical usage by up to ninety percent. Our professional-grade microfibre systems capture particles as small as one micron, including bacteria and allergens.
                    </p>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        <strong className="text-black">Hydrogen Peroxide Cleaners:</strong> Stabilised hydrogen peroxide solutions are excellent for bathroom sanitisation, stain removal, and brightening. They break down into just water and oxygen, leaving zero harmful residues. We use these extensively in bathroom and kitchen deep cleans.
                    </p>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        <strong className="text-black">Vinegar and Baking Soda:</strong> The classics still have their place. White vinegar is an excellent descaler and glass cleaner, while baking soda is a gentle abrasive perfect for scrubbing sinks, tubs, and ovens. Combined, they create an effective and completely non-toxic cleaning reaction.
                    </p>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">Making the Switch: Tips for Homeowners</h2>
                    <p className="text-neutral-600 leading-relaxed mb-4">
                        Transitioning to green cleaning does not have to happen overnight. Here are some practical steps:
                    </p>
                    <ul className="list-disc list-inside text-neutral-600 space-y-2 mb-6 ml-4">
                        <li>Start by replacing your most frequently used products first</li>
                        <li>Invest in quality microfibre cloths — they are reusable and incredibly effective</li>
                        <li>Read labels carefully — look for third-party certifications like EcoLogo or Green Seal</li>
                        <li>Avoid products that use the word "fragrance" without specifying the source — this often hides synthetic chemicals</li>
                        <li>Give new products a fair trial — some work differently than what you are used to</li>
                        <li>Consider concentrates over pre-mixed solutions to reduce plastic waste</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-black mb-4 mt-10">Our Green Cleaning Commitment</h2>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                        At M2 Property Services, we offer green cleaning as an option for every service we provide. Our team is trained in proper product selection and application to ensure you get the same sparkling results you expect from a professional cleaning service, with none of the chemical concerns. We believe that a clean home and a clean environment should not be mutually exclusive, and we are proud to offer our clients the choice to clean responsibly.
                    </p>

                    <div className="border-t border-neutral-200 pt-8 mt-12">
                        <p className="text-neutral-600 leading-relaxed">
                            Interested in switching to eco-friendly cleaning for your home or business? <Link href="/#contact" className="text-gold font-semibold hover:text-gold-light transition-colors">Contact M2 Property Services</Link> to learn about our green cleaning options and get a free quote.
                        </p>
                    </div>
                </div>
            </article>

            {/* CTA */}
            <section className="section-padding bg-black text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Clean Green</p>
                    <h2 className="text-white mb-6">Try Our Eco-Friendly Cleaning Service</h2>
                    <div className="gold-line mx-auto mb-8" />
                    <Link href="/#contact" className="btn btn-gold">Get a Free Quote</Link>
                </div>
            </section>
        </>
    );
}
