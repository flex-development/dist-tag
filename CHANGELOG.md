## [dist-tag@1.0.0](https://github.com/flex-development/dist-tag/compare/dist-tag@1.0.0-dev.1...dist-tag@dist-tag@1.0.0) (2022-08-08)


### :package: Build

* **deps-dev:** bump @faker-js/faker from 7.3.0 to 7.4.0 ([a6d2027](https://github.com/flex-development/dist-tag/commit/a6d2027f6f69ffcd040c65d512d37dee8b5ec937))
* **deps-dev:** bump @types/chai from 4.3.1 to 4.3.3 ([b484ff8](https://github.com/flex-development/dist-tag/commit/b484ff8de2761b80233f618dc0424bb57c6bce91))
* **deps-dev:** bump @typescript-eslint/eslint-parser from 5.32.0 to 5.33.0 ([db238f7](https://github.com/flex-development/dist-tag/commit/db238f7c1f864635c5266a1d0c32e4b06faf15c3))
* **deps-dev:** bump @typescript-eslint/eslint-plugin from 5.32.0 to 5.33.0 ([6802031](https://github.com/flex-development/dist-tag/commit/6802031658ea8423c3e88a0200085f9006cc4b90))
* **deps-dev:** bump cspell from 6.5.0 to 6.6.0 ([33fbc73](https://github.com/flex-development/dist-tag/commit/33fbc73a0489288e79c4c042630abc3ac67662d5))
* **deps-dev:** bump eslint-plugin-jsdoc from 39.3.4 to 39.3.5 ([b714df8](https://github.com/flex-development/dist-tag/commit/b714df8e5531239150200028659fccc31bef77ef))
* **deps-dev:** bump tsconfig-paths from 4.0.0 to 4.1.0 ([dd81bc1](https://github.com/flex-development/dist-tag/commit/dd81bc1524e6521e8c2c1af2026c2766d8c7a467))


### :robot: Continuous Integration

* **deps:** bump bdougie/close-issues-based-on-label from 1.2 to master ([298fab1](https://github.com/flex-development/dist-tag/commit/298fab1a914a8fd96da2b22503f76771a9a81b54))
* **workflows:** fix install command for [@dependabot](https://github.com/dependabot) ([9edfb32](https://github.com/flex-development/dist-tag/commit/9edfb32b22d7f5b631703f0e5aa8265f08beac2a))
* **workflows:** prepare to reimplement post-deployment issue management ([f516cd0](https://github.com/flex-development/dist-tag/commit/f516cd0cc601cea33c5538bc0519e249596dab40))


### :sparkles: Features

* **cli:** `dist-tag-esm` ([#24](https://github.com/flex-development/dist-tag/issues/24)) ([71faf04](https://github.com/flex-development/dist-tag/commit/71faf0402daf92ad0fd4d33fdab9c823c85dd4fb)), closes [#23](https://github.com/flex-development/dist-tag/issues/23)


### :house_with_garden: Housekeeping

* **release:** fix changelog heading logic ([9f14a58](https://github.com/flex-development/dist-tag/commit/9f14a58f2a103f675fe8e6d73003bbb28daee8d1))

## [dist-tag@1.0.0-dev.1](https://github.com/flex-development/dist-tag/compare/dtag@2.0.0...dist-tag@1.0.0-dev.1) (2022-08-08)


### :package: Build

* **ts:** target node 16 ([bc446ac](https://github.com/flex-development/dist-tag/commit/bc446ac7ac3e82aa380df89922779839c341921c))


### :robot: Continuous Integration

* **workflows:** clarify [@dependabot](https://github.com/dependabot) install in `ci` workflow ([531a265](https://github.com/flex-development/dist-tag/commit/531a265d8130ebf97def73dea3b1bd54bd34bef3))
* **workflows:** refactor deployment workflow ([4021ca6](https://github.com/flex-development/dist-tag/commit/4021ca6aedef24d5f3767102479b4bb9ba3e2fdc))


### :house_with_garden: Housekeeping

* remove `CHANGELOG` and `LICENSE` from eslint ignore ([2a48015](https://github.com/flex-development/dist-tag/commit/2a48015bf30ef755bd1a6d690d17e1ae4fc61f3e))
* **github:** cleanup bug report environment section starter ([83d9ed2](https://github.com/flex-development/dist-tag/commit/83d9ed242fb2c9c46c898e7fea6812e00238923c))
* **pkg:** add keywords `npm-publish` and `npm-tag` ([d70003d](https://github.com/flex-development/dist-tag/commit/d70003daad946904ec5a257c9aab443fc1854aff))
* **yarn:** cleanup yarn config ([33a1c8a](https://github.com/flex-development/dist-tag/commit/33a1c8a2ca7129460b0147beeed3b0a601663ea6))

### :zap: Refactors

* rename project to dist-tag ([15a8b94](https://github.com/flex-development/dist-tag/commit/15a8b940b8e3fcab1ea5a7a504e4fa258575c713))

## [dtag@2.0.0](https://github.com/flex-development/dist-tag/compare/dtag@1.0.0...dtag@2.0.0) (2022-08-07)


### ⚠ BREAKING CHANGES

* **node:** reimplement tag lookup given new `Options`
* **options:** `Options.prefix?` -> `Options.delimiter?`
* **options:** `Options.version?` -> `Options.target?`
* **options:** drop `Options.map`
* **options:** drop `Options.skip`

### :package: Build

* **cli:** distribute cli as bundle ([504dc86](https://github.com/flex-development/dist-tag/commit/504dc868157171586cd587be8d909cc792d6e172))


### :pencil: Documentation

* **cli:** usage ([ba1b176](https://github.com/flex-development/dist-tag/commit/ba1b176d8042dcde31db3555a9c8dcf13385eb43))
* **node:** usage ([c554ed4](https://github.com/flex-development/dist-tag/commit/c554ed4fbdec89365bb9ec731971142a666d4bdc))


### :sparkles: Features

* **cli:** app ([ea0cc4f](https://github.com/flex-development/dist-tag/commit/ea0cc4fdc5b4a79915930c073e8a55907ba0743b))
* **options:** `Flags` ([331450b](https://github.com/flex-development/dist-tag/commit/331450bfe26e1370483a34bc9860a084533a69ab))


### :zap: Refactors

* **node:** reimplement tag lookup given new `Options` ([2c935e6](https://github.com/flex-development/dist-tag/commit/2c935e663fe356387548144121607ee504423912))
* **options:** improve option names ([aac302b](https://github.com/flex-development/dist-tag/commit/aac302bb7afa88ec1f5fd8a77626ee3607c1c07b))
* **options:** `DistTagOptions` -> `Options` ([63f05d6](https://github.com/flex-development/dist-tag/commit/63f05d620b0e87f13aa4eeab7ad37e3479dc7c76))

## [dtag@2.0.0-alpha.1](https://github.com/flex-development/dist-tag/compare/dtag@1.0.0...dtag@2.0.0-alpha.1) (2022-08-05)


### ⚠ BREAKING CHANGES

* **node:** reimplement tag lookup given new `Options`
* **options:** `tagPrefix?` -> `prefix?`
* **options:** `version?` -> `target?`
* **options:** drop `delimiter`
* **options:** drop `map`
* **options:** drop `skip`


### :robot: Continuous Integration

* **workflows:** allow [@dependabot](https://github.com/dependabot) to modify lock file during `ci` runs ([89449a0](https://github.com/flex-development/dist-tag/commit/89449a010225a078f430bc80195b156df3e4991f))
* **workflows:** skip integrity checks for [@dependabot](https://github.com/dependabot) ([200affb](https://github.com/flex-development/dist-tag/commit/200affb0361c99e36657d96b47f75af6c0c683b0))


### :pencil: Documentation

* **cli:** usage ([ba1b176](https://github.com/flex-development/dist-tag/commit/ba1b176d8042dcde31db3555a9c8dcf13385eb43))
* **node:** usage ([c554ed4](https://github.com/flex-development/dist-tag/commit/c554ed4fbdec89365bb9ec731971142a666d4bdc))


### :sparkles: Features

* **cli:** app ([ea0cc4f](https://github.com/flex-development/dist-tag/commit/ea0cc4fdc5b4a79915930c073e8a55907ba0743b))
* **options:** `Flags` ([331450b](https://github.com/flex-development/dist-tag/commit/331450bfe26e1370483a34bc9860a084533a69ab))


### :house_with_garden: Housekeeping

* cleanup [@dependabot](https://github.com/dependabot) config ([865092a](https://github.com/flex-development/dist-tag/commit/865092a0dd3e2ebcce0cd0eddc5c1a7bd4ca398b))
* prevent prettier from formatting markdown ([b39244a](https://github.com/flex-development/dist-tag/commit/b39244abcdf3385b057dc72a0021ad010cb38c44))
* refactor project architecture ([d8912bf](https://github.com/flex-development/dist-tag/commit/d8912bf9d3f65d1051a15e56743ed943499887db))


### :zap: Refactors

* **node:** reimplement tag lookup given new `Options` ([2c935e6](https://github.com/flex-development/dist-tag/commit/2c935e663fe356387548144121607ee504423912))
* **options:** `DistTagOptions` -> `Options` ([63f05d6](https://github.com/flex-development/dist-tag/commit/63f05d620b0e87f13aa4eeab7ad37e3479dc7c76))

## dtag@1.0.0 (2021-08-26)


### :pencil: Documentation

* **node:** update `DistTagOptions.version` description ([5630bb0](https://github.com/flex-development/dist-tag/commit/5630bb0399dca6dd0f48a271b6f5d365c71656d2))
* **node:** update `main` method description ([176a04f](https://github.com/flex-development/dist-tag/commit/176a04f132a8b755c3503577708607538a6ec4fd))
* **node:** update project description ([1b8ce72](https://github.com/flex-development/dist-tag/commit/1b8ce72bbcab3ec35002768a893a1e30bdb0b653))
* **node:** usage guide ([860a6dd](https://github.com/flex-development/dist-tag/commit/860a6dde44538506faa168c1f8092d1b224ffb13))


### :sparkles: Features

* **node:** `main` method ([d6927a4](https://github.com/flex-development/dist-tag/commit/d6927a47960909879f02c54dfd47aa9d915da603))
* **options:** `DistTagOptions` ([d797642](https://github.com/flex-development/dist-tag/commit/d79764283d60e91e271231283a4f49bd3a4e20a1))


### :house_with_garden: Housekeeping

* **node:** update package metadata ([40c7480](https://github.com/flex-development/dist-tag/commit/40c74802c7557a0654c67e5045aa5e37734cedb9))
