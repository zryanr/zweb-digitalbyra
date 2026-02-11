/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  async redirects() {
    return [
      {
        source: "/blogg",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/cases",
        destination: "/case",
        permanent: true,
      },
      {
        source: "/kontakt-oss",
        destination: "/kontakt",
        permanent: true,
      },
      {
        source: "/tjenester",
        destination: "/nettside-for-bedrift",
        permanent: true,
      },
      {
        source: "/webdesign",
        destination: "/webdesign-byra",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
