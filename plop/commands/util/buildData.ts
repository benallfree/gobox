import { keys } from '@s-libs/micro-dash'
import { existsSync, readFileSync } from 'fs'
import type { NodePlopAPI } from 'plop'
import {
  DEFAULT_PLATFORM_MAP,
  SUPPORTED_ARCH,
} from '../../../src/GithubReleaseProvider'
import { gobot } from '../../../src/api'
import { getApp } from '../../../src/util/getApp'
import { getCurrentGitBranch } from './getCurrentGitBranch'
import { getSlugsFromFileSystem } from './getSlugsFromFileSystem'
import { mkAvailableAppsMd } from './readme'

export async function buildData(plop: NodePlopAPI) {
  const branch = getCurrentGitBranch()

  const data = {
    branch,
    platforms: keys(DEFAULT_PLATFORM_MAP),
    architectures: keys(SUPPORTED_ARCH),
    availableAppsMd: '',
    postambleMd: '',
    appSlugs: getSlugsFromFileSystem(),
  }

  data.availableAppsMd = plop.renderString(await mkAvailableAppsMd(), data)

  return data
}

export async function buildDataForApp(slug: string, plop: NodePlopAPI) {
  const app = await getApp(slug)
  if (!app) {
    throw new Error(`${slug} is not an app (buildDataForApp)`)
  }

  const bot = await gobot(slug, { cachePath: `src/apps/${slug}/test-data` })
  const versions = await bot.versions()

  const data = {
    ...(await buildData(plop)),
    ...app,
    slug,
    bot,
    version: versions[0]!,
    versions,
    notesMd: '',
    releasesMd: '',
  }

  const notes = (() => {
    const notesPath = `./src/apps/${slug}/notes.md`
    if (!existsSync(notesPath)) return ''
    return readFileSync(notesPath).toString()
  })()

  data.releasesMd = await bot.versions('md')

  data.notesMd = plop.renderString(notes, data)

  return data
}
