import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import sapperEnv from 'sapper-environment';
import config from 'sapper/config/rollup.js';
import autoPreprocess from 'svelte-preprocess';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

export default {
  client: {
    input: config.client.input().replace(/\.js$/, '.ts'),
    output: config.client.output(),
    plugins: [
      replace({
        ...sapperEnv(),
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        dev,
        preprocess: autoPreprocess(),
        hydratable: true,
        emitCss: true,
      }),
      resolve({
        browser: true,
        dedupe: ['svelte'],
      }),
      commonjs(),
      typescript(),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
          babelHelpers: 'runtime',
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead',
              },
            ],
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input().server.replace(/\.js$/, '.ts'),
    output: config.server.output(),
    plugins: [
      replace({
        ...sapperEnv(),
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        preprocess: autoPreprocess(),
        generate: 'ssr',
        dev,
      }),
      resolve({
        dedupe: ['svelte'],
      }),
      commonjs(),
      typescript(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules ||
        Object.keys(process.binding('natives'))
    ),

    preserveEntrySignatures: 'strict',
    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      commonjs(),
      !dev && terser(),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },
};
