import CommandInterface from '@interfaces/CommandInterface'
import ToolboxInterface from '@interfaces/ToolboxInterface'

export function createTestCommandOptions(): CommandInterface {
    return {
        syntax: 'test',
        alias: ['teste', 't'],
        description: 'Test command description',
        run(toolbox) {
            console.log(toolbox.first)
        }
    }
}
export function createTestInvalidSyntaxCommandOptions(): CommandInterface {
    return {
        syntax: '',
        alias: ['teste', 't'],
        description: 'Test command description',
        run(toolbox) {
            console.log(toolbox.first)
        }
    }
}

export function createTestToolboxOptions(): ToolboxInterface {
    return {
        first: 'hello',
        second: 'world',
        third: '3',
        args: []
    }
}
