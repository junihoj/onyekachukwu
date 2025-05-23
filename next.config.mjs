/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV == 'production'
const nextConfig = {
    // basePath: isProd? '/onyekachukwu': '',
    output:"export",
    distDir: 'dist',
    images:{
        optimized:true
    }
};

export default nextConfig;
