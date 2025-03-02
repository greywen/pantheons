import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import del from 'rollup-plugin-delete'
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser'
import copy from 'rollup-plugin-copy'

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
            typescript(),
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
            copy({
                targets: [{ src: 'dist/index.d.ts', dest: 'src/' },]
            }),
            del({
                targets: 'dist/types',
                hook: 'buildEnd'
            })
        ]
    }
])

export default config