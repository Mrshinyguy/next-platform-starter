export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/blobs/', '/classics/', '/edge/', '/image-cdn/', '/middleware/', '/revalidation/', '/routing/'],
            },
        ],
        sitemap: 'https://m2propertyservices.ca/sitemap.xml',
    };
}
