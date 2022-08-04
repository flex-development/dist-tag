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
 *  lookup({ prefix: '@', target: 'foo-package@1.2.0-alpha.1' }) // 'alpha'
 *
 * @param {Options} [options] - Dist tag lookup options
 * @param {string} [options.prefix] - Git tag prefix
 * @param {string} [options.target] - Lookup target
 * @return {string} Dist tag or empty string
 */
const lookup = ({ prefix, target }: Options = {}): string => {
  // do nothing if missing lookup target
  if (target === undefined || !target.trim()) return ''

  // split target at git tag prefix
  // assume last array element is version to perform lookup on
  if (prefix) target = target.split(prefix).pop()

  return target ? /([a-z]+)/.exec(target)?.[0]!.trim() ?? '' : ''
}

export default lookup
