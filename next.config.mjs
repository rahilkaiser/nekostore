/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "m.media-amazon.com"
            },
            {
                hostname:"images.pexels.com"
            }
        ]
    }
};

export default nextConfig;
