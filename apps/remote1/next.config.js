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
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote1",
        filename: `static/chunks/remote-entry.js`,
        remotes: {},
        exposes: {},
        shared: [
          "@chakra-ui/react",
          "@emotion/react",
          "@emotion/styled",
          "framer-motion",
          "@apollo/client",
          "graphql",
          "next-auth",
          "zod",
        ].reduce((obj, lib) => {
          return { ...obj, [lib]: { eager: true, singleton: true } };
        }, {}),
        extraOptions: {
          exposePages: true,
          enableImageLoaderFix: true,
          automaticAsyncBoundary: true,
        },
      }),
    );

    return config;
  },
};

module.exports = withNx(nextConfig);
