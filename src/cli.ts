#!/usr/bin/env node

/**
 * @file Dist Tag Lookup - CLI
 * @module dist-tag/cli
 */

import type mri from 'mri'
import sade from 'sade'
import pkg from '../package.json' assert { type: 'json' }
import type Flags from './flags'
import lookup from './node'

sade(`${pkg.name.replace(/.*\//, '')} [target]`)
  .version(pkg.version)
  .describe(pkg.description)
  .example('2.0.0')
  .example('2.0.0-alpha.1')
  .example('foo-package@2.0.0-beta.1 --delimiter @')
  .example('$(git describe --tags --abbrev=0) -d @')
  .option('--delimiter, -d', 'Lookup target separator')
  .action((target: string, { delimiter }: mri.Argv<Flags>): void => {
    console.log(lookup({ delimiter, target }))
    process.exit(0)
  })
  .parse(process.argv)
