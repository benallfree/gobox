import type { NodePlopAPI } from 'plop'
import { mkGobot } from '../../src/Gobot'
import { extractUserAndRepo } from '../../src/util/extractUserAndRepo'

export function inspectCommand(plop: NodePlopAPI) {
  plop.setGenerator(`inspect`, {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: `What is the <user>/<repo> of the repo?`,
      },
    ],
    actions: async (answers) => {
      if (!answers) throw new Error(`Expected answers`)
      const { name } = answers
      const { user, repo } = extractUserAndRepo(name)
      const bot = mkGobot(`${user}/${repo}`)
      await bot.reset()
      const md = await bot.versions(`md`)
      return []
    },
  })
}
