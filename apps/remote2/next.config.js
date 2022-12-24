//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
const { withNx } = require("@nrwl/next/plugins/with-nx");

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
        name: "remote2",
        remotes: {},
        filename: "static/chunks/remote-entry.js",
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
        },
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
