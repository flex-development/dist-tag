## [2.0.0](https://github.com/flex-development/dtag/compare/dtag@1.0.0...dtag@2.0.0) (2022-08-07)


### ⚠ BREAKING CHANGES

* **node:** reimplement tag lookup given new `Options`
* **options:** `Options.prefix?` -> `Options.delimiter?`
* **options:** `Options.version?` -> `Options.target?`
* **options:** drop `Options.map`
* **options:** drop `Options.skip`

### :package: Build

* **cli:** distribute cli as bundle ([504dc86](https://github.com/flex-development/dtag/commit/504dc868157171586cd587be8d909cc792d6e172))


### :pencil: Documentation

* **cli:** usage ([ba1b176](https://github.com/flex-development/dtag/commit/ba1b176d8042dcde31db3555a9c8dcf13385eb43))
* **node:** usage ([c554ed4](https://github.com/flex-development/dtag/commit/c554ed4fbdec89365bb9ec731971142a666d4bdc))


### :sparkles: Features

* **cli:** app ([ea0cc4f](https://github.com/flex-development/dtag/commit/ea0cc4fdc5b4a79915930c073e8a55907ba0743b))
* **options:** `Flags` ([331450b](https://github.com/flex-development/dtag/commit/331450bfe26e1370483a34bc9860a084533a69ab))


### :zap: Refactors

* **node:** reimplement tag lookup given new `Options` ([2c935e6](https://github.com/flex-development/dtag/commit/2c935e663fe356387548144121607ee504423912))
* **options:** improve option names ([aac302b](https://github.com/flex-development/dtag/commit/aac302bb7afa88ec1f5fd8a77626ee3607c1c07b))
* **options:** `DistTagOptions` -> `Options` ([63f05d6](https://github.com/flex-development/dtag/commit/63f05d620b0e87f13aa4eeab7ad37e3479dc7c76))

## [2.0.0-alpha.1](https://github.com/flex-development/dtag/compare/dtag@1.0.0...dtag@2.0.0-alpha.1) (2022-08-05)


### ⚠ BREAKING CHANGES

* **node:** reimplement tag lookup given new `Options`
* **options:** `tagPrefix?` -> `prefix?`
* **options:** `version?` -> `target?`
* **options:** drop `delimiter`
* **options:** drop `map`
* **options:** drop `skip`


### :robot: Continuous Integration

* **workflows:** allow [@dependabot](https://github.com/dependabot) to modify lock file during `ci` runs ([89449a0](https://github.com/flex-development/dtag/commit/89449a010225a078f430bc80195b156df3e4991f))
* **workflows:** skip integrity checks for [@dependabot](https://github.com/dependabot) ([200affb](https://github.com/flex-development/dtag/commit/200affb0361c99e36657d96b47f75af6c0c683b0))


### :pencil: Documentation

* **cli:** usage ([ba1b176](https://github.com/flex-development/dtag/commit/ba1b176d8042dcde31db3555a9c8dcf13385eb43))
* **node:** usage ([c554ed4](https://github.com/flex-development/dtag/commit/c554ed4fbdec89365bb9ec731971142a666d4bdc))


### :sparkles: Features

* **cli:** app ([ea0cc4f](https://github.com/flex-development/dtag/commit/ea0cc4fdc5b4a79915930c073e8a55907ba0743b))
* **options:** `Flags` ([331450b](https://github.com/flex-development/dtag/commit/331450bfe26e1370483a34bc9860a084533a69ab))


### :house_with_garden: Housekeeping

* cleanup [@dependabot](https://github.com/dependabot) config ([865092a](https://github.com/flex-development/dtag/commit/865092a0dd3e2ebcce0cd0eddc5c1a7bd4ca398b))
* prevent prettier from formatting markdown ([b39244a](https://github.com/flex-development/dtag/commit/b39244abcdf3385b057dc72a0021ad010cb38c44))
* refactor project architecture ([d8912bf](https://github.com/flex-development/dtag/commit/d8912bf9d3f65d1051a15e56743ed943499887db))


### :zap: Refactors

* **node:** reimplement tag lookup given new `Options` ([2c935e6](https://github.com/flex-development/dtag/commit/2c935e663fe356387548144121607ee504423912))
* **options:** `DistTagOptions` -> `Options` ([63f05d6](https://github.com/flex-development/dtag/commit/63f05d620b0e87f13aa4eeab7ad37e3479dc7c76))

## 1.0.0 (2021-08-26)


### :pencil: Documentation

* **node:** update `DistTagOptions.version` description ([5630bb0](https://github.com/flex-development/dtag/commit/5630bb0399dca6dd0f48a271b6f5d365c71656d2))
* **node:** update `main` method description ([176a04f](https://github.com/flex-development/dtag/commit/176a04f132a8b755c3503577708607538a6ec4fd))
* **node:** update project description ([1b8ce72](https://github.com/flex-development/dtag/commit/1b8ce72bbcab3ec35002768a893a1e30bdb0b653))
* **node:** usage guide ([860a6dd](https://github.com/flex-development/dtag/commit/860a6dde44538506faa168c1f8092d1b224ffb13))


### :sparkles: Features

* **node:** `main` method ([d6927a4](https://github.com/flex-development/dtag/commit/d6927a47960909879f02c54dfd47aa9d915da603))
* **options:** `DistTagOptions` ([d797642](https://github.com/flex-development/dtag/commit/d79764283d60e91e271231283a4f49bd3a4e20a1))


### :house_with_garden: Housekeeping

* **node:** update package metadata ([40c7480](https://github.com/flex-development/dtag/commit/40c74802c7557a0654c67e5045aa5e37734cedb9))
