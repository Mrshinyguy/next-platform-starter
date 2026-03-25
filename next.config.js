/** @type {import('next').NextConfig} */
const nextConfig = {
    reactCompiler: true,
    compress: true,
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    headers: async () => [
        {
            source: '/images/(.*)',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'public, max-age=31536000, immutable',
                },
            ],
        },
        {
            source: '/_next/static/(.*)',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'public, max-age=31536000, immutable',
                },
            ],
        },
    ],
};

export default nextConfig;
