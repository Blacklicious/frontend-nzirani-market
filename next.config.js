/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['storage.googleapis.com','api.nzirani.com','localhost','pixabay.com', 'images.unsplash.com','example.com'],
        loader: 'default'  // Or any other loader if configured
    },
}

module.exports = nextConfig
