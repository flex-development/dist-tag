/**
 * @file Options
 * @module dist-tag/options
 */

/**
 * Distribution tag lookup options.
 */
interface Options {
  /**
   * Lookup {@link target} separator.
   *
   * If defined, `target` will be split into substrings. The **last** element in
   * the resulting array will become the new lookup target.
   *
   * @example
   *  '@' // target === 'foo-package@1.2.0-alpha.1'
   */
  delimiter?: RegExp | string

  /**
   * Lookup target.
   *
   * @example
   *  '1.0.0'
   * @example
   *  '3.13.98-dev.640'
   * @example
   *  'foo-package@1.2.0-alpha.1'
   */
  target?: string
}

export { type Options as default }
