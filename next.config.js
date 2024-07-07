/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['storage.googleapis.com',`${process.env.NEXT_PUBLIC_BACKEND_API}`,'localhost','pixabay.com', 'images.unsplash.com','example.com'],
        loader: 'default'  // Or any other loader if configured
    },
}

module.exports = nextConfig
