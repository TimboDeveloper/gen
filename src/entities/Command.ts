
import CommandInterface from '@interfaces/CommandInterface'
import ToolboxInterface from '@interfaces/ToolboxInterface'

import InvalidSyntaxError from './errors/CommandErrors/InvalidSyntaxError'

export default class Command {
    constructor(
        private props: CommandInterface
    ) {
        if (this.getSyntax().trim().length <= 0) throw new InvalidSyntaxError
    }

    getSyntax(): string {
        return this.props.syntax
    }
    getDescription(): string {
        return this.props.description
    }
    getAlias(): string[] {
        return this.props.alias
    }

    execute(toolbox: ToolboxInterface): void {
        this.props.run(toolbox)
    }

}
