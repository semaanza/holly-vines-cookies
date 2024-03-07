module.exports = {
  images: {
    remotePatterns: [
      {
        port: "",
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        port: "3000",
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};
