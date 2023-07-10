/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sentry: {
        autoInstrumentServerFunctions: false,
    },
}

module.exports = { nextConfig, images: { loader: "custom" } }
