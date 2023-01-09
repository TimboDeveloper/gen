import ToolboxInterface from './ToolboxInterface'

export default interface CommandInterface {
    syntax: string,
    alias: string[],
    description: string,
    run: (toolbox: ToolboxInterface) => void
}
