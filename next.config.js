/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.galxe.com',
        port: '',
        pathname: 'galaxy/avatar/',
      },
    ],
  }, 
}

module.exports = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.galxe.com',
        port: '',
        pathname: '/galaxy/tomo/**',
            },
    {
    protocol: 'https',
    hostname: 'cdn.galxe.com',
    port: '',
    pathname: '/galaxy/avatar/**',
        },
    {
    protocol: 'https',
    hostname: 'cdn.galxe.com',
    port: '',
    pathname: '/galaxy/lightlink/**',
        },
    {
    protocol: 'https',
    hostname: 'cdn.galxe.com',
    port: '',
    pathname: '/galaxy/stargatefinance/**',
        },
    {
    protocol: 'https',
    hostname: 'cdn.galxe.com',
    port: '',
    pathname: '/galaxy/rehold/**',
    },
    ],     
  }, 
}
