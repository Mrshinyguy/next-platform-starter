import Link from 'next/link';

export const metadata = {
    title: 'Blog',
    description: 'Cleaning tips, property maintenance advice, and industry insights from the M2 Property Services team in Toronto.',
    alternates: { canonical: '/about/blog' },
};

const posts = [
    {
        title: '10 Spring Cleaning Tips Every Homeowner Should Know',
        slug: 'spring-cleaning-tips',
        date: 'March 15, 2026',
        category: 'Cleaning Tips',
        excerpt:
            'Spring is the perfect time to deep clean your home and reset for the warmer months ahead. Here are ten essential tips that our professional cleaning team swears by to get every room looking its best.',
    },
    {
        title: 'How Often Should You Schedule Professional Cleaning?',
        slug: 'how-often-professional-cleaning',
        date: 'March 8, 2026',
        category: 'Property Maintenance',
        excerpt:
            'One of the most common questions we receive from clients is how frequently they should book a professional cleaning service. The answer depends on several factors including property type, foot traffic, and your personal standards.',
    },
    {
        title: 'The Hidden Costs of Neglecting Property Maintenance',
        slug: 'hidden-costs-neglecting-maintenance',
        date: 'February 28, 2026',
        category: 'Industry Insights',
        excerpt:
            'Skipping routine maintenance might save money in the short term, but the long-term costs can be staggering. From water damage to pest infestations, here is why preventative care is always the smarter investment.',
    },
    {
        title: 'Preparing Your Rental Property Between Tenants',
        slug: 'preparing-rental-between-tenants',
        date: 'February 20, 2026',
        category: 'Property Management',
        excerpt:
            'Tenant turnover can be stressful for landlords. A thorough cleaning and maintenance checklist ensures your property is move-in ready and makes a strong first impression on prospective renters.',
    },
    {
        title: 'Green Cleaning: Eco-Friendly Products That Actually Work',
        slug: 'green-cleaning-eco-friendly',
        date: 'February 12, 2026',
        category: 'Cleaning Tips',
        excerpt:
            'Sustainability matters to us and our clients. We have tested dozens of eco-friendly cleaning products and narrowed it down to the ones that deliver professional-grade results without the harsh chemicals.',
    },
    {
        title: 'Why Toronto Businesses Are Investing in Professional Cleaning',
        slug: 'toronto-businesses-professional-cleaning',
        date: 'February 5, 2026',
        category: 'Industry Insights',
        excerpt:
            'The commercial cleaning industry in Toronto is booming, and for good reason. A clean workspace boosts employee productivity, impresses clients, and reduces sick days. Here is why more businesses are making the switch.',
    },
];

export default function BlogPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-black text-white min-h-[60vh] flex items-center">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80)' }} />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-32 sm:py-40 w-full">
                    <div className="max-w-3xl">
                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                            Insights
                        </p>
                        <div className="gold-line mb-8" />
                        <h1 className="text-white mb-6 leading-tight">
                            The M2 <span className="text-gold">Blog</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-neutral-300 max-w-xl leading-relaxed">
                            Tips, insights, and industry knowledge from the M2 Property
                            Services team. Stay informed and keep your property at its best.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </section>

            {/* Blog Grid */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                            Latest Posts
                        </p>
                        <h2 className="text-black mb-4">From Our Team</h2>
                        <div className="gold-line mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <article
                                key={index}
                                className="group border border-neutral-200 hover:border-gold transition-all duration-300 hover:shadow-lg flex flex-col"
                            >
                                {/* Gold top border */}
                                <div className="h-1 bg-gold" />

                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-xs font-semibold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1">
                                            {post.category}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-black mb-3 group-hover:text-gold transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">
                                        {post.date}
                                    </p>

                                    <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href={`/about/blog/${post.slug}`}
                                        className="text-gold text-sm font-semibold uppercase tracking-widest hover:text-gold-light transition-colors inline-flex items-center gap-2 no-underline"
                                    >
                                        Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section-padding bg-black text-white">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
                        Stay Updated
                    </p>
                    <h2 className="text-white mb-6">Never Miss a Post</h2>
                    <div className="gold-line mx-auto mb-8" />
                    <p className="text-neutral-300 leading-relaxed mb-10 max-w-xl mx-auto">
                        Get the latest cleaning tips, property maintenance advice, and
                        industry insights delivered straight to your inbox.
                    </p>
                    <Link href="/#contact" className="btn btn-gold">
                        Get In Touch
                    </Link>
                </div>
            </section>
        </>
    );
}
