/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "icons.veryicon.com",
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            }
        ]
    }
};

export default nextConfig;
