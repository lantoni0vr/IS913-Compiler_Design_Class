/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "png.pngtree.com"
            },
            {
                protocol: "https",
                hostname: "images.unplash.com"
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com"
            },
        ]
    }
};

export default nextConfig;
