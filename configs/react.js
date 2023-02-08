const shared = require(`./rules/shared`);
const react = require(`./rules/react`);

module.exports = {
	extends: [...shared.extends, ...react.extends],
	plugins: [...shared.plugins, ...react.plugins],
	rules: { ...shared.rules, ...react.rules },
};
