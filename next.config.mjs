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
            },
            {
                hostname:"static.wixstatic.com"
            },
            {
                hostname:"wix:image://v1"
            }
        ]
    }
};

export default nextConfig;
