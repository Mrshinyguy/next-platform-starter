import FAQContent from './faq-content';

export const metadata = {
    title: 'FAQ',
    description: 'Frequently asked questions about M2 Property Services. Find answers about pricing, scheduling, service areas, and more.',
    alternates: { canonical: '/about/faq' },
};

export default function FAQPage() {
    return <FAQContent />;
}
