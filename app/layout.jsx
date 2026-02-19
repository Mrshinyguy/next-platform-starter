import '../styles/globals.css';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const metadata = {
    title: {
        template: '%s | M2 Property Services',
        default: 'M2 Property Services | Premium Property Solutions',
    },
    description:
        'M2 Property Services delivers premium property management, maintenance, and renovation solutions with unmatched professionalism and attention to detail.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased">
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
