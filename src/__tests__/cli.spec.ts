/**
 * @file Unit Tests - CLI
 * @module dist-tag/tests/unit/cli
 */

import type { TestcaseFn } from '#tests/interfaces'
import exec from '@jsdevtools/chai-exec'
import type lookup from '../node'

describe('unit:cli', () => {
  interface Case extends Omit<TestcaseFn<typeof lookup>, 'parameters'> {
    parameters: typeof process['argv']
  }

  const cases: Case[] = [
    { expected: '', parameters: [] },
    { expected: '', parameters: ['2.3.4'] },
    { expected: 'dev', parameters: ['2.3.4-dev.1'] },
    { expected: 'alpha', parameters: ['foo@2.3.4-alpha.1', '--delimiter=@'] },
    { expected: 'beta', parameters: ['foo-package@2.3.4-beta.1', '-d=@'] }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should output ${pf(expected)} given ${pf(parameters)}`, () => {
      // Arrange
      const args: string[] = ['node', '--loader=./loader.mjs', 'src/cli']

      // Act
      const result = exec([...args, ...parameters])

      // Expect
      expect(result).to.have.property('exitCode', 0)
      expect(result).output.to.equal(expected + '\n')
    })
  })
})
