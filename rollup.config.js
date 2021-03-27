import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default [
    {
        input: './src/index.ts',
        output: [{
            format: 'cjs',
            file: './dist/index.cjs',
            banner: require('./scripts/copyright')
        }],
        plugins: [
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        target: 'es5',
                        declaration: false,
                        declarationMap: false,
                        module: "esnext"
                    }
                }
            }),
            terser({
                mangle: {
                    properties: {
                        regex: /^_/
                    }
                },
                format: {
                    comments: /^!/
                }
            })
        ]
    },
    {
        input: './src/index.ts',
        output: [{
            format: 'es',
            file: './dist/index.mjs',
            banner: require('./scripts/copyright')
        }],
        plugins: [
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        target: 'es6',
                        declaration: false,
                        declarationMap: false,
                        module: "esnext"
                    }
                }
            }),
            terser({
                mangle: {
                    properties: {
                        regex: /^_/
                    }
                },
                format: {
                    comments: /^!/
                }
            })
        ]
    }
]