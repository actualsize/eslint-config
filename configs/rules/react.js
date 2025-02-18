module.exports = {
	extends: [`plugin:react/recommended`],
	plugins: [`react`],
	rules: {
		"react/react-in-jsx-scope": `off`,
		"react/display-name": `off`,
		"react/jsx-props-no-spreading": `off`,
		"react/no-array-index-key": `off`,
		"react/prop-types": `off`,
		"react/require-default-props": "off",
	},
};
