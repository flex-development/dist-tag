#!/usr/bin/env node

/**
 * @file Package Data
 * @module dtag/pkg
 */

import fs from 'node:fs'
import path from 'node:path'

/**
 * `package.json` schema.
 */
type PackageJson = typeof import('package.json')

/**
 * Path to `package.json`.
 *
 * @const {string} id
 */
const id: string = path.resolve('package.json')

/**
 * `package.json` data.
 *
 * @const {PackageJson} pkg
 */
const pkg: PackageJson = JSON.parse(fs.readFileSync(id).toString())

export { pkg as default, type PackageJson }
