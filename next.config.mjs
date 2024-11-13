/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config, { isServer }) {
        // Support importing SVG as React component
        config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
        });
        return config;
    },
    trailingSlash: true,
};

export default nextConfig;
