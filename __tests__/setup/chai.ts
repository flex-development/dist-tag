/**
 * @file Test Setup - chai
 * @module tests/setup/chai
 * @see https://chaijs.com
 */

import chaiExec from '@jsdevtools/chai-exec'
import chai from 'chai'

// configure chai
chai.config.includeStack = true
chai.config.truncateThreshold = 0

/**
 * initialize chai plugins.
 *
 * @see https://github.com/JS-DevTools/chai-exec
 */
chai.use(chaiExec)
