import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import del from 'rollup-plugin-delete'
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser'

import { defineConfig } from 'rollup'

const config = defineConfig([
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'umd',
                name: 'LLMs'
            },
            {
                file: 'dist/index.min.js',
                format: 'umd',
                name: 'LLMs',
                plugins: [
                    terser()
                ]
            }
        ],
        plugins: [
            typescript({
                target: "ES5"
            }),
            resolve(),
        ]
    },
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.esm.js',
                format: 'esm'
            },
            {
                file: 'dist/index.esm.min.js',
                format: 'esm',
                plugins: [terser()],
            }
        ],
        plugins: [
            typescript({
                declaration: false
            }),
            resolve()
        ]
    },
    {
        input: 'dist/types/index.d.ts',
        output: {
            file: 'dist/index.d.ts',
            format: 'es'
        },
        plugins: [
            dts(),
            // del({
            //     targets: 'dist/types',
            //     hook: 'buildEnd'
            // })
        ]
    }
])

export default config