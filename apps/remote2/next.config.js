//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const { withNx } = require('@nrwl/next/plugins/with-nx');
const packageJson = require('../../package.json');

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
        name: 'remote2',
        remotes: {},
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
          exposePages: true,
          enableImageLoaderFix: true,
        },
      })
    );

    return config;
  },
};

module.exports = withNx(nextConfig);
