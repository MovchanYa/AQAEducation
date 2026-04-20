import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
	{
		ignores: ['jsBasics/**', 'lesson5/**', 'lesson7/**'],
	},

	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: globals.browser },
	},
	{ files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
	tseslint.configs.recommended,
	eslintConfigPrettier,
	{
		files: ['**/*.{js,ts}'],
		rules: {
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
			'no-console': 'off',
			'prefer-const': 'error',
			eqeqeq: 'error',
		},
	},
	tseslint.configs.recommended,
]);
