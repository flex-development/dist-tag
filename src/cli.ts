#!/usr/bin/env node

/**
 * @file Dist Tag Lookup - CLI
 * @module dist-tag/cli
 */

import type mri from 'mri'
import path from 'node:path'
import sade from 'sade'
import pkg from '../package.json' assert { type: 'json' }
import type Flags from './flags'
import lookup from './node'

/* c8 ignore start */

/**
 * CLI filename.
 *
 * @const {string} filename
 */
const filename: string = process.argv[1] ?? ''

/**
 * CLI program name.
 *
 * @var {string} name
 */
let name: string = 'dist-tag'

// update cli program name if running esm-compatible cli
if (/dist-tag-esm/.test(filename) || path.extname(filename) === '.mjs') {
  name = 'dist-tag-esm'
}

/**
 * CLI program.
 *
 * @see https://github.com/lukeed/sade#single-command-mode
 *
 * @const {sade.Sade} program
 */
const program: sade.Sade = sade([name, '[target]'].join(' '))

program
  .version(pkg.version) /* c8 ignore stop */
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
