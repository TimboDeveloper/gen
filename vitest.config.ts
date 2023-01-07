import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vitest/config'

import tsconfig from './tsconfig.json'

const pathMapping = tsconfig.compilerOptions.paths
const alias = {}

for (let key in pathMapping) {

    let path: string = pathMapping[key][0]
    path = path.replace('/*', '')
    key = key.replace('/*', '')

    alias[key] = resolve(path)
}

export default defineConfig({
    resolve: {
        alias
    },
    plugins: [
        AutoImport({
            include: [
                /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            ],
            imports: [
                'vitest',
            ],
            defaultExportByFilename: false,
        })
    ],
    test: {
        include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        exclude: [
            '**/node_modules/**',
            '**/dist/**',
            '**/.{git}/**'
        ],
        watchExclude: [
            '**/node_modules/**',
            '**/dist/**'
        ]
    }
})
