//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const packageJson = require('../../package.json');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  webpack(config, options) {
    const { isServer } = options;
    const subpath = isServer ? 'ssr' : 'chunks';

    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          remote1: `remote1@http://localhost:3001/_next/static/${subpath}/remote-entry.js`,
          remote2: `remote2@http://localhost:3002/_next/static/${subpath}/remote-entry.js`,
        },
        filename: 'static/chunks/remote-entry.js',
        exposes: {},
        shared: {
          '@chakra-ui/react': {
            version: packageJson.dependencies['@chakra-ui/react'],
          },
          '@emotion/react': {
            version: packageJson.dependencies['@emotion/react'],
          },
          '@emotion/styled': {
            version: packageJson.dependencies['@emotion/styled'],
          },
          'framer-motion': {
            version: packageJson.dependencies['framer-motion'],
          },
        },
        extraOptions: {
          enableImageLoaderFix: true,
          automaticAsyncBoundary: true,
        },
      })
    );

    return config;
  },
};

module.exports = withNx(nextConfig);
