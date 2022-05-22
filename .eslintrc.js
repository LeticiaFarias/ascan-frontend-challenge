module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			tsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
	rules: {
		'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
		'react/jsx-filename-extension': [
			1,
			{ extensions: ['.js', '.jsx', '.ts', '.tsx'] },
		],
		'@typescript-eslint/no-non-null-assertion': 'warn',
	},
};
