import { vitest } from 'vitest'

import Command from '@entities/Command'
import InvalidSyntaxError from '@entities/errors/CommandErrors/InvalidSyntaxError'

import CommandInterface from '@interfaces/CommandInterface'

import { createTestCommandOptions, createTestInvalidSyntaxCommandOptions, createTestToolboxOptions } from '@utils/testFunctions'

describe('Command Constructor', () => {
    it('should be create a new Command', () => {
        const commandOptions = createTestCommandOptions()
        const command = new Command(commandOptions)

        expect(command).toBeInstanceOf(Command)
    })

    it('should be throw InvalidSyntaxError', () => {
        const commandOptions: CommandInterface = createTestInvalidSyntaxCommandOptions()
        expect(() => new Command(commandOptions)).toThrow(InvalidSyntaxError)
    })
})

describe('Command Usage', () => {
    it('should be execute the Command callback', () => {
        const consoleSpy = vitest.spyOn(console, 'log')
        
        const commandOptions = createTestCommandOptions()
        const command = new Command(commandOptions)
        const toolbox = createTestToolboxOptions()
    
        command.execute(toolbox)
    
        expect(consoleSpy).toBeCalledWith('hello')
    })
})
