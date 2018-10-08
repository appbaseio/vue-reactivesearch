import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import alias from 'rollup-plugin-alias';
import pkg from './package.json';

const minify = process.env.MINIFY;
const format = process.env.FORMAT;
const es = format === 'es';
const umd = format === 'umd';
const cjs = format === 'cjs';

let output;

if (es) {
	output = {
		file:
			'dist/@appbaseio/vue-reactivesearch.es.js',
		format:
			'es',
	};
} else if (umd) {
	if (
		minify
	) {
		output = {
			file:
				'dist/@appbaseio/vue-reactivesearch.umd.min.js',
			format:
				'umd',
		};
	} else {
		output = {
			file:
				'dist/@appbaseio/vue-reactivesearch.umd.js',
			format:
				'umd',
		};
	}
} else if (cjs) {
	output = {
		file:
			'dist/@appbaseio/vue-reactivesearch.cjs.js',
		format:
			'cjs',
	};
} else if (format) {
	throw new Error(
		`invalid format specified: "${format}".`,
	);
} else {
	throw new Error(
		'no format specified. --environment FORMAT:xxx',
	);
}

export default {
	input:
		'src/index.js',
	output: Object.assign(
		{
			name: umd
				? 'VueReactiveSearch'
				: '@appbaseio/vue-reactivesearch',
		},
		output,
	),
	external: umd
		? Object.keys(
			pkg.peerDependencies
					|| {},
		  )
		: [
			...Object.keys(
				pkg.dependencies
						|| {},
			),
			...Object.keys(
				pkg.peerDependencies
						|| {},
			),
		  ],
	plugins: [
		alias(
			{
				vue$:
					'vue/dist/vue.common.js',
				'@': path.resolve(
					'src/',
				),
				resolve: [
					'.js',
					'.vue',
				],
			},
		),
		vue(),
		buble(
			{
				objectAssign:
					'Object.assign',
			},
		),
		umd
			? resolve(
				{
					jsnext: true,
					main: true,
					browser: true,
				},
			  )
			: {},
		umd
			? commonjs(
				{
					include:
							'node_modules/**',
				},
			  )
			: {},
		umd
			? replace(
				{
					'process.env.NODE_ENV': JSON.stringify(
						minify
							? 'production'
							: 'development',
					),
				},
			  )
			: null,
		minify
			? terser()
			: null,
	].filter(
		Boolean,
	),
};
