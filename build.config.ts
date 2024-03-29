/**
 * @file Build Config
 * @module config/build
 * @see https://github.com/flex-development/mkbuild
 */

import { defineBuildConfig, type Config } from '@flex-development/mkbuild'
import tsconfig from './tsconfig.build.json' assert { type: 'json' }

/**
 * Build configuration options.
 *
 * @const {Config} config
 */
const config: Config = defineBuildConfig({
  entries: [
    { ignore: ['cli.ts'] },
    { bundle: true, minify: true, source: 'src/cli.ts' }
  ],
  platform: 'node',
  sourcemap: 'external',
  sourcesContent: false,
  target: [tsconfig.compilerOptions.target, 'node14'],
  treeShaking: true,
  tsconfig: 'tsconfig.build.json'
})

export default config
