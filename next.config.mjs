/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: 'standalone',
    images: {
        domains: ["i.ibb.co"],
    },
    experimental: {
        serverActions: {
            allowedOrigins: ['localhost:3005', '192.168.80.10:3005', 'wesendemail.online'],
        },
    },
};

export default nextConfig;
