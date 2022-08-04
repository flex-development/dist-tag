/**
 * @file Unit Tests - node
 * @module dtag/tests/unit/node
 */

import type { TestcaseFn } from 'tests/interfaces'
import testSubject from '../node'

describe('unit:node', () => {
  interface Case extends TestcaseFn<typeof testSubject> {}

  const cases: Case[] = [
    { expected: '', parameters: [] },
    { expected: '', parameters: [{ target: '1.0.0' }] },
    { expected: '', parameters: [{ prefix: '@', target: 'foo@' }] },
    { expected: 'dev', parameters: [{ target: '3.13.98-dev.640' }] },
    {
      expected: 'alpha',
      parameters: [{ prefix: '@', target: 'foo-package@1.2.0-alpha.1' }]
    }
  ]

  cases.forEach(({ expected, parameters }) => {
    it(`should return ${pf(expected)} given ${pf(parameters)}`, () => {
      expect(testSubject(...parameters)).to.equal(expected)
    })
  })
})
