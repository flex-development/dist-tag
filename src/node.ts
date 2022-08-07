/**
 * @file Dist Tag Lookup
 * @module dtag/node
 */

import type Options from './options'

/**
 * Searches for a [distribution (dist) tag][1] in `options.target`.
 *
 * If a dist tag isn't found, an empty string will be returned.
 *
 * [1]: https://docs.npmjs.com/cli/v8/commands/npm-dist-tag
 *
 * @example
 *  lookup() // ''
 * @example
 *  lookup({ target: '1.0.0' }) // ''
 * @example
 *  lookup({ target: '3.13.98-dev.640' }) // 'dev'
 * @example
 *  lookup({ delimiter: '@', target: 'foo-package@1.2.0-alpha.1' }) // 'alpha'
 *
 * @param {Options} [options] - Dist tag lookup options
 * @param {string} [options.delimiter] -  Lookup target separator
 * @param {string} [options.target] - Lookup target
 * @return {string} Dist tag or empty string
 */
const lookup = ({ delimiter, target }: Options = {}): string => {
  // do nothing if missing lookup target
  if (target === undefined || !target.trim()) return ''

  // split target at delimiter
  if (delimiter !== undefined) target = target.split(delimiter).pop()

  return target ? /([a-z]+)/.exec(target)?.[0]!.trim() ?? '' : ''
}

export default lookup
