/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "m.media-amazon.com"
            },
            {
                hostname:"images.pexels.com"
            },
            {
                hostname:"i.etsystatic.com"
            }
        ]
    }
};

export default nextConfig;
