![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-transfersh) ![](https://img.shields.io/npm/dt/gobot-transfersh) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## transfer.sh via npm

This package allows you to use [transfer.sh](https://github.com/dutchcoders/transfer.sh) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot transfersh --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`transfersh`)
const exitCode = await bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-transfersh
```

With `gobot-transfersh` present, Gobot will default to the `transfersh` version corresponding to the `gobot-transfersh` version you installed. Now you can use `transfersh` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`transfersh`)
const exitCode = await bot.run([`--version`])
```

**Locking to a specific version**

The `gobot-transfersh` package version always mirrors the underlying `transfersh` [version](#all-known-releases):

```bash
npm i gobot-transfersh@1.6.1
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `transfersh` even though `gobot-transfersh` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`transfersh`, { version: `1.6.1` })
const exitCode = await bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`transfersh`, { version: `*` })
const exitCode = await bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`transfersh`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
const exitCode = await bot.run([`--version`])
```

**Access the child process**

```js
import { gobot } from 'gobot'
const bot = await gobot(`transfersh`, {
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

Exactly one `gobot-transfersh` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-transfersh
transfersh --help

# Upgrade to  @latest or any version
npm i -g gobot-transfersh@latest
```

## CLI

`gobot-transfersh` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

### `transfersh  [options]`

transfer.sh (https://github.com/dutchcoders/transfer.sh) runner for Gobot (https://github.com/benallfree/gobot)

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

View the [transfer.sh sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.37/src/apps/transfersh/sample-project) on github.

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

`gobot-transfersh` versions mirror `transfersh` versions. Gobot knows about 19 releases of `transfersh`:

| Version | freebsd        | darwin    | linux              | win32    |
| ------- | -------------- | --------- | ------------------ | -------- |
| 1.6.1   | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.6.0   | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.5.0   | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.4.0   | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.1   | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.3.0   | arm64/x64/ia32 | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 1.2.6   |                | x64       | x64/arm            | x64      |
| 1.2.4   |                | x64       | x64/arm            | x64      |
| 1.2.3   |                | x64       | x64/arm            | x64      |
| 1.2.2   |                | x64       | x64/arm            | x64      |
| 1.2.1   |                | x64       | x64/arm            | x64      |
| 1.2.0   |                | x64       | x64/arm            | x64      |
| 1.1.7   |                | x64       | x64/arm            | x64      |
| 1.1.6   |                | x64       | x64/arm            | x64      |
| 1.1.3   |                | x64       | x64/arm            | x64      |
| 1.1.2   |                | x64       | x64/arm            | x64      |
| 1.1.1   |                |           | x64                |          |
| 1.1.0   |                |           |                    |          |
| 1.0.0   |                |           |                    |          |
