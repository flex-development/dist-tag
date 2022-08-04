# dtag

[![conventional commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/@flex-development/dtag.svg)](https://npmjs.com/package/@flex-development/dtag)
[![license](https://img.shields.io/github/license/flex-development/dtag.svg)](LICENSE.md)
[![typescript](https://badgen.net/badge/-/typescript?color=2a72bc&icon=typescript&label)](https://typescriptlang.org)

> [Distribution tag][1] lookup utility for Node.js and CLI environments.

## Install

```sh
yarn add @flex-development/dtag
```

### GitHub Package Registry

To install from the GitHub Package Registry, setup a `.npmrc` or `.yarnrc.yml`
file to authenticate with the registry. A [Personal Access Token with at least
the `read:packages` scope][2] is required.

#### `.npmrc`

```utf-8
//npm.pkg.github.com/:_authToken=${GH_PAT}
@flex-development:registry=https://npm.pkg.github.com/
```

#### `.yarnrc.yml`

```yaml
npmRegistries:
  //npm.pkg.github.com:
    npmAlwaysAuth: true
    npmAuthToken: ${GH_PAT}

npmScopes:
  flex-development:
    npmRegistryServer: https://npm.pkg.github.com
```

### Git

For details on requesting a specific branch, commit, or tag, see
[npm-install][3] or [Git - Protocols | Yarn][4].

#### NPM

```sh
npm i flex-development/dtag
```

#### Yarn

```sh
yarn add @flex-development/dtag@flex-development/dtag
```

## Usage

**TODO**: Update documentation.

[1]: https://docs.npmjs.com/cli/v8/commands/npm-dist-tag
[2]:
  https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries
[3]: https://docs.npmjs.com/cli/v8/commands/npm-install#description
[4]: https://yarnpkg.com/features/protocols#git
