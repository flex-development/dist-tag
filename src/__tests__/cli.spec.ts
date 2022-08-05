/**
 * @file Unit Tests - CLI
 * @module dtag/tests/unit/cli
 */

import exec from '@jsdevtools/chai-exec'
import type { TestcaseFn } from 'tests/interfaces'
import type dtag from '../node'

describe('unit:cli', () => {
  interface Case extends Omit<TestcaseFn<typeof dtag>, 'parameters'> {
    parameters: typeof process['argv']
  }

  const cases: Case[] = [
    { expected: '', parameters: [] },
    { expected: '', parameters: ['2.3.4'] },
    { expected: 'dev', parameters: ['2.3.4-dev.1'] },
    { expected: 'alpha', parameters: ['foo@2.3.4-alpha.1', '--prefix=@'] },
    { expected: 'beta', parameters: ['foo-package@2.3.4-beta.1', '-p=@'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should output ${pf(expected)} given ${pf(parameters)}`, () => {
      // Act
      const result = exec(['ts-node', 'src/cli', ...parameters])

      // Expect
      expect(result).to.have.property('exitCode', 0)
      expect(result).output.to.equal(expected + '\n')
    })
  })
})
