/**
 * @file Options
 * @module dtag/options
 */

/**
 * Distribution tag lookup options.
 */
interface Options {
  /**
   * Git tag prefix.
   */
  prefix?: string

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
