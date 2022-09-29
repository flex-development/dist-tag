## [dist-tag@2.0.0](https://github.com/flex-development/dist-tag/compare/dist-tag@1.0.1...dist-tag@2.0.0) (2022-09-29)


### ⚠ BREAKING CHANGES

* pure esm

### :package: Build

* fix .npmignore ([a397a13](https://github.com/flex-development/dist-tag/commit/a397a13cf31831ae2cc020349624dd3f3bcbde1d))
* pure esm ([b3d5c2b](https://github.com/flex-development/dist-tag/commit/b3d5c2b356017002b1342ab4a8c4cc5b81c33a8e))
* **deps-dev:** bump @flex-development/mkbuild to 1.0.0-alpha.1 ([2ba2458](https://github.com/flex-development/dist-tag/commit/2ba24580d312494aeb65263b61f06689b09c1c15))
* **deps-dev:** install `mkbuild` from branch `release/1.0.0-alpha.1` ([141aa6b](https://github.com/flex-development/dist-tag/commit/141aa6bebe66ae775d0f728a6ddfa253c83d6a96))


### :robot: Continuous Integration

* add `scope:dependencies` label to [@dependabot](https://github.com/dependabot) pull requests ([2f953e4](https://github.com/flex-development/dist-tag/commit/2f953e4a0b69bdf5d20967d7c3835abbb34ca15d))
* remove [@dependabot](https://github.com/dependabot) registry restrictions ([5b348b5](https://github.com/flex-development/dist-tag/commit/5b348b5cf524864332f261dafaea0856f1767366))
* remove ignored dependecies list for [@dependabot](https://github.com/dependabot) ([a484274](https://github.com/flex-development/dist-tag/commit/a484274b3ec8bd4cae514297d044076129cb351c))
* set reviewers for [@dependabot](https://github.com/dependabot) pull requests ([c89d04c](https://github.com/flex-development/dist-tag/commit/c89d04c758a29e0885caa084730ad7bbd8ea465d))
* **deps:** bump actions/cache from 3.0.7 to 3.0.8 ([#38](https://github.com/flex-development/dist-tag/issues/38)) ([cca277f](https://github.com/flex-development/dist-tag/commit/cca277fbb8fe8e6d15874b8c193c380086af684a))
* **deps:** bump actions/github-script from 6.1.1 to 6.3.0 ([#40](https://github.com/flex-development/dist-tag/issues/40)) ([93951f5](https://github.com/flex-development/dist-tag/commit/93951f576346049a20308cd986a6cea492fb6b39))
* **deps:** bump actions/setup-node from 3.4.1 to 3.5.0 ([#41](https://github.com/flex-development/dist-tag/issues/41)) ([6abbbb1](https://github.com/flex-development/dist-tag/commit/6abbbb1c8e1f0f502b3b7ba2c03c81e9338d9862))
* **deps:** bump flex-development/dist-tag-action from 1.0.0 to 1.1.0 ([#37](https://github.com/flex-development/dist-tag/issues/37)) ([8d023a4](https://github.com/flex-development/dist-tag/commit/8d023a41cccf1d8c48319b0cb06bc5fdeeb7ee2a))
* **deps:** bump flex-development/dist-tag-action from 1.1.0 to 1.1.1 ([#42](https://github.com/flex-development/dist-tag/issues/42)) ([f490230](https://github.com/flex-development/dist-tag/commit/f490230f32f678622d3b5ccb2dfc16158420a35e))
* **workflows:** `add-to-project` ([abced2c](https://github.com/flex-development/dist-tag/commit/abced2cffad7b61ee99d5703274b2f0b60eaa7e1))
* **workflows:** add `secrets.PAT_BOT` ([6a1976d](https://github.com/flex-development/dist-tag/commit/6a1976d9c0b6b7860b00b0371aa89698d217e56b))
* **workflows:** add debug step to ci and release workflows ([f2b22d5](https://github.com/flex-development/dist-tag/commit/f2b22d5437223e1ab10a82ae9d6595062ed79ab5))
* **workflows:** add test coverage output to ci workflow ([f9e143d](https://github.com/flex-development/dist-tag/commit/f9e143d8cd55096642ab517ad1e1c8543464e897))
* **workflows:** check ecosystem and update-type before [@dependabot](https://github.com/dependabot) auto-merge ([8e00957](https://github.com/flex-development/dist-tag/commit/8e00957d7ddf8d986a38285eed470bbe031fbd0b))
* **workflows:** cleanup workflow environments and options ([74aeea9](https://github.com/flex-development/dist-tag/commit/74aeea93b9cfb6c06a505c08e479fe62c7541598))
* **workflows:** fix package-ecosystem check for [@dependabot](https://github.com/dependabot) ([d37b072](https://github.com/flex-development/dist-tag/commit/d37b072ad65f56d7c229b1581be4838880d37088))
* **workflows:** fix prerelease check in `label-linked-issues` ([e931be0](https://github.com/flex-development/dist-tag/commit/e931be001116126286416a72eff62e613a6f70a1))
* **workflows:** fix release branch check in `label-linked-issues` ([0e19393](https://github.com/flex-development/dist-tag/commit/0e19393816ef2853818f6bf092a4dd5ea8654db4))
* **workflows:** hide loader warning when generating release notes ([1338ee0](https://github.com/flex-development/dist-tag/commit/1338ee03c9f9cc5d57e428f0ff4c39aff1d9c3d5))
* **workflows:** remove `query-linked-issues` ([47cb208](https://github.com/flex-development/dist-tag/commit/47cb208630fbb1eb05a9e8f9f9e2f8ce088a80ca))
* **workflows:** require manual review for major [@dependabot](https://github.com/dependabot) updates ([b53b486](https://github.com/flex-development/dist-tag/commit/b53b48628d1ded4f1915d20b528e93bc516b7436))
* **workflows:** run ci workflow on push to feature and hotfix branches ([1a5b013](https://github.com/flex-development/dist-tag/commit/1a5b013261161f378a93ae2471746f9afd8bfc63))
* **workflows:** sign commits for [@dependabot](https://github.com/dependabot) ([c757d99](https://github.com/flex-development/dist-tag/commit/c757d998279ad1a0135e5eef8500d2fc471cc417))
* **workflows:** simplify `integrity` ([a13b535](https://github.com/flex-development/dist-tag/commit/a13b5356d980f4244f8449e1eeb5bb4d60264e02))
* **workflows:** sync workflow and job names ([5818754](https://github.com/flex-development/dist-tag/commit/5818754318b2cb1b055d53635f5aebbb9dc2601b))
* **workflows:** update prerelease check ([8d37d49](https://github.com/flex-development/dist-tag/commit/8d37d49871ddd5a5f06911090f5a032db7cc5045))
* **workflows:** use `secrets.PAT_BOT` in `dependabot-auto` ([61aeaa2](https://github.com/flex-development/dist-tag/commit/61aeaa2d0672739b1259ca5b17e60eecccc6eec2))


### :pencil: Documentation

* add `VITEST_SEGFAULT_RETRY` to development environment variables list ([91ece67](https://github.com/flex-development/dist-tag/commit/91ece67a70461b8fa3d89f09f0183755330a716c))
* cleanup usage guide following pure esm migration ([c155eff](https://github.com/flex-development/dist-tag/commit/c155effd3b85bcc3456f6a98fed5c0616d01b0d2))
* update `~/.gitconfig` instructions ([09785b2](https://github.com/flex-development/dist-tag/commit/09785b2ec0a48cc2bb00d13dc8e3dab9a6f0afde))
* update commit type descriptions ([baf6fa3](https://github.com/flex-development/dist-tag/commit/baf6fa390258dca89bbe5c9727cb13bc0dc49027))
* zsh ([177046e](https://github.com/flex-development/dist-tag/commit/177046e2b7422aabbfc1526eb263b37c7dd23513))
* **workflows:** update `dependabot-auto` description ([3712253](https://github.com/flex-development/dist-tag/commit/3712253c3915540ae78e1106af6f98090366dc78))


### :house_with_garden: Housekeeping

* `.graphqlrc.cts` -> `.graphqlrc.yml` ([d416a0a](https://github.com/flex-development/dist-tag/commit/d416a0a0ce83c421aece39fb07b19e89b0a17c5a))
* eslint x graphql support ([3216bee](https://github.com/flex-development/dist-tag/commit/3216bee3b39ca71c125439f3d11c547d22e2ca02))
* only run checks in lint-staged config ([1ba621e](https://github.com/flex-development/dist-tag/commit/1ba621ee3a6867987ae298e20f7a38dd3fe2e60b))
* only run checks in lint-staged config ([cc6a45f](https://github.com/flex-development/dist-tag/commit/cc6a45f3c4dab3675631040420daf96cda97d1ba))
* prep for pure esm migration ([eba6975](https://github.com/flex-development/dist-tag/commit/eba697576ea752627a9c55cddf130eb7740a1428))
* update eslint config ([ac1e2d2](https://github.com/flex-development/dist-tag/commit/ac1e2d2d83b48d64b9d5564ce755b2a9c07ab93c))
* update sample gitconfig ([d44a96b](https://github.com/flex-development/dist-tag/commit/d44a96b2fe65512c20aa025bfbc96ddab190e168))
* **github:** cleanup label descriptions ([bb6a649](https://github.com/flex-development/dist-tag/commit/bb6a649f46d3295a8c6db09a3ec52479f1e1ab50))
* **github:** convert issue templates to issue forms ([f7513aa](https://github.com/flex-development/dist-tag/commit/f7513aad5b822002ccb73d1a08fbc325b74808f8))
* **github:** remove `type:discussion` label ([0ab2649](https://github.com/flex-development/dist-tag/commit/0ab264910cc72b2d924bb986187e95b89e673b4e))
* **github:** rename label `scope:deps` to `scope:dependencies` ([a2e7f26](https://github.com/flex-development/dist-tag/commit/a2e7f26b18a43452c3ef1ed5fbfe52cf7774f36a))
* **github:** rename label `scope:typescript` to `scope:ts` ([dddc656](https://github.com/flex-development/dist-tag/commit/dddc656ef04c15e8a4868af8341a1c3d3b3f09ac))
* **github:** update pull request template ([ec3151c](https://github.com/flex-development/dist-tag/commit/ec3151ccf52394670bf246aa3cd14c5058789399))
* **pkg:** add `yarn dedupe --check` to `check:ci` ([199ab44](https://github.com/flex-development/dist-tag/commit/199ab44e0b753399b099895cc896696e7371e383))
* **pkg:** only run checks in `check:ci` ([3a6f12e](https://github.com/flex-development/dist-tag/commit/3a6f12e4c94efc3eed0fd4cb3f1f590d891aaf1a))
* **pkg:** run `yarn test:cov` in `check:ci` ([a62046b](https://github.com/flex-development/dist-tag/commit/a62046b6543067ac7f24f8f336ab3f8f81589975))
* **pkg:** use custom loader in `conventional-changelog` script ([8d6c495](https://github.com/flex-development/dist-tag/commit/8d6c4956f3402d0051a3d97cfd94313f1b8dba52))
* **release:** read tag prefix from `package.json` ([d25d7bd](https://github.com/flex-development/dist-tag/commit/d25d7bd10f31de5469cdce1fd9d15bbd92fabcaf))
* **release:** update commit message format ([2065c77](https://github.com/flex-development/dist-tag/commit/2065c778aabdd79f266864f26862ccda431d8323))
* **release:** use current date as release date ([1a0a5a3](https://github.com/flex-development/dist-tag/commit/1a0a5a3ef9dc29f18d8e8762d9234531ad6da6f7))
* **tests:** remove `restoreConsole` from globals ([8c6b5f1](https://github.com/flex-development/dist-tag/commit/8c6b5f1022b9581f291076d1f0905a7d3d1ffd2c))
* **vscode:** cleanup workspace settings ([2b66ddb](https://github.com/flex-development/dist-tag/commit/2b66ddb107f93cb56eebb72ccaea4439a78d0790))

## [dist-tag@1.0.1](https://github.com/flex-development/dist-tag/compare/dist-tag@1.0.1-dev.5...dist-tag@1.0.1) (2022-08-15)

## [dist-tag@1.0.1-dev.5](https://github.com/flex-development/dist-tag/compare/dist-tag@1.0.1-dev.4...dist-tag@1.0.1-dev.5) (2022-08-15)


### :robot: Continuous Integration

* **workflows:** checkout pr merge commit sha before creating release tags ([2051aea](https://github.com/flex-development/dist-tag/commit/2051aeabdf921a257d4016f2f413f2563932c401))

## [dist-tag@1.0.1-dev.4](https://github.com/flex-development/dist-tag/compare/dist-tag@1.0.1-dev.3...dist-tag@1.0.1-dev.4) (2022-08-15)


### :robot: Continuous Integration

* **workflows:** create release tags using `secrets.GITHUB_TOKEN` ([d8c970b](https://github.com/flex-development/dist-tag/commit/d8c970b1f349afaf082b7b86ca827b2d28c1b381))
* **workflows:** fix `release.jobs.publish.steps.tag.env` ([30a0124](https://github.com/flex-development/dist-tag/commit/30a012490e32d1e6bdf39897defbdf1f34554c5e))
* **workflows:** fix `unknown option 'annotated'` ([96f4bf3](https://github.com/flex-development/dist-tag/commit/96f4bf3174757d1838136a8097816a1e19061832))
* **workflows:** fix gpg key trust logic ([d6e5ec3](https://github.com/flex-development/dist-tag/commit/d6e5ec3bc6a33d3e34dc71f6de41528509ff2624))

## [dist-tag@1.0.1-dev.3](https://github.com/flex-development/dist-tag/compare/dist-tag@1.0.1-dev.2...dist-tag@1.0.1-dev.3) (2022-08-15)


### :robot: Continuous Integration

* **workflows:** don't set `GIT_COMMITTER_DATE` when creating tags ([e72a05d](https://github.com/flex-development/dist-tag/commit/e72a05deb8d1d657dd6952d123963c1c9dfc9613))
* **workflows:** fix `the receiving end does not support --signed push` ([67befd2](https://github.com/flex-development/dist-tag/commit/67befd23079b1b82b2e00d5bec3a7b41804e0a4b))
* **workflows:** persist credentials in `release.jobs.publish` ([be06a8e](https://github.com/flex-development/dist-tag/commit/be06a8ec9a482266c417155bdabc882f81220d9c))
* **workflows:** set trust on gpg key ([e650b4d](https://github.com/flex-development/dist-tag/commit/e650b4d4150984d686e410e751a1275f0da688de))

## [dist-tag@1.0.1-dev.2](https://github.com/flex-development/dist-tag/compare/dist-tag@1.0.1-dev.1...dist-tag@1.0.1-dev.2) (2022-08-15)


### :robot: Continuous Integration

* **workflows:** fix tag checkout in `publish` ([905d642](https://github.com/flex-development/dist-tag/commit/905d642d16435cdb26d3290aa63dab27b6bd73b6))
* **workflows:** publish releases from bot account to trigger `publish` workflow ([8a6b019](https://github.com/flex-development/dist-tag/commit/8a6b019549520c033605fe7e1d6ddef90151bbf3))
* **workflows:** remove `release.jobs.cleanup.wait` ([afac5b2](https://github.com/flex-development/dist-tag/commit/afac5b26a4ba42d318a7c41be797bb7ecfb207af))
* **workflows:** sign annotated tags in release workflow ([5aaa8b7](https://github.com/flex-development/dist-tag/commit/5aaa8b763921a893e36b6282dfcc47a44b423a57))

## [dist-tag@1.0.1-dev.1](https://github.com/flex-development/dist-tag/compare/dist-tag@1.0.0...dist-tag@1.0.1-dev.1) (2022-08-15)


### :package: Build

* **deps-dev:** bump @vitest/ui from 0.21.0 to 0.21.1 ([5f5eb90](https://github.com/flex-development/dist-tag/commit/5f5eb904127d260e777d03e8ab235f5e2a04b78e))
* **deps-dev:** bump cspell from 6.6.0 to 6.6.1 ([ba42491](https://github.com/flex-development/dist-tag/commit/ba42491bdad054263128fd2e3c754d869915699b))
* **deps-dev:** bump eslint from 8.21.0 to 8.22.0 ([5022bd9](https://github.com/flex-development/dist-tag/commit/5022bd932893054fe83a396c3a3e508255f6677a))
* **deps-dev:** bump eslint-plugin-jsdoc from 39.3.5 to 39.3.6 ([9d1b748](https://github.com/flex-development/dist-tag/commit/9d1b748c0e42e497838d61b886caaf40c8af49b9))
* **deps-dev:** bump unbuild from 0.7.6 to 0.8.8 ([7c6d96c](https://github.com/flex-development/dist-tag/commit/7c6d96cbba249c798b7365934833f32cd0ead2b3))
* **deps-dev:** bump vitest from 0.21.0 to 0.21.1 ([a208aec](https://github.com/flex-development/dist-tag/commit/a208aec0a457aaf1ab444680d96603e90e6ec272))


### :robot: Continuous Integration

* add gpr registry config for [@dependabot](https://github.com/dependabot) ([03df75d](https://github.com/flex-development/dist-tag/commit/03df75dbe8eb39c8996e7fa1253c3d22610f9766))
* **deps:** bump actions/cache from 3 to 3.0.7 ([ded381b](https://github.com/flex-development/dist-tag/commit/ded381bd9f1314d63998053da38c9935b231e851))
* **deps:** bump actions/checkout from 3 to 3.0.2 ([ae7e0fc](https://github.com/flex-development/dist-tag/commit/ae7e0fc5fe5b669ae5f2c0069e5337c8a7d61c46))
* **deps:** bump actions/github-script from 6.1.0 to 6.1.1 ([35b2984](https://github.com/flex-development/dist-tag/commit/35b298437f0e98227760e161e5da70f214d22792))
* **deps:** bump actions/setup-node from 3 to 3.4.1 ([8817273](https://github.com/flex-development/dist-tag/commit/8817273493846d276bd008267eb9b4bc7dda04fb))
* **workflows:** `label-linked-issues` ([0e77ce8](https://github.com/flex-development/dist-tag/commit/0e77ce8890f7c9be1cf220bf7afd6a138a3ce1ba))
* **workflows:** `query-linked-issues` ([ed9270e](https://github.com/flex-development/dist-tag/commit/ed9270e4ee0b6fab7564d1d9e9f838092fee20f3))
* **workflows:** close inactionable issues after `14` days ([cc29b2a](https://github.com/flex-development/dist-tag/commit/cc29b2a9600b275995a251d626dd6b29fd0aa676))
* **workflows:** fix install commands ([67fa3f4](https://github.com/flex-development/dist-tag/commit/67fa3f4f606428a148fa19b11b486c639162023d)), closes [yarnpkg/berry#2530](https://github.com/yarnpkg/berry/issues/2530) [yarnpkg/berry#3486](https://github.com/yarnpkg/berry/issues/3486)
* **workflows:** lock inactive threads after `60` days ([c26746b](https://github.com/flex-development/dist-tag/commit/c26746b8578c3f5c37cedaee2d32d6a73285759a))
* **workflows:** reduce number of `integrity` runs using `concurrency` ([dc8070b](https://github.com/flex-development/dist-tag/commit/dc8070bd78291117fe92899a7d0467a2913ab9bc))
* **workflows:** reduce number of ci workflow runs ([650e32e](https://github.com/flex-development/dist-tag/commit/650e32ec4f05d832049511f3fde335b128a36c6b))
* **workflows:** refactor release and package publishing ([3d4ee4e](https://github.com/flex-development/dist-tag/commit/3d4ee4ec7a027107ffd90754bd2ab3527ceb85e7))
* **workflows:** reimplement [@dependabot](https://github.com/dependabot) auto approve and merge ([0bee5c3](https://github.com/flex-development/dist-tag/commit/0bee5c3892eddabf3a8c0c60f7f64426bf468643))
* **workflows:** reimplement label management workflow ([677de40](https://github.com/flex-development/dist-tag/commit/677de409cc48ba5010d2dfc1e42b126c93d77dd0))
* **workflows:** reimplement pr auto approval ([47f80bb](https://github.com/flex-development/dist-tag/commit/47f80bbf21d49836317b62c9b8872f4c808ce943))
* **workflows:** remove `node` step from ci workflow ([59be073](https://github.com/flex-development/dist-tag/commit/59be073ff0c0e1061cd6df7b32c3ae6f8ca30c47))
* **workflows:** update `integrity` event path triggers ([30a4b6b](https://github.com/flex-development/dist-tag/commit/30a4b6b64be76cce38c22a79d63751dc411bb79d))
* **workflows:** use github token w/ set permissions ([5ecc776](https://github.com/flex-development/dist-tag/commit/5ecc77642efe6660f2ad6d96f5a1884b84cd3118))


### :pencil: Documentation

* **release:** fix changelog compare link for `dist-tag@1.0.0` ([d848ff6](https://github.com/flex-development/dist-tag/commit/d848ff664144b0b5822a5c3dbb34ffb7f5888bca))
* **workflows:** sort + update reference links ([76d433c](https://github.com/flex-development/dist-tag/commit/76d433c4097c0e0e22d4ac561c116ae971acac4c))


### :house_with_garden: Housekeeping

* update sample gitconfig ([4b86dff](https://github.com/flex-development/dist-tag/commit/4b86dffe050cc838769e8c16d117862cb0137497))
* **github:** add `status:prereleased` label ([84c255f](https://github.com/flex-development/dist-tag/commit/84c255fac0aa43002ec1a8544ebba4604408cf24))
* **pkg:** fix keywords ([a132361](https://github.com/flex-development/dist-tag/commit/a13236114daec14393cc7ccfb6d7be2cca437d34))
* **release:** get recommended version bump based on commits ([67f6126](https://github.com/flex-development/dist-tag/commit/67f61263c13283d6066c880ec23aadcb0ab2c350))
* **release:** update commit message format ([6eb1c04](https://github.com/flex-development/dist-tag/commit/6eb1c0411808639ef86e26ceadc9927bfdb41594))
* **release:** update local workflow ([2b775cc](https://github.com/flex-development/dist-tag/commit/2b775cc3aa7de8413bfc8721b4d0a75d73954ced))
* **release:** update version regex ([07dd57d](https://github.com/flex-development/dist-tag/commit/07dd57d02f3f7dca175734969c8a242bd6f1ca45))
* **release:** use `headerPartial` to change changelog entry title ([57741cc](https://github.com/flex-development/dist-tag/commit/57741cc3f85daf232b74394b80e3de63f3429d85))
* **yarn:** cleanup yarn environment ([861ae16](https://github.com/flex-development/dist-tag/commit/861ae1651ca565349c5b442003ed87f35b80e8a0))

## [dist-tag@1.0.0](https://github.com/flex-development/dist-tag/compare/dist-tag@1.0.0-dev.1...dist-tag@1.0.0) (2022-08-08)


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
