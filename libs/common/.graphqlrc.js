const constants = require("./src/lib/constants").default;

/** @type {import('graphql-config').IGraphQLConfig} */
module.exports = {
  schema: constants.GRAPHQL_ENDPOINT,
  documents: "src/lib/**/*.{gql,graphql}",
  extensions: {
    codegen: {
      overwrite: true,
      generates: {
        "src/lib/generated.ts": {
          plugins: [
            "typescript",
            "typescript-operations",
            "typescript-react-apollo",
            {
              add: {
                content: "/* eslint-disable */\n// @ts-nocheck",
              },
            },
          ],
          config: {
            addDocBlocks: false,
            withRefetchFn: true,
            dedupeFragments: true,
            pureMagicComment: true,
            disableDescriptions: true,
          },
        },
        "src/lib/introspection.ts": {
          plugins: [
            "fragment-matcher",
            {
              add: {
                content: "/* eslint-disable */\n// @ts-nocheck",
              },
            },
          ],
        },
      },
    },
  },
};
