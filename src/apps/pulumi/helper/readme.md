![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-pulumi) ![](https://img.shields.io/npm/dt/gobot-pulumi) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## Pulumi via npm

This package allows you to use [Pulumi](https://www.pulumi.com) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot pulumi --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`pulumi`)
const exitCode = await bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-pulumi
```

With `gobot-pulumi` present, Gobot will default to the `pulumi` version corresponding to the `gobot-pulumi` version you installed. Now you can use `pulumi` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`pulumi`)
const exitCode = await bot.run([`--version`])
```

**Locking to a specific version**

The `gobot-pulumi` package version always mirrors the underlying `pulumi` [version](#all-known-releases):

```bash
npm i gobot-pulumi@3.112.0
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `pulumi` even though `gobot-pulumi` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`pulumi`, { version: `3.112.0` })
const exitCode = await bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`pulumi`, { version: `*` })
const exitCode = await bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`pulumi`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
const exitCode = await bot.run([`--version`])
```

**Access the child process**

```js
import { gobot } from 'gobot'
const bot = await gobot(`pulumi`, {
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

Exactly one `gobot-pulumi` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-pulumi
pulumi --help

# Upgrade to  @latest or any version
npm i -g gobot-pulumi@latest
```

## CLI

`gobot-pulumi` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

### `pulumi  [options]`

Pulumi (https://www.pulumi.com) runner for Gobot (https://github.com/benallfree/gobot)

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

View the [Pulumi sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.37/src/apps/pulumi/sample-project) on github.

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

`gobot-pulumi` versions mirror `pulumi` versions. Gobot knows about 238 releases of `pulumi`:

| Version      | darwin    | linux     | win32     |
| ------------ | --------- | --------- | --------- |
| 3.112.0      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.111.1      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.111.0      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.110.0      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.109.0      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.108.1      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.108.0      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.107.0      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.106.0      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.105.0      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.104.2      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.104.1      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.104.0      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.103.1      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.103.0      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.102.0      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.101.1      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.101.0      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.100.0      | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.99.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.98.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.97.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.96.2       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.96.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.96.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.95.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.94.2       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.94.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.94.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.93.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.92.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.91.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.91.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.90.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.90.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.89.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.88.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.88.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.87.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.86.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.85.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.84.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.83.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.82.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.82.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.81.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.80.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.79.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.78.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.78.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.77.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.77.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.76.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.76.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.75.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.74.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.73.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.72.2       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.72.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.72.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.71.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.70.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.69.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.68.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.67.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.67.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.66.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.65.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.65.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.64.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.63.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.62.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.61.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.61.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.60.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.60.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.59.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.59.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.58.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.57.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.57.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.56.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.55.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.54.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.53.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.53.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.52.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.52.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.51.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.51.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.50.2       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.50.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.50.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.49.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.48.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.47.2       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.47.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.46.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.46.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.45.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.44.3       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.44.2       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.44.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.44.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.43.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.43.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.42.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.41.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.40.2       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.40.1       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.40.0       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.39.4       | arm64/x64 | arm64/x64 | x64/arm64 |
| 3.39.3       | arm64/x64 | arm64/x64 | x64       |
| 3.39.2       | arm64/x64 | arm64/x64 | x64       |
| 3.39.1       | arm64/x64 | arm64/x64 | x64       |
| 3.39.0       | arm64/x64 | arm64/x64 | x64       |
| 3.38.0       | arm64/x64 | arm64/x64 | x64       |
| 3.37.2       | arm64/x64 | arm64/x64 | x64       |
| 3.37.1       | arm64/x64 | arm64/x64 | x64       |
| 3.37.0       | arm64/x64 | arm64/x64 | x64       |
| 3.36.0       | arm64/x64 | arm64/x64 | x64       |
| 3.35.3       | arm64/x64 | arm64/x64 | x64       |
| 3.35.2       | arm64/x64 | arm64/x64 | x64       |
| 3.35.1       | arm64/x64 | arm64/x64 | x64       |
| 3.35.0       | arm64/x64 | arm64/x64 | x64       |
| 3.34.1       | arm64/x64 | arm64/x64 | x64       |
| 3.34.0       | arm64/x64 | arm64/x64 | x64       |
| 3.33.2       | arm64/x64 | arm64/x64 | x64       |
| 3.33.1       | arm64/x64 | arm64/x64 | x64       |
| 3.33.0       | arm64/x64 | arm64/x64 | x64       |
| 3.32.1       | arm64/x64 | arm64/x64 | x64       |
| 3.32.0       | arm64/x64 | arm64/x64 | x64       |
| 3.31.1       | arm64/x64 | arm64/x64 | x64       |
| 3.31.0       | arm64/x64 | arm64/x64 | x64       |
| 3.30.0       | arm64/x64 | arm64/x64 | x64       |
| 3.29.1       | arm64/x64 | arm64/x64 | x64       |
| 3.28.0       | arm64/x64 | arm64/x64 | x64       |
| 3.27.0       | arm64/x64 | arm64/x64 | x64       |
| 3.26.1       | arm64/x64 | arm64/x64 | x64       |
| 3.26.0       | arm64/x64 | arm64/x64 | x64       |
| 3.25.1       | arm64/x64 | arm64/x64 | x64       |
| 3.25.0       | arm64/x64 | arm64/x64 | x64       |
| 3.24.1       | arm64/x64 | arm64/x64 | x64       |
| 3.23.2       | arm64/x64 | arm64/x64 | x64       |
| 3.23.1       | arm64/x64 | arm64/x64 | x64       |
| 3.23.0       | arm64/x64 | arm64/x64 | x64       |
| 3.22.1       | arm64/x64 | arm64/x64 | x64       |
| 3.22.0       | arm64/x64 | arm64/x64 | x64       |
| 3.21.1       | arm64/x64 | arm64/x64 | x64       |
| 3.21.0       | arm64/x64 | arm64/x64 | x64       |
| 3.20.0       | arm64/x64 | arm64/x64 | x64       |
| 3.19.0       | arm64/x64 | arm64/x64 | x64       |
| 3.18.1       | arm64/x64 | arm64/x64 | x64       |
| 3.18.0       | arm64/x64 | arm64/x64 | x64       |
| 3.17.1       | arm64/x64 | arm64/x64 | x64       |
| 3.17.0       | arm64/x64 | arm64/x64 | x64       |
| 3.16.0       | arm64/x64 | arm64/x64 | x64       |
| 3.15.0       | arm64/x64 | arm64/x64 | x64       |
| 3.14.0       | arm64/x64 | arm64/x64 | x64       |
| 3.13.2       | arm64/x64 | arm64/x64 | x64       |
| 3.13.1       | arm64/x64 | arm64/x64 | x64       |
| 3.13.0       | arm64/x64 | arm64/x64 | x64       |
| 3.12.0       | arm64/x64 | arm64/x64 | x64       |
| 3.11.0       | arm64/x64 | arm64/x64 | x64       |
| 3.10.3       | arm64/x64 | arm64/x64 | x64       |
| 3.10.2       | arm64/x64 | arm64/x64 | x64       |
| 3.10.1       | arm64/x64 | arm64/x64 | x64       |
| 3.10.0       | arm64/x64 | arm64/x64 | x64       |
| 3.9.1        | arm64/x64 | arm64/x64 | x64       |
| 3.9.0        | arm64/x64 | arm64/x64 | x64       |
| 3.8.0        | arm64/x64 | arm64/x64 | x64       |
| 3.7.1        | arm64/x64 | arm64/x64 | x64       |
| 3.7.0        | arm64/x64 | arm64/x64 | x64       |
| 3.6.1        | arm64/x64 | arm64/x64 | x64       |
| 3.6.0        | arm64/x64 | arm64/x64 | x64       |
| 3.5.1        | arm64/x64 | arm64/x64 | x64       |
| 3.4.0        | arm64/x64 | arm64/x64 | x64       |
| 3.3.1        | arm64/x64 | arm64/x64 | x64       |
| 3.3.0        | arm64/x64 | arm64/x64 | x64       |
| 3.2.1        | arm64/x64 | arm64/x64 |           |
| 3.2.0        | arm64/x64 | arm64/x64 |           |
| 3.1.0        | arm64/x64 | arm64/x64 |           |
| 3.0.0        | arm64/x64 | arm64/x64 |           |
| 3.0.0-rc.1   |           |           |           |
| 3.0.0-beta.2 | arm64/x64 | arm64/x64 |           |
| 3.0.0-beta.1 | arm64/x64 | arm64/x64 |           |
| 2.25.2       | arm64/x64 | arm64/x64 |           |
| 2.25.1       | arm64/x64 | arm64/x64 |           |
| 2.25.0       | arm64/x64 | arm64/x64 |           |
| 2.24.1       | arm64/x64 | arm64/x64 |           |
| 2.24.0       | arm64/x64 | arm64/x64 |           |
| 2.23.2       | arm64/x64 | arm64/x64 |           |
| 2.23.1       | arm64/x64 | arm64/x64 |           |
| 2.23.0       | arm64/x64 | arm64/x64 |           |
| 2.22.0       | x64       | x64       |           |
| 2.21.2       | x64       | x64       |           |
| 2.21.1       | x64       | x64       |           |
| 2.21.0       | x64       | x64       |           |
| 2.20.0       |           |           |           |
| 2.19.0       |           |           |           |
| 2.18.2       |           |           |           |
| 2.18.1       |           |           |           |
| 2.18.0       |           |           |           |
| 2.17.2       |           |           |           |
| 2.17.1       |           |           |           |
| 2.17.0       |           |           |           |
| 2.16.2       |           |           |           |
| 2.16.1       | x64       | x64       |           |
| 2.16.0       |           |           |           |
| 2.15.6       |           |           |           |
| 2.15.5       | x64       | x64       |           |
| 2.15.4       |           |           |           |
| 2.15.3       |           |           |           |
| 2.15.2       |           |           |           |
| 2.15.1       | x64       | x64       |           |
| 2.15.0       |           |           |           |
| 2.14.0       |           |           |           |
| 2.13.2       |           |           |           |
| 2.13.1       |           |           |           |
| 2.13.0       |           |           |           |
| 2.12.1       |           |           |           |
| 2.12.0       |           |           |           |
| 2.11.0       | x64       | x64       |           |
| 2.10.1       |           |           |           |
| 2.9.2        |           |           |           |
| 2.8.2        |           |           |           |
| 2.8.0        |           |           |           |
| 2.7.1        |           |           |           |
| 2.7.0        |           |           |           |
| 2.5.0        |           |           |           |
| 0.8.3        |           |           |           |
| 0.8.2        |           |           |           |
| 0.8.1        |           |           |           |
| 0.8.0        |           |           |           |
| 0.7.0        |           |           |           |
| 0.6.0        |           |           |           |
| 0.4.0        |           |           |           |
| 0.3.0        |           |           |           |
