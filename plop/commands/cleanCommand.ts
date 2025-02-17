import type { Actions, NodePlopAPI } from 'plop'
import type { Subcommands } from './util/mkSubcommander'
import { mkSubcommander } from './util/mkSubcommander'

const _cleanCommands: Subcommands = {}
export const addCleanCommand = (name: string, clean: Actions) => {
  _cleanCommands[name] = { gen: [], clean }
}

export const cleanCommand = (plop: NodePlopAPI) => {
  mkSubcommander(
    `clean`,
    `Clean assets`,
    `Choose all the assets you want to clean`,
    _cleanCommands,
    'clean',
    plop,
  )
}
