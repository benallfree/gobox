![Gobot](https://raw.githubusercontent.com/benallfree/gobot/v1.0.0-alpha.37/assets/gobot-banner-300x.png)

![](https://img.shields.io/npm/v/gobot-restic) ![](https://img.shields.io/npm/dt/gobot-restic) ![](https://img.shields.io/github/commit-activity/t/benallfree/gobot) ![](https://img.shields.io/github/stars/benallfree/gobot)

## Restic via npm

This package allows you to use [Restic](https://restic.net/) as an npm dependency.

Part of the [Gobot](https://www.npmjs.com/package/gobot) project.

## Usage

**Quick run**

```bash
npx gobot restic --version
```

**Quick use**

```bash
npm i gobot
```

```js
import { gobot } from 'gobot'
const bot = await gobot(`restic`)
const exitCode = await bot.run([`--version`])
```

**Basic version locking**

```bash
npm i gobot-restic
```

With `gobot-restic` present, Gobot will default to the `restic` version corresponding to the `gobot-restic` version you installed. Now you can use `restic` as a real dependency.

```js
import { gobot } from 'gobot'
const bot = await gobot(`restic`)
const exitCode = await bot.run([`--version`])
```

**Locking to a specific version**

The `gobot-restic` package version always mirrors the underlying `restic` [version](#all-known-releases):

```bash
npm i gobot-restic@0.16.4
```

**Override the default version imposed by this package**

In rare cases, you may want to intentionally run a different version of `restic` even though `gobot-restic` is installed.

```js
// Run a specific version (override)
const bot = await gobot(`restic`, { version: `0.16.4` })
const exitCode = await bot.run([`--version`])

// Or the latest version (override)
const bot = await gobot(`restic`, { version: `*` })
const exitCode = await bot.run([`--version`])
```

**Pass environment variables**

```js
import { gobot } from 'gobot'
const bot = await gobot(`restic`, {
  env: process.env, // This is not always necessary, but some apps do need it
})
const exitCode = await bot.run([`--version`])
```

**Access the child process**

```js
import { gobot } from 'gobot'
const bot = await gobot(`restic`, {
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

Exactly one `gobot-restic` can be installed globally. It will receive a bin alias:

```bash
npm i -g gobot-restic
restic --help

# Upgrade to  @latest or any version
npm i -g gobot-restic@latest
```

## CLI

`gobot-restic` comes with a [bin](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#bin) shortcut for CLI usage.

### `restic  [options]`

Restic (https://restic.net/) runner for Gobot (https://github.com/benallfree/gobot)

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

View the [Restic sample project](https://github.com/benallfree/gobot/tree/v1.0.0-alpha.37/src/apps/restic/sample-project) on github.

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

`gobot-restic` versions mirror `restic` versions. Gobot knows about 42 releases of `restic`:

| Version    | freebsd      | darwin    | linux              | win32    |
| ---------- | ------------ | --------- | ------------------ | -------- |
| 0.16.4     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.16.3     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.16.2     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.16.1     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.16.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.15.2     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.15.1     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.15.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.14.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.13.1     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.13.0     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.12.1     | x64/ia32/arm | arm64/x64 | arm64/x64/ia32/arm | x64/ia32 |
| 0.12.0     | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.11.0     | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.10.0     | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.9.6      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.9.5      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.9.4      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.9.3      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.9.2      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.9.1      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.9.0      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.8.3      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.8.2      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.8.1      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.8.0      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.7.3      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.7.2      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.7.1      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.7.0      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.6.1      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.6.0      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.6.0-rc.1 | x64/ia32/arm | x64       | arm64/x64/ia32/arm | ia32     |
| 0.5.0      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.5.0-rc.1 | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.4.0      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.3.3      | x64/ia32/arm | x64       | arm64/x64/ia32/arm | x64/ia32 |
| 0.3.2      |              |           |                    |          |
| 0.3.1      |              |           |                    |          |
| 0.3.0      |              |           |                    |          |
| 0.2.0      |              |           |                    |          |
| 0.1.0      |              |           |                    |          |
