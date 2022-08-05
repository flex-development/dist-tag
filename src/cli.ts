#!/usr/bin/env node

/**
 * @file Dist Tag Lookup CLI
 * @module dtag/cli
 */

import type mri from 'mri'
import sade from 'sade'
import type Flags from './flags'
import dtag from './node'
import pkg from './pkg'

/**
 * CLI program.
 *
 * @see https://github.com/lukeed/sade#single-command-mode
 *
 * @const {sade.Sade} prog
 */
const program: sade.Sade = sade([pkg.name.split('/')[1], '[target]'].join(' '))

program
  .version(pkg.version)
  .describe(pkg.description)
  .example('2.0.0')
  .example('2.0.0-alpha.1')
  .example('$(fx package.json .version)')
  .example('foo-package@2.0.0-beta.1 --prefix @')
  .example('$(git describe --tags --abbrev=0) --prefix @')
  .option('--prefix, -p', 'Git tag prefix')
  .action((target: string, { prefix }: mri.Argv<Flags>): void => {
    console.log(dtag({ prefix, target }))
    process.exit(0)
  })
  .parse(process.argv)
