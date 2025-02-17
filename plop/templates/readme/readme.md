![Gobot](https://raw.githubusercontent.com/benallfree/gobot/{{{branch}}}/assets/gobot-banner.png)

![](https://img.shields.io/npm/v/gobot) ![](https://img.shields.io/npm/dt/gobot) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

# The binary package manager for Node

_Manage and run binaries via npm. CLI and API interfaces._

## Table of Contents

- [Introduction](#introduction)
- [Quickstart](#quickstart)
- [CLI](#cli)
  - [gobot \<app> [gobotOptions] [appOptions]](#gobot-gobotoptions-app-appoptions)
  - [gobot inspect \<app> [gobotOptions]](#gobot-inspect-app-gobotoptions)
- [Official Gobot Apps](#official-gobot-apps)
- [Why?](#why)
- [Technical Notes](#technical-notes)
  - [Repository API Rate Limits](#repository-api-rate-limits)
    - [Github API](#github-api)
- [Adding your app to the Gobot registry](#adding-your-app-to-the-gobot-registry)
- [Contributing](#contributing)

## Introduction

Gobot installs binary apps anywhere `npm` is available. It transparently downloads, installs, and runs binary apps (including semver ranges) for the current operating system and architecture.

Works on Windows, Linux, OS X.

**Features**

- Run any version of [official apps](#official-gobot-apps) and many [unofficial apps](#running-unofficial-apps) from github.
- Binaries are intelligently downloaded and cached
- New binary versions are automatically detected and downloaded
- Efficient - downloads only what is needed

Inspired by [esbuild](https://esbuild.github.io/) and other packages that install binary dependencies

## Quickstart

**Run an [official app](#official-gobot-apps) from anywhere**

```bash
npx gobot <app>
```

[List of official apps](#official-gobot-apps)

**Try running an [unofficial app](#running-unofficial-apps) using github user/repo**

Gobot will examine releases from Github and attempt to decipher versions, platforms, and architectures.

```bash
gobot <user>/<repo> --help
```

**Install gobot globally**

```bash
npm i -g gobot
```

```bash
gobot pocketbase --help
gobot caddy --help
gobot act --help
```

**Use a Gobot app programmatically**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`pocketbase`)
const exitCode = await bot.run([`--help`])
```

**Pass environment variables**

In API mode, Gobot does not forward environment variables by default.

```js
import { gobot } from 'gobot'
const bot = await gobot(`pocketbase`, {
  env: process.env,
})
const exitCode = await bot.run([`--help`])
```

**Use a specific version of a Gobot app**

```js
const bot = await gobot(`pocketbase`, {
  version: `0.19.3`,
})
const exitCode = await bot.run([`--help`])
```

**Access the child process**

```js
import { gobot } from 'gobot'
const bot = await gobot(`pocketbase`, {
  env: process.env,
})
const exitCode = await bot.run(
  [`--help`],       
  { cwd: `./foo` }, // SpawnOptions
  proc => {         // ChildProcess
    proc.stdout.on('exit', code => {
      console.log(`process has exited`)
    })
  }
)
```


**Add an [official app](#official-gobot-apps) as a project dependency**

```bash
npm i gobot-<app>[@version]
```

Gobot will automatically select the specific version of `<app>` you installed and it will stay locked according to your `package.json` constraints.

```bash
npm i gobot-pocketbase@0.19.3
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`pocketbase`)
const exitCode = await bot.run([`--help`])
```

## CLI

Note: All Gobot options begin with `--g-` so as not to conflict with app option switches. Every unrecognized option is passed through to the app binary.

##CLI##

## API

[Full API Docs](https://github.com/benallfree/gobot/tree/{{{branch}}}/docs/readme.md)

## Official Gobot Apps

Gobot supports {{count appSlugs}} apps using bin names. They also have npm helper packages to assist with version locking.

{{{availableAppsMd}}}

### Running unofficial apps

Gobot can run many apps hosted on github. Gobot will examine the releases and attempt to decipher binaries based on version, platform, and architecture.

```bash
gobot <user>/<repo>
```

**Example**

```bash
# Run PocketBase as a direct repo name
# rather than the `pocketbase` alias
gobot pocketbase/pocketbase --help
```

or API:

```ts
const bot = await gobot(`pocketbase/pocketbase`)
const exitCode = await bot.run([`--help`])
```

The above command format **_may_** run the app you have in mind. If it doesn't and you want more information, use

```bash
gobot inspect <user>/<repo>
```

As long as the project uses the github [Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) feature and includes statically linked binaries with zero dependencies, Gobot can probably run it.

Go apps work flawlessly, if the releases are named well. Gobot was originally named and conceived to support Go apps.

##POSTAMBLE##
