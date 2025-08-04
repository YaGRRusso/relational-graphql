import { defineConfig } from '@eddeee888/gcg-typescript-resolver-files';
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '**/*.graphql',
  generates: {
    'src/generated': defineConfig({
      typesPluginsConfig: {
        contextType: '../context#Context',
      },
    }),
  },
};

export default config;
