// @ts-check

const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const { withNx } = require("@nrwl/next/plugins/with-nx");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  webpack(config, { isServer }) {
    const subpath = isServer ? "ssr" : "chunks";

    config.cache = false;
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote2",
        filename: "static/chunks/remote-entry.js",
        remotes: {
          remote1: `remote1@http://localhost:3001/_next/static/${subpath}/remote-entry.js`,
        },
        exposes: {
          "./country": "./pages/[code].tsx",
        },
        shared: [
          "@chakra-ui/react",
          "@emotion/react",
          "@emotion/styled",
          "framer-motion",
          "@apollo/client",
          "graphql",
          "next-auth",
          "react-hook-form",
          "@hookform/resolvers",
          "zod",
        ].reduce((obj, lib) => {
          return {
            ...obj,
            [lib]: {
              eager: true,
              singleton: true,
            },
          };
        }, {}),
        extraOptions: {
          enableImageLoaderFix: true,
        },
      }),
    );

    return config;
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = withNx(nextConfig);
