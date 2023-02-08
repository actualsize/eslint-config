const shared = require(`./rules/shared`);

module.exports = {
	extends: [...shared.extends],
	plugins: [...shared.plugins],
	rules: { ...shared.rules },
};
