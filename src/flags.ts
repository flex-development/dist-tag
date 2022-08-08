/**
 * @file CLI Flags
 * @module dist-tag/cli/flags
 */

import type Options from './options'

/**
 * Distribution tag lookup options passed to the CLI program as flags.
 *
 * @extends {Omit<Options, 'target'>}
 */
interface Flags extends Omit<Options, 'target'> {
  /** @see {@link Options.delimiter}. */
  d?: Options['delimiter']
}

export { type Flags as default }
