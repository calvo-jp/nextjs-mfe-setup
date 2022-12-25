// @ts-check

const { withNx } = require("@nrwl/next/plugins/with-nx");
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  webpack(config, { isServer }) {
    const subpath = isServer ? "ssr" : "chunks";

    config.plugins.push(
      new NextFederationPlugin({
        name: "host",
        filename: `static/chunks/remote-entry.js`,
        remotes: {
          remote1: `remote1@http://localhost:3001/_next/static/${subpath}/remote-entry.js`,
          remote2: `remote2@http://localhost:3002/_next/static/${subpath}/remote-entry.js`,
        },
        exposes: {},
        shared: {
          "@chakra-ui/react": {
            eager: true,
            singleton: true,
          },
          "@emotion/react": {
            eager: true,
            singleton: true,
          },
          "@emotion/styled": {
            eager: true,
            singleton: true,
          },
          "framer-motion": {
            eager: true,
            singleton: true,
          },
          "@apollo/client": {
            eager: true,
            singleton: true,
          },
          graphql: {
            eager: true,
            singleton: true,
          },
          "next-auth": {
            eager: true,
            singleton: true,
          },
        },
        extraOptions: {
          enableImageLoaderFix: true,
          automaticAsyncBoundary: true,
        },
      }),
    );

    return config;
  },
};

module.exports = withNx(nextConfig);
