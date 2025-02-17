![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-rclone) ![](https://img.shields.io/npm/dt/gobot-rclone) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## RClone via npm

This package allows you to use [RClone](https://rclone.org/) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot rclone --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`rclone`)
const exitCode = await bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-rclone
```

With `gobot-rclone` present, Gobot will default to the `rclone` version corresponding to the `gobot-rclone` version you installed. Now you can use `rclone` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`rclone`)
const exitCode = await bot.run([`--version`])
```

**Locking to a specific version**

The `gobot-rclone` package version always mirrors the underlying `rclone` [version](#all-known-releases):

```bash
npm i gobot-rclone@1.66.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `rclone` even though `gobot-rclone` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`rclone`, { version: `1.66.0` })
const exitCode = await bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`rclone`, { version: `*` })
const exitCode = await bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`rclone`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
const exitCode = await bot.run([`--version`])
```

**Access the child process**

```js
import { gobot } from 'gobot'
const bot = await gobot(`rclone`, {
  env: process.env,
})
const exitCode = await bot.run(
  [`--help`],
  { cwd: `./foo` }, // SpawnOptions
  (proc) => {
    // ChildProcess
    proc.stdout.on('exit', (code) => {
      console.log(`process has exited`)
    })
  },
)
```

**Install globally for CLI access**

Exactly one `gobot-rclone` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-rclone
rclone --help

# Upgrade to  @latest or any version
npm i -g gobot-rclone@latest
```

## CLI

`gobot-rclone` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

### `rclone  [options]`

RClone (https://rclone.org/) runner for Gobot (https://github.com/benallfree/gobot)

**Options**

| Name              | Default         | Discussion                                                                  |
| ----------------- | --------------- | --------------------------------------------------------------------------- |
| `--g-v`           | `true`          | Show informational output                                                   |
| `--g-vv`          | `false`         | Show even more output                                                       |
| `--g-vvv`         | `false`         | Show even more output                                                       |
| `--g-cache-path`  | `host specific` | The cache path to use                                                       |
| `--g-use-version` | `*`             | Run a specific binary version (format: x.y.z semver or x.y.\* semver range) |
| `--g-os`          | `host specific` | Specify OS/Platform                                                         |
| `--g-arch`        | `host specific` | Specify OS/Platform                                                         |

## API

[Full API docs](https://github.com/benallfree/gobot/blob/v1.0.0-alpha.37/docs/readme.md)

## Sample project

View the [RClone sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.37/src/apps/rclone/sample-project) on github.

## Try Gobot's other apps

Gobot has a growing list (currently 52) of [official apps](https://www.npmjs.com/package/gobot#official-gobot-apps). Have you tried them all?

## Getting Help

Join [our Discord community](https://discord.gg/977kMmFnXc).

## Why?

If you are writing a nodejs application that depends upon binaries being present (like [PocketHost](https://github.com/pockethost/pockethost) does), you can add this package as a dependency and execute the binary via CLI or programmatically. This package will make sure your desired external binaries are always available.

If you just want to grab a binary quickly for your own use, `npx gobot@latest <app>` is quite a bit easier than manually downloading zips and installing binaries in shell paths. Gobot handles it all for you effortlessly.

## Adding your app to the Gobot registry

We want to add native support for lots of binary apps!

If you use publish statically linked binary releases on github, you are already 98% compatible with Gobot. In fact, Gobot may already know how to work with it.

To see what initial support looks like:

```bash
npx gobot inspect <user>/<repo>
```

This will index all the releases from your repo and show you exactly what Gobot sees.

If you see everything you expect, you're golden. If things are missing, it may mean some custom programming. Either way, jump on [Discord](https://discord.gg/977kMmFnXc) and let us know your results.

If you have the flexibility or are starting a new project, make sure your release names follows these rules:

- Ends in `.zip`, `.tgz`, `.tar.gz`, `.bz2`
- Include the version ([semver](https://semver.org) recommended)
- Include the platform (`freebsd`, `darwin`, `linux`, `win32`)
- Include the architecture (`arm64`, `x64`, `ia32`, `arm`)

Note: [GoReleaser](https://goreleaser.com/) is a great option if you're publish a Go-based project.

## Contributing

We could use help testing and making sure this works across lots of platforms.

To test a build locally:

```bash
pnpm test
```

## All known releases

`gobot-rclone` versions mirror `rclone` versions. Gobot knows about 102 releases of `rclone`:

| Version | freebsd      | darwin    | linux              | win32          |
| ------- | ------------ | --------- | ------------------ | -------------- |
| 1.66.0  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.65.2  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.65.1  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.65.0  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.64.2  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.64.1  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.64.0  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.63.1  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.63.0  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.62.2  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.62.1  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.62.0  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.61.1  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.61.0  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.60.1  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.60.0  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.59.2  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.59.1  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.59.0  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.58.1  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.58.0  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32/arm64 |
| 1.57.0  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 1.56.2  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 1.56.1  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 1.56.0  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 1.55.1  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 1.55.0  | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32       |
| 1.54.1  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.54.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.53.4  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.53.3  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.53.2  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.53.1  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.53.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.52.3  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.52.2  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.52.1  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.52.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.51.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.50.2  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.50.1  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.50.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.49.5  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.49.4  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.49.3  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.49.2  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.49.1  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.49.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.48.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.47.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.46.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.45.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.44.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.43.1  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.43.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.42.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.41.0  | x64/arm      | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.40.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.39.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.38.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.37.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.36.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.35.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.34.0  | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32       |
| 1.33.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.32.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.31.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.30.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.29.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.28.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.27.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.26.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.25.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.24.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.23.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.22.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.21.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.20.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.19.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.18.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.17.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.16.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.15.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.14.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.13.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.12.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.11.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.10.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.9.0   | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.8.0   | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.7.0   | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.6.0   | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.5.0   | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.4.0   | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.3.0   | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.2.0   | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.1.0   | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 1.0.0   | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 0.99.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 0.98.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 0.97.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
| 0.96.0  | x64/ia32/arm | x64       | x64/ia32/arm       | x64/ia32       |
